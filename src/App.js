import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Textform from './textform';
import About from './about';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <div className='container'><Textform heading="Enter the text to analyze below"></Textform></div> */}
      <About></About>
      
    </div>
  );
}

export default App;
