import { useEffect, useState } from "react";
import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import CarsList from "./Components/CarsList/CarsList";
import Tetsomonial from "./Components/Testomonial/Tetsomonial";
import AboutBanner from "./Components/AboutStoreBanner/AboutBanner";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );
  const element = document.documentElement;
  // console.log(element);
  useEffect(() => {
    if (theme == "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black p-0">
    <div className="w-full lg:w-auto px-4 lg:px-0"> {/* Responsive padding */}
      <NavBar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} setTheme={setTheme} />
      <About theme={theme} />
      <Services />
      <CarsList />
      <Tetsomonial/>
      <AboutBanner/>
      <Contact/>
      <Footer/>
    </div>
  </div>
  );
};

export default App;
