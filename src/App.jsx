import styles from "./App.module.css";
import { Navbar } from "./components/NavBar/navBar.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { About } from "./components/About/About.jsx";
import { Education } from "./components/Education/Education.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import { Certifications } from "./components/Certifications/Certifications.jsx";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />  
      <Hero />
      <About />
      <Education />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;