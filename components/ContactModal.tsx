import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

type ModalType = 'cohort' | 'consultation';

const NEED_TYPES = [
  'AI strategy & roadmap',
  'AI tool evaluation & selection',
  'Workflow automation',
  'Research & data systems',
  'Not sure — let\'s explore',
];

const ContactModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<ModalType>('consultation');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Shared fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Consultation-specific fields
  const [organisation, setOrganisation] = useState('');
  const [needType, setNeedType] = useState('');
  const [challenge, setChallenge] = useState('');

  // Cohort-specific field
  const [message, setMessage] = useState('');

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      setType(detail.type);
      setOpen(true);
      setStatus('idle');
      setName('');
      setEmail('');
      setOrganisation('');
      setNeedType('');
      setChallenge('');
      setMessage('');
    };
    window.addEventListener('open-contact-modal', handler);
    return () => window.removeEventListener('open-contact-modal', handler);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const body = type === 'consultation'
      ? {
          name,
          email,
          _subject: `Consulting Enquiry — ${name}`,
          Organisation: organisation || 'Not provided',
          'Type of challenge': needType,
          'Challenge description': challenge,
        }
      : {
          name,
          email,
          _subject: 'Accelerator Cohort Application',
          message,
        };

    try {
      const res = await fetch('https://formsubmit.co/ajax/admin@yopener.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (!open) return null;

  const inputClass = 'w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#7CFF98]/50 transition-colors';
  const labelClass = 'block text-sm text-neutral-400 font-mono mb-1.5';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
      onClick={() => setOpen(false)}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-lg bg-[#0B0F0E] border border-white/10 rounded-2xl p-8 shadow-2xl overflow-y-auto max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'consultation' ? (
          <>
            <h2 className="text-2xl font-normal text-white mb-2">Book a Consultation</h2>
            <p className="text-neutral-500 font-mono text-sm mb-8">
              Tell us about your project. We'll review and be in touch within one business day.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-normal text-white mb-2">Apply for Next Cohort</h2>
            <p className="text-neutral-500 font-mono text-sm mb-8">
              Send us a message and we'll get back to you shortly.
            </p>
          </>
        )}

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 rounded-full bg-[#7CFF98]/10 border border-[#7CFF98]/30 flex items-center justify-center mx-auto mb-4">
              <span className="text-[#7CFF98] text-xl">✓</span>
            </div>
            <p className="text-white text-lg mb-2">Enquiry received.</p>
            <p className="text-neutral-500 font-mono text-sm mb-6">
              {type === 'consultation'
                ? "We'll review your project and be in touch within one business day."
                : "We'll be in touch soon."}
            </p>
            <button
              onClick={() => setOpen(false)}
              className="px-6 py-2 bg-[#7CFF98] text-[#0B0F0E] rounded-lg font-medium hover:bg-[#6ee885] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            {/* Shared: Name */}
            <div>
              <label htmlFor="contact-name" className={labelClass}>Name</label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
                placeholder="Your name"
              />
            </div>

            {/* Shared: Email */}
            <div>
              <label htmlFor="contact-email" className={labelClass}>
                {type === 'consultation' ? 'Work email' : 'Email'}
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
                placeholder="you@organisation.com"
              />
            </div>

            {type === 'consultation' ? (
              <>
                {/* Organisation */}
                <div>
                  <label htmlFor="contact-org" className={labelClass}>
                    Organisation <span className="text-neutral-600">(optional)</span>
                  </label>
                  <input
                    id="contact-org"
                    type="text"
                    value={organisation}
                    onChange={(e) => setOrganisation(e.target.value)}
                    className={inputClass}
                    placeholder="University, company, or research lab"
                  />
                </div>

                {/* Type of challenge */}
                <div>
                  <label htmlFor="contact-need" className={labelClass}>What best describes your need?</label>
                  <select
                    id="contact-need"
                    required
                    value={needType}
                    onChange={(e) => setNeedType(e.target.value)}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" disabled className="bg-[#0B0F0E]">Select one...</option>
                    {NEED_TYPES.map((nt) => (
                      <option key={nt} value={nt} className="bg-[#0B0F0E]">{nt}</option>
                    ))}
                  </select>
                </div>

                {/* Challenge */}
                <div>
                  <label htmlFor="contact-challenge" className={labelClass}>
                    Describe your challenge{' '}
                    <span className="text-neutral-600">— 2–3 sentences is enough</span>
                  </label>
                  <textarea
                    id="contact-challenge"
                    required
                    rows={3}
                    value={challenge}
                    onChange={(e) => setChallenge(e.target.value)}
                    className={`${inputClass} resize-none`}
                    placeholder="What are you trying to solve, and what have you tried so far?"
                  />
                </div>
              </>
            ) : (
              /* Cohort: simple message */
              <div>
                <label htmlFor="contact-message" className={labelClass}>Message</label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us about yourself and your startup idea..."
                />
              </div>
            )}

            {status === 'error' && (
              <p className="text-red-400 text-sm font-mono">
                Something went wrong. Please try again or email us at admin@yopener.com.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3 bg-[#7CFF98] text-[#0B0F0E] rounded-lg font-medium hover:bg-[#6ee885] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : type === 'consultation' ? 'Submit Enquiry' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
