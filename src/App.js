//import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Introduction from './components/0_introduction/Introduction';

function App() {
  return (
    // <Slideshow/>
    <div id="colorlib-page">
      <div id="container-wrap">
         <Sidebar/>
      <div id="colorlib-main">
        <Introduction/>
      </div>
      </div>
    </div>
  );
}

export default App;
