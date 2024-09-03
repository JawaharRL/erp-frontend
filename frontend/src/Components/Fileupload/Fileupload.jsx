import React, { useState, useEffect } from 'react';
import './Fileupload.css';
import Profile from '../../Assets/profile.svg';
import Upload from '../../Assets/upload.svg';

function Fileupload({ input_name , onFileSelect }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(Profile);

  useEffect(() => {
    const savedImage = localStorage.getItem('uploadedImage');
    if (savedImage) {
      setPreview(savedImage);
    }
  }, []);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      const fileURL = URL.createObjectURL(file);
      setSelectedImage(file);
      setPreview(fileURL);
      // onFileSelect(file);
      // localStorage.setItem('uploadedImage', fileURL);
    }
  };

  return (
    <div className="file_upload">
      {preview && (
        <div>
          <img className="photo_preview" src={preview} alt="Preview" />
        </div>
      )}
      <input type="file" id="file-input" name={input_name} onChange={handleImageChange} style={{ display: 'none' }} />
      <div>
        <label htmlFor="file-input" className="upload-button">
          <img className='icon' src={Upload} alt="Upload Icon" />
          <p> Upload Image</p>
        </label>
        <p className="image_upload_insrtuction">File should be less than 1 Mb</p>
        <p className="image_upload_insrtuction">File may be pdf, jpeg, or jpg</p>
      </div>
    </div>
  );
}

export default Fileupload;
