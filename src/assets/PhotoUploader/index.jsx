import React, { useState } from 'react';
import  './PhotoUploader.css'

const PhotoUploader = (props) => {
  const [image, setImage] = useState(props.defaultImageUrl);

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const updateImage = () => {
    if (typeof props.onImageChange === 'function') {
      props.onImageChange(image);
    }
  };

  return (
    <div className='profile-link'>
      <label className="photo-link">
        Profile photo
      </label>
      <input
        onChange={handleImageChange}
        type="text"
        name="photo-link"
        placeholder='Insert your profile photo link'
        value={image}
      />
      <button onClick={updateImage}>Update photo</button>
    </div>
  );
};

export default PhotoUploader;
