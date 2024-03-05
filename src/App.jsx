import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbars} from './components/home/Navbars';
import Banner from './components/home/Banner';
import SomeProjects from './components/home/SomeProjects';
import Contact from './components/home/Contact';

function App() {
  return (
    <>
      <Navbars />
      <Banner />
      <SomeProjects />
      <Contact />
      <h1>HELLO</h1>
    </>
  )
}

export default App
