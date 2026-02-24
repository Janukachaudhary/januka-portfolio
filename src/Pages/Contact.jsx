import React, { useState } from "react";
import robo from "../assets/images/robo.jpg";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 p-10 rounded-[5%]">

     
      <div className="bg-gray-600 w-full lg:w-1/2 rounded-[5%] overflow-hidden flex justify-center items-center">
        <img
          src={robo}
          alt="Robot"
          className="w-full h-full object-cover rounded-[5%] animate-float"
        />
      </div>

   
      <div className="bg-gray-200 w-full lg:w-2/5 rounded-[9%] flex flex-col p-8 gap-4">
        <h2 className="text-2xl font-bold text-center">
          Get in Touch 🤖
        </h2>
        <p className="text-center">
          Send us a message and we'll reply soon
        </p>

        {submitted ? (
          <div className="text-center text-green-700 font-bold mt-8 text-lg">
            Thank you! Your message has been sent.
          </div>
        ) : (
          <form
            action="https://formsubmit.co/chaudharyjanukaaaa@email.com"
            method="POST"
            className="flex flex-col gap-3 text-[18px]"
            onSubmit={handleSubmit}
          >
            <label className="font-bold">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="border p-2 rounded"
              required
            />

            <label className="font-bold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              className="border p-2 rounded"
              required
            />

            <label className="font-bold">Message</label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              className="border p-4 rounded h-32"
              required
            ></textarea>

          
            <input type="hidden" name="_subject" value="New message from Contact Form" />
            <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

            <button
              type="submit"
              className="bg-red-600 text-white font-bold p-4 rounded hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
