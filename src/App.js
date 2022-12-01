import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import NavBar from './components/NavBar';
import SocialLinks from './components/SocialLinks';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
function App() {
  
  return (
    <div className="">
    
      <div className=''  >
        <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />

        <SocialLinks/>
      </div>
    </div>
    
    
  );
}

export default App;
