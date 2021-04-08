import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from './components/Home/Home'
import About from './components/About/About'
import Features from './components/Features/Features'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Nav/>
      <Home/>
      <About/>
      <Features/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
