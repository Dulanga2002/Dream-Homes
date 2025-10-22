import React from 'react';
import { assets } from '../assets/assets';

function Footer() {
  return (
    <footer
      className="w-full bg-gray-800 pt-12 px-6 md:px-24 lg:px-40 transition-all duration-300"
      id="footer"
      aria-label="Site Footer"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div className="flex flex-col items-start">
          <img
            src={assets.logo_dark}
            alt="Real Estate Company Logo"
            className="w-32 mb-4"
            loading="lazy"
          />
          <p className="text-gray-300 text-sm leading-relaxed max-w-md">
            Discover the latest trends and insights in real estate. We provide expert guidance and
            personalized solutions to help you find your dream property with ease and confidence.
          </p>
        </div>

        {/* Company Links */}
        <nav className="flex flex-col">
          <h3 className="text-white text-xl font-semibold mb-5 tracking-tight">Company</h3>
          <ul className="flex flex-col gap-3 text-gray-300 text-sm">
            {[
              { href: '#header', label: 'Home' },
              { href: '#about', label: 'About Us' },
              { href: '#contact', label: 'Contact Us' },
              { href: '#privacy', label: 'Privacy Policy' },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Newsletter Subscription */}
        <div className="flex flex-col">
          <h3 className="text-white text-xl font-semibold mb-5 tracking-tight">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-300 text-sm mb-5 max-w-md">
            Stay updated with the latest news, exclusive offers, and expert tips delivered straight to
            your inbox.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3"
            aria-label="Newsletter Subscription"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email Address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-lg bg-gray-800 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              required
              aria-required="true"
            />
            <button
              type="submit"
              className="p-3 px-6 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-600 mt-12 py-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Real Estate. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;