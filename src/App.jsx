import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbars} from './components/home/Navbars';
import Banner from './components/home/Banner';
import SomeProjects from './components/home/SomeProjects';

function App() {
  return (
    <>
      <Navbars />
      <Banner />
      <SomeProjects />
    </>
  )
}

export default App
