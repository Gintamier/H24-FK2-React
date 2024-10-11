import Navbar from "@/components/Header";
import HoverImage from "@/components/Logo";
import Footer from "@/components/Footer";

const menuItems = [
  { name: "Home", link: "./" },
  { name: "Menu", link: "./menu" },
  { name: "About Us", link: "./aboutus" },
  { name: "Contact", link: "./contactus" },
];

export default function Home() {
  return (
    <div className="bg-[#f4f0e3] min-h-screen flex flex-col">
      <Navbar menuItems={menuItems} />

      {/* Hero Section */}
      <div className="flex-grow flex flex-col justify-center items-center text-center py-16">
        <HoverImage /> {/* Hover over for "Slogan" */}
        <h1 className="mt-4 text-4xl font-bold text-[#416d79]">
          Welcome to The Hungry Llama!
        </h1>
        <p className="mt-2 text-lg text-[#416d79] max-w-md">
          Experience a culinary journey with us. Delicious meals, great company,
          and a warm atmosphere await you!
        </p>
        <a
          href="./menu"
          className="mt-4 inline-flex items-center justify-center px-6 py-2 text-white bg-[#805a51] rounded-lg hover:bg-[#90685e] transition-all duration-300 ease-in-out"
        >
          View Menu
        </a>
      </div>

      {/* Highlights Section */}
      <section className="py-16 bg-[#d4a83f]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#416d79]">Why Choose Us?</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#805a51]">
                Fresh Ingredients
              </h3>
              <p className="mt-2 text-gray-600">
                We source the freshest ingredients to ensure that every meal is
                delicious and healthy.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#805a51]">
                Exceptional Service
              </h3>
              <p className="mt-2 text-gray-600">
                Our friendly staff is here to make your dining experience
                enjoyable and memorable.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#805a51]">
                Inviting Atmosphere
              </h3>
              <p className="mt-2 text-gray-600">
                Enjoy your meal in a cozy and welcoming environment designed for
                relaxation and enjoyment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#416d79]">
            What Our Customers Say
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p className="text-gray-600 italic">
                "The Hungry Llama is my favorite restaurant! The food is always
                fresh, and the service is amazing."
              </p>
              <h4 className="mt-4 font-semibold text-[#805a51]">- Sarah K.</h4>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p className="text-gray-600 italic">
                "I love the atmosphere here! It's the perfect spot for family
                gatherings and special occasions."
              </p>
              <h4 className="mt-4 font-semibold text-[#805a51]">- John D.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#d4a83f]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#416d79]">Join Us Today!</h2>
          <p className="mt-4 text-lg text-[#416d79] max-w-md mx-auto">
            Book a table and experience the best culinary journey at The Hungry
            Llama. We can’t wait to serve you!
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center justify-center px-6 py-2 text-white bg-[#805a51] rounded-lg hover:bg-[#90685e] transition-all duration-300 ease-in-out"
          >
            Make a Reservation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
