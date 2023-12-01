import React, { useState } from 'react';
import Layout from '../components/layouts/Layout';
import Button from '@mui/material/Button';

const Downloads = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      console.error('No file selected.');
      return;
    }

    console.log('Uploading file:', selectedFile);

    // Simulate successful upload
    setTimeout(() => {
      console.log('File uploaded successfully!');
      // You can add further actions here, such as showing a success message or redirecting to another page
    }, 2000);
  };

  const containerStyle = {
    width: '100%', // Allow the container to take up the available width
    maxWidth: '800px', // Limit the container width to a maximum of 800px
    margin: '0 auto', // Center the container horizontally
    maxHeight: '100vh', // Limit the container height to the viewport height
    overflowY: 'auto', // Add a scrollbar if the content exceeds the viewport height
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center the container vertically
    alignItems: 'center', // Center the container horizontally
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    marginBottom: '1em', // Space between image and buttons
    borderRadius: '4px',
  };

  const buttonStyle = {
    width: '100%', // Adjust the width of the buttons to take up the available space
    fontFamily: 'Nunito',
    backgroundColor: '#31304D',
    height: '3em',
    marginLeft: '1em',
    padding: '1px', // Adjust the width of the buttons
  };

  return (
    <Layout>
      <div style={containerStyle}>
        {previewImage && <img src={previewImage} alt="Preview" style={imageStyle} />}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row', // Change to row to align buttons side by side
            justifyContent: 'space-between', // Add space between the buttons
            alignItems: 'center', // Align items in the center
            marginTop: '1em', // Space between image and buttons
          }}
        >
          <label
            htmlFor="fileInput"
            style={{
              ...buttonStyle,
              backgroundColor: '#31304D', // Button background color
              color: '#fff', // Button text color
              padding: '10px',
              borderRadius: '4px',
              cursor: 'pointer',
              textAlign: 'center',
              fontFamily: 'Nunito',
            }}
          >
            Choose File
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            style={{
              display: 'none',
            }}
            id="fileInput" 
          />
          <Button
            onClick={handleUpload}
            variant="contained"
            color="primary"
            style={{
              ...buttonStyle,
            }}
          >
            Upload
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Downloads;
