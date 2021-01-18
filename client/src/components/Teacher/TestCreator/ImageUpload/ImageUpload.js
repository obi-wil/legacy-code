import React, { useState } from 'react';

const ImageUpload = () => {

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');
  const [imageSelected, setImageSelected] = useState('');

  const uploadImageHandler = () => {
    const data = new FormData();
    data.append('file', imageSelected)
    data.append('upload_preset', 'learntoday')
    setLoading(true);

    fetch('https://api.cloudinary.com/v1_1/garmobal/image/upload', {
      method: 'POST',
      body: data
    }).then(res => res.json())
    .then(res => console.log(res.secure_url))



  };

  return (
    <div>
      <input type="file" 
        placeholder="Choose image"
        onChange={(e) => setImageSelected(e.target.files[0])}  
      />
      <button onClick={uploadImageHandler}>Upload</button>
      
    </div>
  );
};

export default ImageUpload;
