import React,{useState} from 'react'
import ImageViewer from 'react-simple-image-viewer';


//component
import PhotoCollection from '../../Components/restaurant/PhotosCollection';

const Photos = () => {
    const [photos, setPhotos] = useState(["https://b.zmtcdn.com/data/pictures/0/18867630/077f85ce7c7e175ff71a37665a63aedf.jpg",
    "https://b.zmtcdn.com/data/pictures/0/18867630/3e5c16c11c1cc4e5763155957476ce25.jpg",
    "https://b.zmtcdn.com/data/reviews_photos/acd/7f3cce46604e5ba4509ebd1f5a501acd_1582530892.jpg",
    "https://b.zmtcdn.com/data/reviews_photos/0f5/4fcc96babddbbd5395c1575eb445c0f5_1563028924.jpg",
   "https://b.zmtcdn.com/data/reviews_photos/76a/4a24e144ce676ab8f0ccb1f4f518576a_1545502124.jpg",
"https://b.zmtcdn.com/data/reviews_photos/506/54d8bde8ad31c59f7019ad6286e5f506_1560496512.jpg"]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [CurrentImg, setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);

    const openViewer = () => setIsMenuOpen(true);
    return (
        <>
            {isMenuOpen && (
          <ImageViewer
          src={photos}
          currentIndex={ CurrentImg }
          disableScroll={ false }
          onClose={ closeViewer }
                   />
              )}

          <div className="flex flex-wrap gap-2">
          { photos.map((photo) => (
               <PhotoCollection image={photo} openViewer={openViewer} />
               ))} 
          </div>
        </>
    )
}

export default Photos
