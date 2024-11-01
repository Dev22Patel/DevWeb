import React, { useState } from 'react'
import { SocialLinks } from '../ui/SocialLinks'
import { ConfettiButton } from '../components/ui/confetti'
import ShimmerButton from '@/components/ui/shimmer-button'
export const Contact: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', { name, email, message })
    setSubmitted(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form Section */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold">Have a Coffee With Me :)</h2>
          {submitted ? (
            <div className="bg-zinc-900 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Thank you for your message!</h3>
              <p className="mb-4">I'll get back to you as soon as possible.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-zinc-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                ></textarea>
              </div>
              <ConfettiButton
                type="submit"
                className="relative h-12 w-full text-lg bg-zinc-700 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                Send Message
              </ConfettiButton>
            </form>
          )}
          <div className="pt-8 border-t border-gray-800">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-2xl font-semibold">Connect with me</h3>
    <a
      href="DevPatelCV.pdf"  // Replace with your actual resume link
      download="DevPatelCV.pdf"
      className="text-white font-bold py-2 px-4 rounded-lg transition duration-300"
    >
        <ShimmerButton className='shadow-2xl'>Get My Resume</ShimmerButton>
    </a>
  </div>
  <SocialLinks />
</div>

        </div>

        {/* Location Section */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold">Location</h2>
          <div className="w-full h-[400px] sm:h-[450px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29911.85982864566!2d72.95419164999999!3d20.7697697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cf2d093169b5%3A0xd5cb8e47784c7e7b!2sBilimora%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1698902027404!5i0!3m2!1sen!2sin!4v1698902027404!5i0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg grayscale invert brightness-[.85] contrast-[1.1]"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Address</h3>
            <p className="text-zinc-500">Bilimora, Gujarat, India</p>
          </div>
        </div>
      </div>
    </div>
  )
}
