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
import Photography from './components/Photography/Photography'
import AudioProd from './components/AudioProd/AudioProd'
import PostProd from './components/PostProduction/PostProd'
import VideoProd from './components/VideoProduction/VideoProd'
import Web from './components/Web/Web'
import AdService from './components/AdService/AdService'

function App() {
  return (
   
    <div className="App">
      <Routes>
        <Route exact path= "/" element={<Home/>} />
        <Route exact path= "/store" element={<Store/>} />
        <Route exact path= "/about" element={<About/>} />
        <Route exact path= "/photography" element={<Photography/>} />
        <Route exact path= "/audio-production" element={<AudioProd/>} />
        <Route exact path= "/post-production" element={<PostProd/>} />
        <Route exact path= "/video-production" element={<VideoProd/>} />
        <Route exact path= "/web" element={<Web/>} />
        <Route exact path= "/ad-service" element={<AdService/>} />
        <Route path= "*" element={<Home/>} />
      </Routes>
     
    </div>
    
  );
}

export default App;
