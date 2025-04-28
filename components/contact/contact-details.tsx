import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactDetails() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

      <div className="space-y-6">
        <div className="flex items-start">
          <div className="p-3 bg-primary/10 rounded-full mr-4">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold mb-1">Our Location</h3>
            <p className="text-gray-600">123 Solar Street, Lucknow, India</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="p-3 bg-primary/10 rounded-full mr-4">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold mb-1">Phone Number</h3>
            <p className="text-gray-600">+91 79860 57717</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="p-3 bg-primary/10 rounded-full mr-4">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold mb-1">Email Address</h3>
            <p className="text-gray-600">info@spacesolarsolutions.com</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="p-3 bg-primary/10 rounded-full mr-4">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold mb-1">Working Hours</h3>
            <p className="text-gray-600">Monday - Saturday: 09:00 AM - 09:00 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  )
}
