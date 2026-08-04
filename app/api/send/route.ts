import nodemailer from 'nodemailer';

const NOTIFY_EMAIL = 'spacesolarsolution@gmail.com';

const SUBJECT_LABELS: Record<string, string> = {
    general: 'General Inquiry',
    quote: 'Quote Request',
    support: 'Technical Support',
    feedback: 'Feedback',
};

function buildEmailHtml({ name, email, phone, subjectLabel, message }: {
    name: string; email: string; phone: string; subjectLabel: string; message: string;
}) {
    return `
        <div>
            <h1>New message from ${name}</h1>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Subject:</strong> ${subjectLabel}</p>
            <p><strong>Message:</strong> ${message}</p>
        </div>
    `;
}

async function sendEmailNotification({ name, email, phone, subject, message }: {
    name: string; email: string; phone: string; subject: string; message: string;
}) {
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailAppPassword) {
        throw new Error('Email is not configured (missing GMAIL_USER / GMAIL_APP_PASSWORD)');
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: gmailUser, pass: gmailAppPassword },
    });

    const subjectLabel = SUBJECT_LABELS[subject] ?? subject;

    await transporter.sendMail({
        from: `Space Solar Solution Website <${gmailUser}>`,
        to: NOTIFY_EMAIL,
        replyTo: email,
        subject: `New ${subjectLabel}: ${name}`,
        html: buildEmailHtml({ name, email, phone, subjectLabel, message }),
    });
}

async function sendWhatsAppNotification({ name, email, phone, subject, message }: {
    name: string; email: string; phone: string; subject: string; message: string;
}) {
    const callMeBotPhone = process.env.CALLMEBOT_PHONE;
    const callMeBotApiKey = process.env.CALLMEBOT_APIKEY;

    if (!callMeBotPhone || !callMeBotApiKey) {
        throw new Error('WhatsApp is not configured (missing CALLMEBOT_PHONE / CALLMEBOT_APIKEY)');
    }

    const subjectLabel = SUBJECT_LABELS[subject] ?? subject;
    const text = [
        `New ${subjectLabel} from the website`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Message: ${message}`,
    ].join('\n');

    const url = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(callMeBotPhone)}&text=${encodeURIComponent(text)}&apikey=${encodeURIComponent(callMeBotApiKey)}`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`CallMeBot request failed with status ${response.status}`);
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone = 'Not provided', subject = 'general', message } = body;

        if (!name || !email || !message) {
            return Response.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const lead = { name, email, phone, subject, message };

        const [emailResult, whatsappResult] = await Promise.allSettled([
            sendEmailNotification(lead),
            sendWhatsAppNotification(lead),
        ]);

        if (emailResult.status === 'rejected') {
            console.error('Email notification failed:', emailResult.reason);
            return Response.json({ error: 'Failed to send notification email' }, { status: 500 });
        }

        if (whatsappResult.status === 'rejected') {
            console.error('WhatsApp notification failed:', whatsappResult.reason);
        }

        return Response.json({ success: true, whatsapp: whatsappResult.status === 'fulfilled' });
    } catch (error) {
        console.error('Contact form submission failed:', error);
        return Response.json({ error: 'Something went wrong' }, { status: 500 });
    }
}
