import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
;

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Navbar />
      </div>
      <About />
      {/* <Projects /> */}
      <Footer />
    </div>
  );
}

export default App;
