import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#f4f0e3] py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#7e5951] mb-8">
          About Us
        </h2>
        <p className="text-lg text-[#416b76] leading-7 text-center">
          Welcome to The Hungry Llama, a family-owned restaurant that offers a
          unique and unforgettable dining experience. Our restaurant is inspired
          by the bold flavors and warm hospitality of South America, and we
          pride ourselves on serving fresh and locally sourced ingredients. At
          The Hungry Llama, we believe that food is not just a necessity, but an
          adventure, and we aim to take our customers on a culinary journey
          through our carefully crafted menu. Whether you're in the mood for a
          hearty meal or a light bite, our diverse menu has something for
          everyone. We also offer a wide selection of refreshing beverages and
          cocktails to complement your meal. Come join us at The Hungry Llama,
          where good food meets great company.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center mt-12 space-y-8 md:space-y-0 md:space-x-16">
          {/* History Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-[#7e5951] mb-4">
              Our History
            </h3>
            <p className="text-[#416b76]">
              Started in 2010, Hungry Llama began as a small food truck, serving
              wholesome meals to our local community. Over the years, thanks to
              the love and support from our customers, we have grown into a
              full-fledged restaurant while staying true to our roots.
            </p>
          </div>

          {/* Mission Statement Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-[#7e5951] mb-4">
              Our Mission
            </h3>
            <p className="text-[#416b76]">
              At Hungry Llama, our mission is simple: to bring people together
              with food that not only tastes great but also makes them feel
              great. We are committed to sustainability, community support, and
              providing a unique dining experience for everyone who walks
              through our doors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
