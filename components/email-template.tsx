import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
    firstName,
    email,
    phone,
    subject,
    message,
}) => (
    <div>
        <h1>New message from {firstName}</h1>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Subject:</strong> {subject}</p>
        <p><strong>Message:</strong> {message}</p>
    </div>
);
