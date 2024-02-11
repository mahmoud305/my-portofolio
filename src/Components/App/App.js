import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Work from '../Work/Work';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Courses from '../Courese/Courses';
import Contact from '../Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Work/>
      <About/>
      <Skills/>
      <Courses/>
      <Contact/>
    </div>
  );
}

export default App;
