import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Classes', path: '/classes' },
    { name: 'FAQ', path: '#' },
    { name: 'Contact', path: '/book-now' },
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/leafclutch-technologies',
      icon: <Linkedin className="w-6 h-6" />
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61584902195796',
      icon: <Facebook className="w-6 h-6" />
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/leafclutch.technologies/',
      icon: <Instagram className="w-6 h-6" />
    }
  ]

  return (
    <footer className="bg-brit-footer text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Logo */}
        <div className="mb-8 transition-transform hover:scale-110 duration-300">
          <img src="/logo.png" alt="Leafclutch Logo" className="h-12 w-auto" />
        </div>

        {/* Quick Links */}
        <ul className="flex flex-wrap justify-center gap-8 mb-8 font-medium">
          {quickLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="hover:text-gray-300 transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-6 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brit-accent transition-all duration-300 hover:-translate-y-1"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-600/50 mb-12"></div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-8">

          {/* Copyright */}
          <div className="text-sm text-gray-300 space-y-1">
            <p>© {new Date().getFullYear()} Leafclutch Technologies. All Rights Reserved.</p>
            <p>
              Company number <span className="font-bold text-white">0000000</span>
            </p>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-auto">
            <h4 className="text-lg font-semibold mb-4">
              Subscribe to our newsletter
            </h4>

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
    </footer>
  )
}

export default Footer