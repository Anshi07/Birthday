import './photogallery.css';
import Gallery from './gallery';
import GalleryTwo from './gallery2.js';
import GalleryThree from './gallery3.js';


function PhotoGallery() {
  return (
    <>
    
     <section className="stylesec">
       <div className="photo-container">
      <GalleryTwo />
       </div>
     <div className="container">
       <Gallery />
       </div>
       <div className="photo-container">
      <GalleryThree />
       </div>
       </section>
    
     </>
  );
}

export default PhotoGallery;

