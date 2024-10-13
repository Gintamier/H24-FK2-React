import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Work from "@/components/work";

export default function Home() {
  return (
    <div className="bg-blue-100 min-h-screen w-screen flex items-center justify-center">
      <div className="bg-white w-4/5 max-w-5xl rounded-2xl p-4 flex flex-col justify-between space-y-3">
        <div className="w-full">
          <Header />
        </div>
        <div className="w-full">
          <Contact />
        </div>
        <div className="w-full">
          <Skills />
        </div>
        <div className="w-full">
          <Work />
        </div>
        <div className="w-full">
          <Education />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
