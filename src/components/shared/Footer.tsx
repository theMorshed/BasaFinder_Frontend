// Footer Component for your Landing Page

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About BasaFinder</h3>
            <p className="text-gray-400">
              Discover your perfect home with BasaFinder. We provide detailed listings, seamless browsing, and a smooth renting experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">Email: <a href="mailto:support@basafinder.com" className="text-gray-200 hover:text-white">support@basafinder.com</a></p>
            <p className="text-gray-400">Phone: +1 (800) 123-4567</p>
            <p className="text-gray-400">Address: 123 Main Street, City, Country</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23 12c0-6.075-4.925-11-11-11-6.075 0-11 4.925-11 11s4.925 11 11 11c6.075 0 11-4.925 11-11zM14.9 12h-3v10h-4v-10h-2v-4h2v-2.8c0-2.9 1.7-4.2 4.5-4.2 1.4 0 2.9.1 3.2.2v3.2h-2c-1.4 0-1.7.6-1.7 1.7v2.2h4.3l-.6 4h-3.7v10z"></path></svg>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 4.6c-.9.4-1.8.7-2.7.8 1-1.4 1.7-2.8 1.7-4.5-1 .6-2.1 1-3.3 1.2-.9-.9-2.1-1.5-3.4-1.5-2.6 0-4.7 2.1-4.7 4.7 0 .4 0 .8.1 1.2-3.9-.2-7.4-2.1-9.7-5-1.2 2.1-.6 4.8 1.5 6.2-.8-.1-1.6-.2-2.3-.7v.1c0 4.5 3.2 8.2 7.5 9 0-.1 0-.2.1-.3 0 0 0 .1.1.1-.1-.4-.2-.8-.3-1.2.3 0 .6 0 .9.1-.2-.3-.3-.7-.3-1 .7.2 1.5.3 2.3.3 2.7 0 5.5-4.3 9.4-9.4 9.4-.6 0-1.2-.1-1.7-.2 3.3 2.1 7.2 3.3 11.3 3.3 13.6 0 21-11.3 21-21 0-.3-.1-.6-.1-.8z"></path></svg>
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.2c3.4 0 6.3 2.9 6.3 6.3 0 3.4-2.9 6.3-6.3 6.3-3.4 0-6.3-2.9-6.3-6.3 0-3.4 2.9-6.3 6.3-6.3zm0 1.5c-2.6 0-4.8 2.2-4.8 4.8 0 2.6 2.2 4.8 4.8 4.8 2.6 0 4.8-2.2 4.8-4.8 0-2.6-2.2-4.8-4.8-4.8zm7.1 2.6c.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3zm-7.1 9.8c3.4 0 6.3 2.9 6.3 6.3 0 3.4-2.9 6.3-6.3 6.3-3.4 0-6.3-2.9-6.3-6.3 0-3.4 2.9-6.3 6.3-6.3zm0 1.5c-2.6 0-4.8 2.2-4.8 4.8 0 2.6 2.2 4.8 4.8 4.8 2.6 0 4.8-2.2 4.8-4.8 0-2.6-2.2-4.8-4.8-4.8zm7.1 3.8c-.7 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.7 0 1.3-.6 1.3-1.3 0-.7-.6-1.3-1.3-1.3z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} BasaFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
