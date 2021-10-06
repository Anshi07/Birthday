import './App.css';
import Navbar from './components/navbar';
import Carousel from './components/carousel';
import Card from './components/Card';
import PhotoGallery from './components/photogallery';
import Love from './components/Love';
import MyAudio from './components/audio';




function App() {
  return (
    <>
       <div> 
       <Navbar />
       <Carousel />
       <Card />
       <PhotoGallery />
       <MyAudio />
       <Love />
       </div>
    
    
     </>
  );
}

export default App;
