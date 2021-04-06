import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from './components/Home/Home'
import About from './components/About/About'
import Features from './components/Features/Features'

function App() {
  return (
    <div className='App'>
      <Nav/>
      <Home/>
      <About/>
      <Features/>
    </div>
  );
}

export default App;
