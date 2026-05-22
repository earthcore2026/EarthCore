import { motion } from 'framer-motion';
import { Phone, Mail, Clock, ArrowRight, MapPin } from 'lucide-react';
import Section from './Section';

export default function Contact() {
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
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

            {/* WhatsApp button removed as requested */}

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
                  <input type="text" id="name" required className="bg-bg-surface border border-border-subtle rounded-sm p-4 text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent-primary focus:shadow-[0_0_0_2px_rgba(201,134,42,0.2)] transition-all font-body" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-text-muted text-sm font-medium">Company Name <span className="text-accent-primary">*</span></label>
                  <input type="text" id="company" required className="bg-bg-surface border border-border-subtle rounded-sm p-4 text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent-primary focus:shadow-[0_0_0_2px_rgba(201,134,42,0.2)] transition-all font-body" placeholder="Acme Corp" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-text-muted text-sm font-medium">Email Address <span className="text-accent-primary">*</span></label>
                  <input type="email" id="email" required className="bg-bg-surface border border-border-subtle rounded-sm p-4 text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent-primary focus:shadow-[0_0_0_2px_rgba(201,134,42,0.2)] transition-all font-body" placeholder="john@example.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-text-muted text-sm font-medium">Phone Number</label>
                  <input type="tel" id="phone" className="bg-bg-surface border border-border-subtle rounded-sm p-4 text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent-primary focus:shadow-[0_0_0_2px_rgba(201,134,42,0.2)] transition-all font-body" placeholder="+91 85018 44456" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="commodity" className="text-text-muted text-sm font-medium">Commodity of Interest <span className="text-accent-primary">*</span></label>
                <select id="commodity" required className="bg-bg-surface border border-border-subtle rounded-sm p-4 text-text-primary focus:outline-none focus:border-accent-primary focus:shadow-[0_0_0_2px_rgba(201,134,42,0.2)] transition-all font-body appearance-none cursor-pointer">
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
                <textarea id="message" required rows={4} className="bg-bg-surface border border-border-subtle rounded-sm p-4 text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent-primary focus:shadow-[0_0_0_2px_rgba(201,134,42,0.2)] transition-all font-body resize-none" placeholder="How can we assist you?"></textarea>
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
