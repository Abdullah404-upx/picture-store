import React, {useState}from 'react';
import Title from './comps/Title';
import UploadForm from './comps/Upload';
import PorgressBar from './comps/PorgressBar'
import ImaageGrid from './comps/imageGrid';
import Modal from './comps/Modal';
function App() {
  
  const [selectedImage, setSelectedImage] = useState(null);



  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImaageGrid setSelectedImage={setSelectedImage}></ImaageGrid>
      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}></Modal>}
    </div>
  );
}

export default App;
