import React, { useState } from "react";
import PhotoUploader from "../PhotoUploader";

function Photo({ src, alt, onImageChange }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (newImageSrc) => {
    setIsEditing(false);
    onImageChange(newImageSrc);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div>
      {isEditing ? (
        <PhotoUploader
          defaultImageUrl={src}
          onImageChange={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <div onClick={handleEdit}>
          <img src={src} alt={alt} />
          
        </div>
      )}
    </div>
  );
}

export default Photo;




  
/*const Photo = () => {
  const [image, setNewImage] = useState(
    "https://media.licdn.com/dms/image/D4E35AQHSsKLT2zznSA/profile-framedphoto-shrink_400_400/0/1677771949323?e=1680094800&v=beta&t=b2UJDDrJxc2BGa9S58R8ATdJ9SxcOOl_upMjd-MoRnc"
);
return (
  <div>
    <img src={image} alt="Profile image" className="profile" />
    <div className='profile-link'>
      <label className="photo-link">
        Profile photo
      </label>
      <input
        onChange={(event) => setNewImage(event.target.value)}
        type="text"
        name="photo-link"
        placeholder='Insert your profile photo link'
      />
    </div>
    
  </div>
);
};*/



