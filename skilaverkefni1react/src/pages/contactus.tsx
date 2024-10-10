import Navbar from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const menuItems = [
  { name: "Home", link: "./" },
  { name: "Menu", link: "./menu" },
  { name: "About us", link: "./aboutus" },
  { name: "Contact", link: "./contactus" },
];

export default function Home() {
  return (
    <div className="bg-[#f4f0e3] min-h-screen flex flex-col">
      <Navbar menuItems={menuItems} />
      <div className="flex-grow pt-10">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
