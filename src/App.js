import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import CropTool from './components/CropTool';
import CropPreview from './components/CropPreview';

function App() {
  const [image, setImage] = useState(null);
  const [cropData, setCropData] = useState(null);

  return (
    <div>
      <h1>Image Cropping Tool</h1>
      <ImageUploader setImage={setImage} />
      {image && (
        <CropTool image={image} setCropData={setCropData} aspectRatio={1} />
      )}
      {cropData && <CropPreview cropData={cropData} />}
    </div>
  );
}

export default App;
