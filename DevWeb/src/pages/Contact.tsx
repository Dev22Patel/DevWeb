import React, { useState } from 'react'
import { SocialLinks } from '../ui/SocialLinks'
import { ConfettiButton } from '../components/ui/confetti'
import ShimmerButton from '@/components/ui/shimmer-button'

export const Contact: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })

  const validateForm = () => {
    let isValid = true
    const newErrors = {
      name: '',
      email: '',
      message: ''
    }

    // Name validation
    if (!name.trim()) {
      newErrors.name = 'Name is required'
      isValid = false
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim()) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email'
      isValid = false
    }

    // Message validation
    if (!message.trim()) {
      newErrors.message = 'Message is required'
      isValid = false
    } else if (message.trim().length < 1) {
      newErrors.message = 'Message must be at least 1 characters'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const isFormValid = () => {
    return (
      name.trim() !== '' &&
      email.trim() !== '' &&
      message.trim().length >= 1 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Form submitted:', { name, email, message })
      setSubmitted(true)
      setName('')
      setEmail('')
      setMessage('')
      setErrors({
        name: '',
        email: '',
        message: ''
      })
    }
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-28 py-16 sm:py-24">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12">
        {/* Location Section - Ordered first on mobile */}
        <div className="order-1 lg:order-2 space-y-6">
          <h2 className="text-4xl font-bold ">Location</h2>
          <div className="w-full h-[400px] sm:h-[450px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29911.85982864566!2d72.95419164999999!3d20.7697697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cf2d093169b5%3A0xd5cb8e47784c7e7b!2sBilimora%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1698902027404!5i0!3m2!1sen!2sin!4v1698902027404!5i0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg dark:grayscale dark:invert dark:brightness-[.85] dark:contrast-[1.1] "
            />
          </div>
          <div className='text-end'>
            <h3 className="text-2xl font-semibold mb-3">Address</h3>
            <p className="text-zinc-500 mb-[38.5px]">Bilimora, Gujarat, India</p>
          </div>
          <hr/>
        </div>

        {/* Contact Form Section - Ordered second on mobile */}
        <div className="order-2 lg:order-1 space-y-8">
          <h2 className="text-4xl font-bold">Have a Coffee With Me :)</h2>
          {submitted ? (
            <div className="dark:bg-zinc-900 bg-slate-100 rounded-lg p-8 shadow-lg">
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
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-400 transition duration-200 ${
                    errors.name ? 'border-red-500' : 'border-gray-700'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
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
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-400 transition duration-200 ${
                    errors.email ? 'border-red-500' : 'border-gray-700'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
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
                  className={`w-full px-4 py-3  border rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-400 transition duration-200 ${
                    errors.message ? 'border-red-500' : 'border-gray-700'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
              <ConfettiButton
                type="submit"
                disabled={!isFormValid()}
                className={`relative h-12 w-full text-lg font-semibold py-3 px-6 rounded-lg transition duration-300 ${
                  isFormValid()
                    ? 'dark:bg-zinc-700 bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                }`}
              >
                Send Message
              </ConfettiButton>
            </form>
          )}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold">Connect with me</h3>
              <a
                href="DevPatelCV.pdf"
                download="DevPatelCV.pdf"
              >
                <ShimmerButton className='shadow-2xl'>
                            <span className='whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg ml-2'>My Resume
                            </span>
            </ShimmerButton>
              </a>
            </div>
            <SocialLinks />
          </div>
          <hr/>
        </div>
      </div>
    </div>
  )
}

export default Contact
