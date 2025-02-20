import React, { useState } from 'react';

function ImageUploader({ setImage }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setImage(URL.createObjectURL(selectedFile));
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {file && <img id="uploadedImage" src={URL.createObjectURL(file)} alt="Uploaded" style={{ display: 'none' }} />}
    </div>
  );
}

export default ImageUploader;
