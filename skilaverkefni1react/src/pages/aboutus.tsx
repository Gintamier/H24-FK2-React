import Navbar from "@/components/Header";
import AboutUs from "@/components/Aboutuscomp";
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
      <div>
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
}
