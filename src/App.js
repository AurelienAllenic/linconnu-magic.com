import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Bio from "./components/Bio";
import Cours from "./components/Cours";
import Prestation from "./components/Prestation";
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import "./index.css"
import { linconnu } from "./Data";
import {useState, useEffect} from "react"
import PuffLoader from "react-spinners/PuffLoader";
  
function App() {

  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <div className="App">
      {
        loading ?
        <div className="loader">
        <PuffLoader
        loading={loading}
        size={350}
        color="white"
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>
      :
      <>
        <Nav />
        <Carousel images={linconnu}/>
        <Bio/>
        <Cours/>
        <Prestation/>
        <Contact/>
        <Footer/>
      </>
      }

    </div>
  );
}

export default App;
