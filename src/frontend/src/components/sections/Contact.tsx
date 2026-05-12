import {
  AlertCircle,
  ArrowRight,
  CheckCircle,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { COMPANY, SECTION_IDS } from "../../lib/constants";

interface FormState {
  fullName: string;
  email: string;
  company: string;
  message: string;
  _website: string; // honeypot
}

interface FieldErrors {
  fullName?: string;
  email?: string;
  company?: string;
  message?: string;
}

const INITIAL_FORM: FormState = {
  fullName: "",
  email: "",
  company: "",
  message: "",
  _website: "",
};

function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.fullName.trim()) errors.fullName = "Full name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.company.trim()) errors.company = "Company name is required.";
  if (!form.message.trim()) errors.message = "Message is required.";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormState, boolean>>
  >({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof FormState]) {
      const newErrors = validate({ ...form, [name]: value });
      setErrors((prev) => ({
        ...prev,
        [name]: newErrors[name as keyof FormState],
      }));
    }
  }

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(form);
    setErrors((prev) => ({
      ...prev,
      [name]: newErrors[name as keyof FormState],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const allTouched = {
      fullName: true,
      email: true,
      company: true,
      message: true,
    };
    setTouched(allTouched);
    const newErrors = validate(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // Honeypot check — if _website is filled, silently fail
    if (form._website) {
      setStatus("success");
      setForm(INITIAL_FORM);
      setTouched({});
      setErrors({});
      return;
    }
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setForm(INITIAL_FORM);
    setTouched({});
    setErrors({});
  }

  const inputBase =
    "w-full px-3.5 py-2.5 rounded-lg border bg-card/40 text-foreground placeholder:text-muted-foreground/50 text-[13.5px] focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors duration-150";

  return (
    <section
      id={SECTION_IDS.CONTACT}
      data-ocid="contact.section"
      className="py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-4"
            style={{
              border: "1px solid oklch(0.68 0.24 260 / 0.25)",
              background: "oklch(0.68 0.24 260 / 0.07)",
              color: "oklch(0.68 0.24 260)",
            }}
          >
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4 tracking-[-0.02em]">
            Let’s Build Your SaaS Product
          </h2>
          <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto">
            Tell us about your vision — we'll help you scope, architect, and
            ship it. No commitment, just a conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="p-7 rounded-xl border border-border/40 bg-card/50">
              {status === "success" ? (
                <div
                  data-ocid="contact.success_state"
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <CheckCircle size={48} className="text-green-500" />
                  <h3 className="font-display font-bold text-2xl text-foreground">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                  <button
                    type="button"
                    data-ocid="contact.send_another_button"
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-sm text-primary underline underline-offset-4 hover:opacity-80 transition-smooth"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Honeypot field — hidden from real users, catches bots */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="_website">Website</label>
                    <input
                      id="_website"
                      name="_website"
                      type="text"
                      autoComplete="off"
                      tabIndex={-1}
                      value={form._website}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-[12.5px] font-semibold text-foreground/80 mb-1.5"
                      >
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="Jane Smith"
                        value={form.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        data-ocid="contact.fullname_input"
                        className={`${inputBase} ${errors.fullName ? "border-destructive" : "border-border"}`}
                      />
                      {errors.fullName && (
                        <p
                          data-ocid="contact.fullname_field_error"
                          className="mt-1 text-xs text-destructive"
                        >
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[12.5px] font-semibold text-foreground/80 mb-1.5"
                      >
                        Email Address{" "}
                        <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="jane@company.com"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        data-ocid="contact.email_input"
                        className={`${inputBase} ${errors.email ? "border-destructive" : "border-border"}`}
                      />
                      {errors.email && (
                        <p
                          data-ocid="contact.email_field_error"
                          className="mt-1 text-xs text-destructive"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-[12.5px] font-semibold text-foreground/80 mb-1.5"
                    >
                      Company Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Acme Corp"
                      value={form.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      data-ocid="contact.company_input"
                      className={`${inputBase} ${errors.company ? "border-destructive" : "border-border"}`}
                    />
                    {errors.company && (
                      <p
                        data-ocid="contact.company_field_error"
                        className="mt-1 text-xs text-destructive"
                      >
                        {errors.company}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[12.5px] font-semibold text-foreground/80 mb-1.5"
                    >
                      How can we help?{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project, goals, and timeline..."
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      data-ocid="contact.message_textarea"
                      className={`${inputBase} resize-none ${errors.message ? "border-destructive" : "border-border"}`}
                    />
                    {errors.message && (
                      <p
                        data-ocid="contact.message_field_error"
                        className="mt-1 text-xs text-destructive"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {status === "error" && (
                    <div
                      data-ocid="contact.error_state"
                      className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm"
                    >
                      <AlertCircle size={16} />
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      data-ocid="contact.submit_button"
                      disabled={status === "loading"}
                      className="btn-primary-gradient inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-[13.5px] font-semibold text-white disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 transition-all duration-200 hover:scale-[1.02]"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />{" "}
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      data-ocid="contact.schedule_call_button"
                      onClick={() =>
                        document
                          .getElementById(SECTION_IDS.CONTACT)
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="btn-outline-gradient inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-[13.5px] font-semibold"
                    >
                      <Phone size={16} /> Schedule a Call
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact info panel */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info card */}
            <div className="p-5 rounded-xl border border-border/35 bg-card/50 space-y-4">
              <h3 className="font-semibold text-[15px] text-foreground">
                Contact Information
              </h3>
              <div className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "oklch(0.70 0.24 260 / 0.15)",
                    border: "1px solid oklch(0.70 0.24 260 / 0.25)",
                  }}
                >
                  <Mail size={16} style={{ color: "oklch(0.70 0.24 260)" }} />
                </div>
                <div>
                  <p className="text-[11.5px] text-muted-foreground mb-0.5">
                    Email us at
                  </p>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    data-ocid="contact.email_link"
                    className="text-sm font-semibold text-foreground hover:text-primary transition-smooth"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "oklch(0.75 0.22 290 / 0.15)",
                    border: "1px solid oklch(0.75 0.22 290 / 0.25)",
                  }}
                >
                  <MapPin size={16} style={{ color: "oklch(0.75 0.22 290)" }} />
                </div>
                <div>
                  <p className="text-[11.5px] text-muted-foreground mb-0.5">
                    Location
                  </p>
                  <p className="text-[13.5px] font-semibold text-foreground">
                    Remote / Global
                  </p>
                </div>
              </div>
            </div>

            <div
              className="p-5 rounded-xl border"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.70 0.24 260 / 0.1), oklch(0.75 0.22 290 / 0.08))",
                borderColor: "oklch(0.70 0.24 260 / 0.25)",
              }}
            >
              <h4 className="font-semibold text-[14px] text-foreground mb-1.5">
                ⚡ Fast Response Guarantee
              </h4>
              <p className="text-[13px] text-muted-foreground/80 leading-relaxed">
                We respond to every inquiry within{" "}
                <strong className="text-foreground">24 hours</strong>. For
                urgent projects, mention your timeline in the message.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Response Time", value: "< 24h" },
                { label: "Projects Launched", value: "50+" },
                { label: "Satisfaction Rate", value: "100%" },
                { label: "Avg. Delivery", value: "6 wks" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="p-3.5 rounded-lg border border-border/35 bg-card/40 text-center"
                >
                  <div
                    className="font-display font-bold text-lg bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, oklch(0.70 0.24 260), oklch(0.75 0.22 290))",
                    }}
                  >
                    {value}
                  </div>
                  <div className="text-[11.5px] text-muted-foreground/70 mt-0.5">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
