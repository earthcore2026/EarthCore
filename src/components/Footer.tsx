import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <footer className="bg-bg-surface border-t border-accent-earth/30 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1 */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6 group w-fit">
              <img
                src="/EarthCore Logo Clean.webp?v=6"
                alt="EarthCore Logo"
                className="h-[38px] w-[38px] block object-contain flex-shrink-0"
              />
              <div className="flex flex-col justify-center">
                <span className="font-heading font-semibold text-[18px] text-[#4A3728] tracking-[0.01em] leading-[1.05]">
                  EarthCore
                </span>
                <span className="font-heading font-semibold text-[18px] text-[#634D3D] tracking-[0.01em] leading-[1.05]">
                  Resources
                </span>
              </div>
            </Link>
            <p className="text-text-secondary text-sm mb-6 leading-relaxed">
              Global commodities. Strategic trading. Integrated logistics.
            </p>
            {/* Social icons removed as requested */}

          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-text-primary mb-6 tracking-wide">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'About', 'Commodities', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`} className="text-sm text-text-secondary hover:text-accent-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-text-primary mb-6 tracking-wide">Commodities</h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: 'Minerals', id: 'minerals' },
                { name: 'Metals', id: 'metals' },
                { name: 'Petroleum Products', id: 'petroleum' },
                { name: 'Agricultural', id: 'agri' },
                { name: 'Ferrous & Non-Ferrous Scrap', id: 'scrap' },
                { name: 'Chemicals', id: 'chemicals' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={`/commodities#${item.id}`} 
                    className="text-sm text-text-secondary hover:text-accent-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-text-primary mb-6 tracking-wide">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-sm text-text-secondary">
              <li className="flex flex-col">
                <span className="text-text-muted mb-1 text-sm uppercase">Phone</span>
                <span className="text-text-primary">+91 85018 44456</span>
              </li>
              <li className="flex flex-col">
                <span className="text-text-muted mb-1 text-sm uppercase">Email</span>
                <span className="text-text-primary">info@earthcore.co.in</span>
              </li>
              <li className="flex flex-col">
                <span className="text-text-muted mb-1 text-sm uppercase">Location</span>
                <span className="text-text-primary">Hyderabad, Telangana, India</span>
              </li>
              <li className="flex flex-col">
                <span className="text-text-muted mb-1 text-sm uppercase">Business Hours</span>
                <span>Monday–Saturday</span>
                <span>10:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-subtle pt-8 flex flex-col items-center gap-6">
          <a 
            href="https://staffarc.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-text-primary transition-all group"
          >
            <span className="flex items-center gap-1.5">Made with <span className="text-[#e25555] animate-pulse">❤️</span> by</span>
            <div className="flex items-center gap-1.5 bg-white/50 px-2 py-1 rounded-md border border-border-subtle group-hover:border-accent-primary transition-colors">
              <img src="https://www.staffarc.in/images/Staffarc-logo.png" alt="StaffArc" className="h-5 object-contain" />
              <span className="font-bold text-[#1B2A3B]">StaffArc</span>
            </div>
          </a>

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-border-subtle/30">
            <p className="text-xs text-text-muted">
              ©2025 EarthCore Resources Private Limited. All rights reserved.
            </p>
            <a href="#" className="text-xs text-text-muted hover:text-text-primary transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
