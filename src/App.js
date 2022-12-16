import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Bio from "./components/Bio";
import Cours from "./components/Cours";
import Prestation from "./components/Prestation";
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import "./index.css"
import { linconnu } from "./Data";

function App() {
  return (
    <div className="App">
      <Nav />
      <Carousel images={linconnu}/>
      <Bio/>
      <Cours/>
      <Prestation/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
