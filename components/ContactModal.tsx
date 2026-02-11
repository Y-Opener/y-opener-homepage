import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

type ModalType = 'cohort' | 'consultation';

interface ModalConfig {
  title: string;
  subject: string;
  placeholder: string;
}

const CONFIG: Record<ModalType, ModalConfig> = {
  cohort: {
    title: 'Apply for Next Cohort',
    subject: 'Accelerator Cohort Application',
    placeholder: 'Tell us about yourself and your startup idea...',
  },
  consultation: {
    title: 'Book a Consultation',
    subject: 'Consulting Inquiry',
    placeholder: 'Tell us about your business and what challenges you face...',
  },
};

const ContactModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<ModalType>('cohort');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      setType(detail.type);
      setOpen(true);
      setStatus('idle');
      setName('');
      setEmail('');
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

  const config = CONFIG[type];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://formsubmit.co/ajax/admin@yopener.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: config.subject,
        }),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      onClick={() => setOpen(false)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg bg-[#0B0F0E] border border-white/10 rounded-2xl p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-normal text-white mb-2">{config.title}</h2>
        <p className="text-neutral-500 font-mono text-sm mb-8">
          Send us a message and we'll get back to you shortly.
        </p>

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 rounded-full bg-[#7CFF98]/10 border border-[#7CFF98]/30 flex items-center justify-center mx-auto mb-4">
              <span className="text-[#7CFF98] text-xl">✓</span>
            </div>
            <p className="text-white text-lg mb-2">Message sent!</p>
            <p className="text-neutral-500 font-mono text-sm mb-6">We'll be in touch soon.</p>
            <button
              onClick={() => setOpen(false)}
              className="px-6 py-2 bg-[#7CFF98] text-[#0B0F0E] rounded-lg font-medium hover:bg-[#6ee885] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="contact-name" className="block text-sm text-neutral-400 font-mono mb-1.5">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#7CFF98]/50 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-sm text-neutral-400 font-mono mb-1.5">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#7CFF98]/50 transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm text-neutral-400 font-mono mb-1.5">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#7CFF98]/50 transition-colors resize-none"
                placeholder={config.placeholder}
              />
            </div>

            {status === 'error' && (
              <p className="text-red-400 text-sm font-mono">
                Something went wrong. Please try again or email us directly at admin@yopener.com.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3 bg-[#7CFF98] text-[#0B0F0E] rounded-lg font-medium hover:bg-[#6ee885] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
