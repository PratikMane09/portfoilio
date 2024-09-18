import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaArrowUp,
} from "react-icons/fa";
import emailjs from "emailjs-com";

const SocialButton = ({ icon, link }) => (
  <a
    href={link}
    className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-white hover:from-cyan-600 hover:to-blue-600"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const ContactBox = ({ icon, title, content }) => (
  <div className="flex items-center space-x-4 bg-gray-900 p-4 rounded-lg">
    <div className="text-cyan-500">{icon}</div>
    <div>
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="text-gray-300">{content}</p>
    </div>
  </div>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Send();
  };

  const Send = () => {
    // EmailJS logic here (unchanged)
  };

  return (
    <>
      <section id="contact" className="py-16 bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Contact Me
          </h2>
          <div className="space-y-8">
            {/* Social Profile */}
            <div className="flex flex-col items-center justify-center space-y-4 bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-500">
              <h3 className="text-xl font-semibold text-white">
                Social Profile
              </h3>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/kjs3107"
                  className="social-icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-6 h-6 text-white hover:text-cyan-500 transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ketki-shinde-186118287/"
                  className="social-icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-6 h-6 text-white hover:text-cyan-500 transition-colors" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ContactBox
                icon={<FaPhone />}
                title="Call Me"
                content="+91 92847 71671"
              />
              <ContactBox
                icon={<FaEnvelope />}
                title="Email Me"
                content="kjshinde2904@gmail.com"
              />
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-cyan-500">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Message"
                  required
                  className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-4">Ketki Shinde</h3>
          <div className="flex justify-center space-x-4 mb-4">
            <div className="flex space-x-6 mb-8">
              <a
                href="https://github.com/kjs3107"
                className="social-icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ketki-shinde-186118287/"
                className="social-icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="text-center text-gray-500">
            &copy; Copyright{" "}
            <strong>
              <span>Ketki</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
      <a
        href="#"
        className="scroll-top social-icon-link fixed bottom-5 right-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-2 rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
      >
        <FaArrowUp size={20} />
      </a>
    </>
  );
};

export default ContactSection;
