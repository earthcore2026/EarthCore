import { motion } from 'framer-motion';
import { Phone, Mail, Clock, ArrowRight, MapPin } from 'lucide-react';
import Section from './Section';

export default function Contact() {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      commodity: formData.get('commodity') || 'General',
      message: formData.get('message'),
    };

    const text = `*New Trading Enquiry*\n\n*Name:* ${data.name}\n*Company:* ${data.company}\n*Email:* ${data.email}\n*Phone:* ${data.phone}\n*Commodity:* ${data.commodity}\n\n*Message:*\n${data.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/918501844456?text=${encodedText}`, '_blank');
  };

  return (
    <Section id="contact" className="bg-bg-surface relative overflow-hidden py-32">

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left: Contact Info */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-heading font-[700] text-4xl md:text-5xl text-text-primary mb-6">Let's Trade Together</h2>
            <p className="font-body text-text-secondary text-lg leading-relaxed">
              Partner with EarthCore Resources for reliable quality, competitive pricing, and unbreakable supply chain solutions that keep your business moving forward.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-3 mb-12"
          >


            <div className="flex items-start gap-4">
              <Phone className="text-accent-primary w-6 h-6 mt-1" />
              <div>
                <p className="text-text-primary text-lg font-medium mb-1">+91 85018 44456</p>
                <p className="text-text-muted text-sm">Available for immediate inquiries</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-accent-primary w-6 h-6 mt-1" />
              <div>
                <a href="mailto:info@earthcore.co.in" className="text-text-primary text-lg font-medium hover:text-accent-primary transition-colors">info@earthcore.co.in</a>
                <p className="text-text-muted text-sm">General inquiries and proposals</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-accent-primary w-6 h-6 mt-1" />
              <div>
                <p className="text-text-primary text-lg font-medium mb-1">Hyderabad, Telangana, India</p>
                <p className="text-text-muted text-sm">Corporate Office</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-accent-primary w-6 h-6 mt-1" />
              <div>
                <p className="text-text-primary text-lg font-medium">Mon–Sat · 10:00 AM – 5:00 PM</p>
                <p className="text-text-muted text-sm">Indian Standard Time (IST)</p>
              </div>
            </div>
          </motion.div>

            <a
              href="https://wa.me/918501844456"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-medium px-8 py-4 rounded-sm hover:bg-[#20BD5A] hover:shadow-[0_0_25px_rgba(37,211,102,0.4)] transition-all group"
            >
              <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.002 2.667A13.203 13.203 0 0 0 2.87 16.48a13.1 13.1 0 0 0 1.878 6.727L2.667 29.333l6.333-2.04A13.2 13.2 0 0 0 16.002 29.4 13.2 13.2 0 0 0 29.335 16.2 13.2 13.2 0 0 0 16.002 2.667Zm0 24.066a10.53 10.53 0 0 1-5.657-1.64l-.4-.24-4.187 1.347 1.373-4.107-.267-.413A10.51 10.51 0 0 1 5.537 16.2a10.534 10.534 0 0 1 10.533-10.533A10.534 10.534 0 0 1 26.602 16.2a10.534 10.534 0 0 1-10.6 10.533Zm5.787-7.893c-.32-.16-1.867-.92-2.16-1.027-.293-.107-.507-.16-.72.16-.213.32-.827 1.027-1.013 1.24-.187.213-.373.24-.693.08-.32-.16-1.347-.493-2.567-1.573-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.147-.147.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.627-.527-.54-.72-.55-.187-.007-.4-.007-.613-.007a1.18 1.18 0 0 0-.853.4c-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.253 3.44 5.46 4.827.76.333 1.36.52 1.827.667.767.24 1.467.207 2.02.127.613-.093 1.867-.76 2.133-1.493.267-.733.267-1.36.187-1.493-.08-.133-.293-.213-.613-.373Z" fill="#fff"/>
              </svg>
              Chat on WhatsApp
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

        </div>

        {/* Right: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="bg-bg-elevated p-8 md:p-12 rounded-sm border border-border-subtle shadow-2xl relative overflow-hidden">
            <h3 className="font-heading font-[600] text-2xl text-text-primary mb-8">Enquiry</h3>
            
            <form onSubmit={submitHandler} className="flex flex-col gap-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-text-muted text-sm font-medium">Full Name <span className="text-accent-primary">*</span></label>
                  <input type="text" id="name" name="name" required className="bg-bg-surface border border-border-subtle rounded-sm p-4 text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent-primary focus:shadow-[0_0_0_2px_rgba(201,134,42,0.2)] transition-all font-body" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-text-muted text-sm font-medium">Company Name <span className="text-accent-primary">*</span></label>
                  <input type="text" id="company" name="company" required className="bg-bg-surface border border-border-subtle rounded-sm p-4 text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent-primary focus:shadow-[0_0_0_2px_rgba(201,134,42,0.2)] transition-all font-body" placeholder="Acme Corp" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-text-muted text-sm font-medium">Email Address <span className="text-accent-primary">*</span></label>
                  <input type="email" id="email" name="email" required className="bg-bg-surface border border-border-subtle rounded-sm p-4 text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent-primary focus:shadow-[0_0_0_2px_rgba(201,134,42,0.2)] transition-all font-body" placeholder="john@example.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-text-muted text-sm font-medium">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="bg-bg-surface border border-border-subtle rounded-sm p-4 text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent-primary focus:shadow-[0_0_0_2px_rgba(201,134,42,0.2)] transition-all font-body" placeholder="+91 85018 44456" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="commodity" className="text-text-muted text-sm font-medium">Commodity of Interest <span className="text-accent-primary">*</span></label>
                <select id="commodity" name="commodity" required className="bg-bg-surface border border-border-subtle rounded-sm p-4 text-text-primary focus:outline-none focus:border-accent-primary focus:shadow-[0_0_0_2px_rgba(201,134,42,0.2)] transition-all font-body appearance-none cursor-pointer">
                  <option value="" disabled selected className="text-text-muted">Select a commodity...</option>
                  <option value="coal">Coal</option>
                  <option value="iron-ore">Iron Ore</option>
                  <option value="manganese">Manganese</option>
                  <option value="petroleum">Petroleum Products</option>
                  <option value="scrap">Ferrous & Non-Ferrous Scrap</option>
                  <option value="minerals">Minerals</option>
                  <option value="agricultural">Agricultural Commodities</option>
                  <option value="chemicals">Chemicals</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-text-muted text-sm font-medium">Message <span className="text-accent-primary">*</span></label>
                <textarea id="message" name="message" required rows={4} className="bg-bg-surface border border-border-subtle rounded-sm p-4 text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent-primary focus:shadow-[0_0_0_2px_rgba(201,134,42,0.2)] transition-all font-body resize-none" placeholder="How can we assist you?"></textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-accent-primary to-[#D4882A] text-white font-medium text-lg py-4 rounded-sm flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(201,134,42,0.4)] transition-all group relative overflow-hidden mt-2">
                <span className="relative z-10 flex items-center gap-2">Send Enquiry <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
              </button>

              <p className="text-center text-[11px] text-text-muted mt-2">
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
