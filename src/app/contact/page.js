import ContactForm from './ContactForm';
import { Mail, Clock, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact us',
  description: 'Questions about an order, a custom request, or wholesale? Get in touch.',
};

export default function ContactPage() {
  return (
    <div className="container-page py-14">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="section-label">Get in touch</p>
          <h1 className="mt-2 text-4xl font-bold">We read every message</h1>
          <p className="mt-4 text-ink-soft">
            Whether it&apos;s a question about an order, a custom design
            idea, or a wholesale inquiry — send it over. Most messages get a
            reply within one business day.
          </p>

          <div className="mt-8 flex flex-col gap-5 text-sm">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 shrink-0 text-teal" size={20} />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-ink-soft">hello@cutsheetco.example</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 shrink-0 text-teal" size={20} />
              <div>
                <p className="font-semibold">Response time</p>
                <p className="text-ink-soft">Monday–Friday, usually within 24 hours</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 shrink-0 text-teal" size={20} />
              <div>
                <p className="font-semibold">Based in</p>
                <p className="text-ink-soft">A small studio, shipping nationwide</p>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
