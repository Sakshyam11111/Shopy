import React from 'react'; // Import React
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const Darkmode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; // html element

  React.useEffect(() => { 
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme, element]);

  return (
    <div className="relative">
      <img
        src={LightButton}
        alt="Light Mode"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
      />
      <img
        src={DarkButton}
        alt="Dark Mode"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}

export default Darkmode;