import React, { useState } from "react";
import robo from "../assets/images/robo.jpg";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      // Send data to Formsubmit using fetch (AJAX)
      const response = await fetch("https://formsubmit.co/chaudharyjanukaaaa@email.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset(); // Clear form fields
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 p-6 lg:p-10 items-center justify-center min-h-screen bg-gray-50">
      
      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-64 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl relative group">
        <img
          src={robo}
          alt="Robot Assistant"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-4 border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Get in Touch <span className="text-2xl">🤖</span>
        </h2>
        <p className="text-gray-500 text-center mb-4">
          Have questions? Send us a message!
        </p>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-in">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-green-600">Message Sent!</h3>
            <p className="text-gray-600 mt-2">We'll get back to you shortly.</p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="mt-6 text-blue-600 hover:underline font-semibold"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            action="https://formsubmit.co/chaudharyjanukaaaa@email.com"
            method="POST"
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            {/* Name Input */}
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="font-semibold text-gray-700">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition shadow-sm"
                required
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-semibold text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="john@example.com"
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition shadow-sm"
                required
              />
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="font-semibold text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="How can we help you?"
                className="border border-gray-300 p-3 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-red-500 transition shadow-sm resize-none"
                required
              ></textarea>
            </div>

            {/* Hidden Inputs for Formsubmit Configuration */}
            <input type="hidden" name="_subject" value="New Contact Form Submission" />
            <input type="hidden" name="_captcha" value="false" /> {/* Disable captcha if not needed */}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-red-600 text-white font-bold p-4 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-md flex justify-center items-center ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;