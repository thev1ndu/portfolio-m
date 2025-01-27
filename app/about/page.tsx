import Navbar from "@/components/Navbar";
import About from "@/components/About";

const AboutPage = () => {
  return (
    <main className="relative bg-white flex flex-col items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar />
        <About />
      </div>
    </main>
  );
};

export default AboutPage;
