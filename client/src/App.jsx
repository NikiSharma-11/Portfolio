import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Project from "./pages/Projects/Project";
import Education from "./pages/Education/Education";
import WorkExp from "./pages/WorkExp/WorkExp";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";  //top ma scrool button ko lagi
import { useTheme } from "./context/ThemeContext";



function App() {
 const [theme]= useTheme(); //theme lai get garna lai

  return (
    <>
    <div id={theme}>

    
    <Layout/> 
    <div className="container">
    <About />
    <Education/>
    <Skills/>
    <Project/>
    <WorkExp/>
    <Contact/>
    
    </div>
    <div className="footer pb-3 ms-3">
      <h4 className="text-center">
        made with 💞 @copy; 2024
      </h4>
    </div>
    </div>
    <ScrollToTop smooth color="#f29f67" style={{backgroundColor:'#1e1e2c', borderRadius:"80px"}} />
    </>
  )
}

export default App;
