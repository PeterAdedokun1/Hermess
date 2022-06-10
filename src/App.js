import logo from './logo.svg';
import './App.css';
import {Routes , Route} from "react-router-dom"
import Navbar from './pages/Navbar';
import Heading from "./pages/Heading"
import Section1 from './pages/section1';
import Section2 from './pages/Section2';

function App() {
  return (
    <div className="App">
      
      <Heading />
      <Navbar />
      <Section1 />
      {/* <Section2/> */}
      {/* <Accordion/> */}
      <Routes>
        {/* <Route path='/' element={<Navbar/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
