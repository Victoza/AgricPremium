import React from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

const Form = () => {
  return (
    <section className="bg-gray-100 py-20 px-5">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* Left Side */}
        <div className="bg-green-950 text-white p-10 md:p-14 flex flex-col justify-center">

          <h2 className="text-4xl font-bold leading-tight">
            Start Your Growth Journey Today
          </h2>

          <p className="text-gray-300 mt-6 leading-8">
            Schedule a site visit or a virtual consultation with our
            team. We'll help you diagnose soil issues, plan your
            season, or establish a new farm from scratch.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center">
                <FiPhone />
              </div>

              <span>+234 800 AGRI PREMIUM</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center">
                <FiMail />
              </div>

              <span>consult@agripremium.com.ng</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center">
                <FiMapPin />
              </div>

              <span>Agri-Innovation Hub, Ikeja, Lagos</span>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="p-10 md:p-14">

          <form className="space-y-6">

            {/* First Row */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Needed
                </label>

                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-700">
                  <option>Fumigation</option>
                  <option>Farm Setup</option>
                  <option>Seed Supply</option>
                  <option>Fish Farming</option>
                  <option>Nursery Plants</option>
                </select>
              </div>

            </div>

            {/* Date */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Preferred Date
              </label>

              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-700"
              />

            </div>

            {/* Message */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Message
              </label>

              <textarea
                rows="5"
                placeholder="How can we help your farm today?"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-green-700"
              ></textarea>

            </div>

            {/* Button */}

            <button
              className="w-full bg-green-950 text-white py-4 rounded-lg font-semibold hover:bg-green-900 transition duration-300 shadow-lg"
            >
              Send Request
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Form;