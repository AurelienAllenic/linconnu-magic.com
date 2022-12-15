import Nav from "./components/Nav";
import Bio from "./components/Bio";
import Cours from "./components/Cours";
import Prestation from "./components/Prestation";
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import "./index.css"

function App() {
  return (
    <div className="App">
      <Nav/>   
      <Bio/>
      <Cours/>
      <Prestation/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
