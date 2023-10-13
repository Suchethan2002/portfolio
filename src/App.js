import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Main from './Components/Main';
import About from './Components/About';
import Controls from './Components/Controls';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import Experience from './Components/Experience';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <About/> */}
      <Controls/>
      <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
            {/* <Route path='/Portfolio' element={<Portfolio/>}></Route> */}
            <Route path='/Experience' element={<Experience/>}></Route>
          </Routes> 
    </div>
    </BrowserRouter>
    
  );
}

export default App;
