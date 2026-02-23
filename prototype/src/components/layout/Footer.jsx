import { Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-brit-footer text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Logo */}
        <div className="mb-8 transition-transform hover:scale-110 duration-300">
          <img src="/logo.png" alt="logo" className="h-12 w-auto" />
        </div>

        {/* Quick Links */}
        <ul className="flex flex-wrap justify-center gap-8 mb-8 font-medium">
          {['About Us', 'Classes', 'Faq', 'Blog', 'Contact'].map((item) => (
            <li key={item} className="hover:text-gray-300 cursor-pointer transition-colors">
              {item}
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-6 mb-12">
          {['linkedin', 'facebook', 'instagram'].map((platform) => (
            <a
              key={platform}
              href={`#${platform}`}
              className="text-2xl hover:text-brit-accent transition-all duration-300 hover:-translate-y-1"
            >
              {platform === 'linkedin' && <Linkedin className="w-6 h-6" />}
              {platform === 'facebook' && <Facebook className="w-6 h-6" />}
              {platform === 'instagram' && <Instagram className="w-6 h-6" />}
              {/* Note: Use Lucide-react or FontAwesome icons here */}
            </a>
          ))}
        </div>

        {/* Horizontal Divider */}
        <div className="w-full border-t border-gray-600/50 mb-12"></div>

        {/* Bottom Section: Copyright and Newsletter */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-8">

          {/* Copyright Info */}
          <div className="text-sm text-gray-300 space-y-1">
            <p>© {new Date().getFullYear()} Leafclutch Technologies. All Rights Reserved.</p>
            <p>Company number <span className="font-bold text-white">0000000</span></p>
          </div>

          {/* Newsletter Subscription */}
          <div className="w-full md:w-auto">
            <h4 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h4>
            <div className="flex border border-white/30 rounded-sm overflow-hidden group focus-within:border-white transition-colors">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent px-4 py-3 outline-none w-full md:w-64 placeholder:text-gray-400"
              />
              <button className="bg-white text-brit-footer px-6 py-3 font-bold hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </div>

          </div>


        </div>

      </div>

      {/* Floating Chat Button (Bottom Right) */}

    </footer>
  );
};

export default Footer;