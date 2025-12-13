import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const contact = [
  {
    icon: <MapPin />,
    heading: "Location",
    link: "Bareilly, Uttar Pradesh, India",
    href: "https://www.google.com/maps/place/Bareilly,+Uttar+Pradesh,+India"
  },
  {
    icon: <Phone />,
    heading: "Phone",
    link: "+91-9058949485",
    href: "tel:+919058949485"
  },
  {
    icon: <Mail />,
    heading: "Email",
    link: "sauravbhadauriya17@gmail.com",
    href: "mailto:sauravbhadauriya17@gmail.com"
  }
]

function GetInTouch() {
  return (
    <section id='contact' className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Get In Touch</h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-around ">
          {contact.map((item, index) => (
            <div
              key={index}
              className="bg-white opacity-90 shadow-lg rounded-lg p-8 flex flex-col items-center w-full md:max-w-xs mx-auto"
            >
              <span className="text-sky-800  rounded-full p-2 bg-sky-200 mb-4">{item.icon}</span>
              <h6 className="text-2xl font-semibold mb-2">{item.heading}</h6>
              <a
                href={item.href}
                className="text-blue-600 hover:underline wrap-break-words text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
