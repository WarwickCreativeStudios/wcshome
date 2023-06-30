import Home from '../src/components/Home/Home'
import {
  BrowserRouter as Router 
  ,Switch 
  ,Route
  ,Link
  ,Routes
} from 'react-router-dom'
import Store from '../src/components/Store/Store'
import About from '../src/components/About/About'

function App() {
  return (
   
    <div className="App">
      <Routes>
        <Route exact path= "/" element={<Home/>} />
        <Route exact path= "/store" element={<Store/>} />
        <Route exact path= "/about" element={<About/>} />
      </Routes>
     
    </div>
    
  );
}

export default App;
