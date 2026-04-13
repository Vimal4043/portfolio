import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { CONTACT } from '../utils/data'
import { fadeUp, viewportOnce } from '../utils/motion'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

const cardIcon = (label) => {
  const baseClass = 'h-6 w-6 text-sky-400'

  if (label === 'Email') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={baseClass} aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }

  if (label === 'Phone') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={baseClass} aria-hidden="true">
        <path
          d="M7 3h3l1 4-2 2a14 14 0 006 6l2-2 4 1v3c0 1-1 2-2 2A16 16 0 013 7c0-1 1-2 2-2h2z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (label === 'LinkedIn') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={baseClass} aria-hidden="true">
        <rect x="3" y="9" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="2" />
        <circle cx="5" cy="5" r="2" stroke="currentColor" strokeWidth="2" />
        <path d="M11 21v-7a3 3 0 013-3 3 3 0 013 3v7" stroke="currentColor" strokeWidth="2" />
        <path d="M11 13v8" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  }

  if (label === 'GitHub') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={baseClass} aria-hidden="true">
        <path
          d="M12 3a9 9 0 00-3 17.5V17c0-1 .6-1.5 1.3-1.5h3.4c.7 0 1.3.5 1.3 1.5v3.5A9 9 0 0012 3z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M9 19c-2 1-3-1-3-1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={baseClass} aria-hidden="true">
      <path d="M8 4h12v12H8z" stroke="currentColor" strokeWidth="2" />
      <path d="M4 8h12v12H4z" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

  const contactCards = [
    {
      label: 'Email',
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    ...CONTACT.socials.map((social) => ({
      label: social.name,
      value: social.href.replace('https://', '').replace('http://', ''),
      href: social.href,
      external: true,
    })),
  ]

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (submitted) {
      setSubmitted(false)
    }
    if (submitError) {
      setSubmitError('')
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    if (!endpoint) {
      setSubmitError('Form is not connected yet. Add VITE_FORMSPREE_ENDPOINT in your .env file.')
      return
    }

    try {
      setIsSending(true)
      setSubmitError('')

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        throw new Error('Failed to submit')
      }

      setSubmitted(true)
      setForm(initialForm)
    } catch {
      setSubmitError('Message could not be sent. Please try again in a moment.')
      setSubmitted(false)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="px-4 pb-20 pt-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Contact"
          title="Let us Build Something Useful"
          subtitle="Feel free to reach out for opportunities, collaborations, or product discussions."
        />

        <motion.div
          className="grid gap-7 lg:grid-cols-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="space-y-5">
            {contactCards.map((card) => (
              <article
                key={card.label}
                className="rounded-2xl border border-sky-400/25 bg-linear-to-br from-slate-900/85 via-slate-900/80 to-blue-950/85 p-5 shadow-[0_10px_35px_rgba(2,132,199,0.12)] backdrop-blur transition hover:-translate-y-0.5 hover:border-sky-300/45"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 shrink-0">{cardIcon(card.label)}</span>
                  <div>
                    <p className="text-sm font-medium text-slate-300">{card.label}</p>
                    <a
                      className="mt-1 block text-xl font-semibold leading-tight text-white transition hover:text-sky-300"
                      href={card.href}
                      target={card.external ? '_blank' : undefined}
                      rel={card.external ? 'noreferrer' : undefined}
                    >
                      {card.value}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-sky-400/25 bg-linear-to-br from-slate-900/85 via-slate-900/80 to-blue-950/85 p-7 shadow-[0_14px_45px_rgba(2,132,199,0.12)] backdrop-blur"
          >
            <label className="mb-4 block text-sm font-medium text-slate-100">
              Name
              <input
                className="mt-2 w-full rounded-xl border border-sky-300/25 bg-slate-900/65 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-400 focus:border-sky-400"
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={onChange}
                required
              />
            </label>

            <label className="mb-4 block text-sm font-medium text-slate-100">
              Email
              <input
                className="mt-2 w-full rounded-xl border border-sky-300/25 bg-slate-900/65 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-400 focus:border-sky-400"
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={form.email}
                onChange={onChange}
                required
              />
            </label>

            <label className="block text-sm font-medium text-slate-100">
              Message
              <textarea
                className="mt-2 min-h-32 w-full resize-y rounded-xl border border-sky-300/25 bg-slate-900/65 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-400 focus:border-sky-400"
                name="message"
                placeholder="Your message..."
                value={form.message}
                onChange={onChange}
                required
              />
            </label>

            <button
              disabled={isSending}
              className="mt-5 w-full rounded-xl bg-linear-to-r from-blue-500 to-cyan-500 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:from-blue-400 hover:to-cyan-400 disabled:cursor-not-allowed disabled:opacity-75 disabled:hover:translate-y-0"
              type="submit"
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
            {submitError ? (
              <p className="mt-3 text-sm text-rose-300">{submitError}</p>
            ) : null}
            {submitted ? (
              <p className="mt-3 text-sm text-emerald-300">
                Message captured. I will get back to you soon.
              </p>
            ) : null}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
