import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Copy, Check, Linkedin, MapPin, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [emailSuggestion, setEmailSuggestion] = useState<string | null>(null);

  // Common email typo detector
  const checkEmailTypo = (email: string): string | null => {
    const parts = email.split('@');
    if (parts.length !== 2) return null;
    const domain = parts[1].toLowerCase();
    const commonTypos: Record<string, string> = {
      'gmial.com': 'gmail.com',
      'gmai.com': 'gmail.com',
      'gamil.com': 'gmail.com',
      'gnail.com': 'gmail.com',
      'yaho.com': 'yahoo.com',
      'yahooo.com': 'yahoo.com',
      'hotmial.com': 'hotmail.com',
      'outlok.com': 'outlook.com',
      'outloo.com': 'outlook.com',
    };
    if (commonTypos[domain]) {
      return `${parts[0]}@${commonTypos[domain]}`;
    }
    return null;
  };

  const validateField = (name: keyof FormState, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return undefined;

      case 'email': {
        const trimmed = value.trim();
        if (!trimmed) return 'Email address is required.';
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(trimmed)) {
          return 'Please enter a valid email address (e.g. name@example.com).';
        }
        return undefined;
      }

      case 'subject':
        if (!value.trim()) return 'Subject is required.';
        if (value.trim().length < 3) return 'Subject must be at least 3 characters.';
        return undefined;

      case 'message':
        if (!value.trim()) return 'Message is required.';
        if (value.trim().length < 10) return 'Message must be at least 10 characters.';
        return undefined;

      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'email') {
      const suggestion = checkEmailTypo(value);
      setEmailSuggestion(suggestion);
    }

    if (touched[name]) {
      const error = validateField(name as keyof FormState, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormState, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const applyEmailSuggestion = () => {
    if (emailSuggestion) {
      setFormData((prev) => ({ ...prev, email: emailSuggestion }));
      setEmailSuggestion(null);
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    const nameError = validateField('name', formData.name);
    const emailError = validateField('email', formData.email);
    const subjectError = validateField('subject', formData.subject);
    const messageError = validateField('message', formData.message);

    const newErrors: FormErrors = {
      name: nameError,
      email: emailError,
      subject: subjectError,
      message: messageError,
    };

    setErrors(newErrors);

    if (nameError || emailError || subjectError || messageError) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setEmailSuggestion(null);
      setTouched({});
      setErrors({});
    }, 600);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#84cc16] mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#84cc16] shadow-[0_0_8px_#84cc16]" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white font-display">
            Let's build something remarkable
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            Currently open to SDE, Full-Stack, and AI engineering opportunities. Feel free to reach out with project proposals or role openings!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct channels (col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group rounded-[28px] border border-dashed border-slate-700/80 bg-[#120c29]/90 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:border-slate-500 hover:shadow-xl space-y-6">
              
              <div className="absolute -top-3.5 left-10 w-24 h-6 tape-red rounded-sm shadow-md -rotate-2 group-hover:rotate-0 transition-transform" />

              <h3 className="text-2xl font-black text-white tracking-tight mt-1">
                Direct Channels
              </h3>

              <div className="space-y-4">
                {/* Email with copy button */}
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-[#f97316] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-bold text-white hover:text-[#84cc16] font-mono transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-2.5 rounded-xl bg-slate-700/80 hover:bg-slate-600 text-slate-200 hover:text-white transition-all active:scale-95"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#84cc16]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center gap-3 hover:border-slate-500 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-[#06b6d4] flex items-center justify-center shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">LinkedIn</p>
                    <p className="text-xs sm:text-sm font-bold text-white group-hover:text-[#84cc16] transition-colors">
                      palak-pandey-745a33323
                    </p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center gap-3 hover:border-slate-500 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-[#c084fc] flex items-center justify-center shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">GitHub</p>
                    <p className="text-xs sm:text-sm font-bold text-white group-hover:text-[#84cc16] transition-colors">
                      github.com/Palak2508
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-[#84cc16] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Location</p>
                    <p className="text-xs sm:text-sm font-bold text-white">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="p-4 rounded-2xl bg-[#1e153b] border border-purple-800/40 text-xs text-slate-300">
                <span className="font-black text-[#84cc16] uppercase tracking-wider block mb-1">
                  Availability Note
                </span>
                <p>
                  Open for full-time Software Developer roles and immediate internships. Usually responds within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Form with email validation (col-span-7) */}
          <div className="lg:col-span-7">
            <div className="relative group rounded-[28px] border border-dashed border-slate-700/80 bg-[#120c29]/90 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:border-slate-500 hover:shadow-xl">
              
              <div className="absolute -top-3.5 left-10 w-24 h-6 tape-yellow rounded-sm shadow-md rotate-2 group-hover:rotate-0 transition-transform" />

              {isSubmitted ? (
                <div className="py-14 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#84cc16]/20 text-[#84cc16] flex items-center justify-center shadow-lg animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md">
                    Thank you for reaching out! Palak has received your message and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-5 py-2.5 text-xs font-bold text-slate-950 bg-[#84cc16] hover:bg-[#9ee229] rounded-xl transition-all shadow-md"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5 mt-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={touched.name && !!errors.name}
                        className={`w-full px-4 py-3 text-sm rounded-xl border bg-slate-900/90 text-white placeholder-slate-500 transition-colors focus:outline-none focus:ring-2 ${
                          touched.name && errors.name
                            ? 'border-red-500 focus:ring-red-500/40'
                            : 'border-slate-700 focus:border-[#84cc16] focus:ring-[#84cc16]/30'
                        }`}
                      />
                      {touched.name && errors.name && (
                        <p className="flex items-center gap-1 text-xs text-red-400">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email with validation */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={touched.email && !!errors.email}
                        className={`w-full px-4 py-3 text-sm rounded-xl border bg-slate-900/90 text-white placeholder-slate-500 transition-colors focus:outline-none focus:ring-2 ${
                          touched.email && errors.email
                            ? 'border-red-500 focus:ring-red-500/40'
                            : 'border-slate-700 focus:border-[#84cc16] focus:ring-[#84cc16]/30'
                        }`}
                      />
                      {touched.email && errors.email && (
                        <p className="flex items-center gap-1 text-xs text-red-400">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                      {emailSuggestion && (
                        <div className="flex items-center justify-between text-xs bg-amber-500/10 border border-amber-500/30 text-amber-300 px-3 py-1.5 rounded-lg mt-1">
                          <span>Did you mean <strong>{emailSuggestion}</strong>?</span>
                          <button
                            type="button"
                            onClick={applyEmailSuggestion}
                            className="font-black underline ml-2 hover:text-white"
                          >
                            Use this
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="e.g. SDE Role / Collaboration Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={touched.subject && !!errors.subject}
                      className={`w-full px-4 py-3 text-sm rounded-xl border bg-slate-900/90 text-white placeholder-slate-500 transition-colors focus:outline-none focus:ring-2 ${
                        touched.subject && errors.subject
                          ? 'border-red-500 focus:ring-red-500/40'
                          : 'border-slate-700 focus:border-[#84cc16] focus:ring-[#84cc16]/30'
                      }`}
                    />
                    {touched.subject && errors.subject && (
                      <p className="flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor="message" className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <span className="text-[11px] text-slate-500 font-mono">
                        {formData.message.length} chars (min 10)
                      </span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={touched.message && !!errors.message}
                      className={`w-full px-4 py-3 text-sm rounded-xl border bg-slate-900/90 text-white placeholder-slate-500 transition-colors focus:outline-none focus:ring-2 resize-y ${
                        touched.message && errors.message
                          ? 'border-red-500 focus:ring-red-500/40'
                          : 'border-slate-700 focus:border-[#84cc16] focus:ring-[#84cc16]/30'
                      }`}
                    />
                    {touched.message && errors.message && (
                      <p className="flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-7 py-3 text-sm font-extrabold text-slate-950 bg-[#84cc16] hover:bg-[#9fe429] rounded-full shadow-[0_4px_16px_rgba(132,204,22,0.4)] transition-all hover:scale-105 active:scale-95 disabled:opacity-60 inline-flex items-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
