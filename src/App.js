import Nav from "./components/Nav";
import Bio from "./components/Bio";
import Cours from "./components/Cours";
import Prestation from "./components/Prestation";
import Contact from "./components/Contact"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Bio/>
      <Cours/>
      <Prestation/>
      <Contact/>
    </div>
  );
}

export default App;
