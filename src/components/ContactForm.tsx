import { useState, type FormEvent } from "react";
import { firm, services } from "@/data/site";

type Fields = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  understood: boolean;
};

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
  understood: false,
};

type Errors = Partial<Record<keyof Fields, string>>;

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);

  const update = (key: keyof Fields, value: string | boolean) => {
    setFields((current) => ({ ...current, [key]: value }));
  };

  const validate = () => {
    const next: Errors = {};
    if (fields.name.trim().length < 2) next.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) next.email = "Please add a valid email address.";
    if (fields.message.trim().length < 12) next.message = "Please describe the matter in a sentence or two.";
    if (!fields.understood) next.understood = "Please confirm you understand this form does not send a message.";
    return next;
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;
    setPending(true);
    window.setTimeout(() => {
      setPending(false);
      setDone(true);
    }, 700);
  };

  if (done) {
    return (
      <div className="border border-mist bg-white p-7 sm:p-10" role="status" aria-live="polite">
        <p className="text-xs font-medium tracking-[0.08em] text-steel uppercase">Demonstration only</p>
        <h3 className="mt-3 font-display text-4xl text-navy">Nothing was sent.</h3>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-charcoal">
          Thank you for the note. This form does not transmit messages, and no one at Smart Law has received it. To speak to the firm, call or email directly.
        </p>
        <div className="mt-6 flex flex-col gap-2 text-sm">
          <a href={firm.phoneHref} className="text-navy link-draw">
            {firm.phoneDisplay}
          </a>
          <a href={firm.emailHref} className="text-navy link-draw">
            {firm.email}
          </a>
        </div>
        <button
          type="button"
          className="mt-8 text-sm text-steel link-draw"
          onClick={() => {
            setFields(empty);
            setDone(false);
          }}
        >
          Write another note
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-mist bg-white p-6 shadow-xl sm:p-9 text-navy">
      <div className="mb-6 border-b border-mist pb-4">
        <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-steel uppercase">
          Request a Consultation
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Full name"
          value={fields.name}
          error={errors.name}
          onChange={(value) => update("name", value)}
          autoComplete="name"
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={fields.email}
          error={errors.email}
          onChange={(value) => update("email", value)}
          autoComplete="email"
        />
        <Field
          id="phone"
          label="Phone (optional)"
          type="tel"
          value={fields.phone}
          onChange={(value) => update("phone", value)}
          autoComplete="tel"
        />
        <div>
          <label htmlFor="interest" className="block text-xs font-medium tracking-wide text-steel uppercase">
            Area of interest
          </label>
          <select
            id="interest"
            value={fields.interest}
            onChange={(event) => update("interest", event.target.value)}
            className="mt-1.5 w-full border border-mist bg-paper px-3.5 py-3 text-sm text-charcoal transition-colors focus:border-navy focus:bg-white focus:outline-none"
          >
            <option value="">Select practice area...</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="block text-xs font-medium tracking-wide text-steel uppercase">
          A sentence or two about your matter...
        </label>
        <textarea
          id="message"
          value={fields.message}
          onChange={(event) => update("message", event.target.value)}
          rows={4}
          placeholder="Briefly describe the key facts, parties or questions..."
          className="mt-1.5 w-full resize-y border border-mist bg-paper px-3.5 py-3 text-sm text-charcoal transition-colors focus:border-navy focus:bg-white focus:outline-none"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-navy">
            {errors.message}
          </p>
        ) : null}
      </div>
      <div className="mt-5">
        <label className="flex items-start gap-3 text-sm leading-relaxed text-charcoal">
          <input
            type="checkbox"
            checked={fields.understood}
            onChange={(event) => update("understood", event.target.checked)}
            className="mt-1"
          />
          <span>I understand this demonstration form does not send my message, and does not create a client relationship.</span>
        </label>
        {errors.understood ? <p className="mt-2 text-sm text-navy">{errors.understood}</p> : null}
      </div>
      <button
        type="submit"
        disabled={pending}
        className="mt-7 w-full bg-navy px-5 py-4 text-[0.72rem] font-semibold tracking-[0.16em] text-white uppercase transition-all duration-300 hover:bg-steel disabled:opacity-60"
      >
        {pending ? "Holding the note…" : "Send to an Expert ↗"}
      </button>

      <p className="mt-4 text-center text-[0.64rem] font-medium tracking-[0.18em] text-steel/80 uppercase">
        Confidential · No Obligation · UK GDPR Compliant
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium tracking-wide text-steel uppercase">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-1.5 w-full border border-mist bg-paper px-3.5 py-3 text-sm text-charcoal transition-colors focus:border-navy focus:bg-white focus:outline-none"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
