"use client";
import React, { useState } from "react";

const ContactQuestion = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (validateEmail(e.target.value)) {
      setEmailError("");
    } else {
      setEmailError("Please enter a valid email address");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    // handle form submission
    console.log("Form submitted");
  };

  return (
    <div>
      <h2 className="text-[35px] text-primaryColor font-[500] leading-[50.58px] font-jost text-3xl mb-4">
        Have A Question?
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>

        <div>
          <label
            className="block text-sm font-medium text-primaryColor"
            htmlFor="type"
          >
            Types
          </label>
          <select
            id="type"
            name="type"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primaryColor focus:border-primaryColor sm:text-sm rounded-full"
          >
            <option>Complain</option>
            <option>Inquiry</option>
            <option>Feedback</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <label
              className="block text-sm font-medium text-primaryColor"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-primaryColor focus:border-primaryColor sm:text-sm"
              placeholder="ali"
            />
            <span className="text-xs text-gray-500 absolute right-3 top-[72px] transform -translate-y-1/2">
              optional
            </span>
          </div>
          <div className="relative">
            <label
              className="block text-sm font-medium text-primaryColor"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-primaryColor focus:border-primaryColor sm:text-sm"
              placeholder="you@example.com"
              required
            />

            {emailError && (
              <p className="text-red-500 text-xs mt-1">{emailError}</p>
            )}
          </div>
        </div>

        <div>
          <label
            className="block text-sm font-medium text-primaryColor"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={10}
            className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primaryColor focus:border-primaryColor sm:text-sm"
            placeholder="Content"
          ></textarea>
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="py-2 px-32 bg-primaryColor text-white font-semibold rounded-3xl shadow-md hover:bg-primaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor focus:ring-opacity-75"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactQuestion;
