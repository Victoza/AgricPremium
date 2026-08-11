import React from "react";
// import { Eye, Power, ScrollText } from "lucide-react";

const Narrative = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT CARD */}
          <div className="lg:col-span-2">

            <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 h-full">

              {/* Title */}
              <div className="flex items-center gap-4 mb-6">

                <div className="bg-gray-100 p-3 rounded-xl">
                  {/* <ScrollText
                    size={20}
                    className="text-green-950"
                  /> */}
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold text-green-950">
                  Our Narrative
                </h2>

              </div>

              {/* Paragraph 1 */}
              <p className="text-gray-600 leading-7">
                AgriPremium began as a modest fish hatchery in the outskirts
                of Lagos with a singular conviction: that Nigerian agriculture
                deserves world-class standards. Our founder recognized the gap
                between potential and execution in the local sector and sought
                to bridge it with corporate rigor and scientific precision.
              </p>

              {/* Paragraph 2 */}
              <p className="text-gray-600 leading-7 mt-4">
                Over the past decade, we have evolved from a single-focus
                operation into a multi-disciplinary agricultural powerhouse.
                Today, we manage vast nurseries, provide sophisticated
                fumigation services, and lead the charge in aquaculture
                innovation. Our history is written in the success of the
                thousands of farmers we've empowered and the ecosystems we've
                restored.
              </p>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-10">

            {/* MISSION */}
            <div className="bg-green-950 text-white rounded-3xl p-7">

              {/* <Power
                size={20}
                className="text-green-400 mb-4"
              /> */}

              <h2 className="text-xl font-semibold mb-2">
                Mission
              </h2>

              <p className="text-gray-200 leading-6">
                To revolutionize Nigerian agriculture by implementing
                sustainable, data-driven practices that ensure food security
                and economic prosperity for all stakeholders.
              </p>

            </div>


            {/* VISION */}
            <div className="p-0">

              {/* <Eye
                size={20}
                className="text-green-950 mb-4"
              /> */}

              <h2 className="text-xl font-semibold text-gray-600 mb-2">
                Vision
              </h2>

              <p className="text-gray-500 leading-6">
                To be the gold standard for premium agricultural services in
                West Africa, recognized for our commitment to quality,
                innovation, and ecological harmony.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Narrative;