import React from 'react'
import { FaGithub, FaFacebook, FaEnvelope } from 'react-icons/fa';


const Contact = () => {
  return (
    <section className="my-12 px-4">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-semibold text-orange-500">Contact</h2>
        <p className="text-lg text-orange-500">
          Feel free to reach out or follow me on these platforms:
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://github.com/MVL-R"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-lg hover:text-blue-500 transition-colors"
          >
            <FaGithub size={24} />
            <span>GitHub</span>
          </a>

          <a
            href="https://facebook.com/mark.vincent.r.3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-lg hover:text-blue-500 transition-colors"
          >
            <FaFacebook size={24} />
            <span>Facebook</span>
          </a>

          <a
            href="mailto:rodulfamarkvincent@gmail.com"
            className="flex items-center space-x-2 text-lg hover:text-blue-500 transition-colors"
          >
            <FaEnvelope size={24} />
            <span>Gmail</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;