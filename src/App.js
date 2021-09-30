import './App.css';
import PhotoGallery from './components/photogallery';
import Carousel from './components/carousel';
import Navbar from './components/navbar';
import Card from './components/Card';
import Love from './components/Love';




function App() {
  return (
    <>
       <div> 
       <Navbar />
     <Carousel />
     <Card />
     <PhotoGallery />
     <Love />
      </div>
    
    
     </>
  );
}

export default App;
