import React, { useEffect, useRef } from 'react';
import { Cropper } from 'react-cropper';
import 'cropperjs/dist/cropper.css';

function CropTool({ image, setCropData, aspectRatio }) {
  const cropperRef = useRef(null);

  useEffect(() => {
    const imgElement = document.getElementById('uploadedImage');
    const cropBox = {
      x: imgElement.naturalWidth / 4,
      y: imgElement.naturalHeight / 4,
      width: imgElement.naturalWidth / 2,
      height: imgElement.naturalHeight / 2,
    };

    cropperRef.current.cropper.setCropBoxData(cropBox);
  }, [image]);

  const cropImage = async () => {
    if (cropperRef.current) {
      const croppedCanvas = cropperRef.current.cropper.getCroppedCanvas();
      const croppedImageData = croppedCanvas.toDataURL('image/png');
      setCropData(croppedImageData);

      // Send cropped image data to the backend
      try {
        const blob = await new Promise((resolve) => croppedCanvas.toBlob(resolve, 'image/png'));
        const formData = new FormData();
        formData.append('image', blob, 'croppedImage.png');

        const response = await fetch('http://localhost:5000/api/images/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          console.log('Image uploaded successfully', result);
        } else {
          console.error('Failed to upload image');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  return (
    <div>
      <Cropper
        id="uploadedImage"
        src={image}
        style={{ height: 400, width: '100%' }}
        initialAspectRatio={aspectRatio}
        guides={false}
        ref={cropperRef}
      />
      <button onClick={cropImage}>Crop</button>
    </div>
  );
}

export default CropTool;
