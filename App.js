import React, { useState } from 'react';
import './App.css';
import Gallery from './Gallery';
import AddPhotoForm from './AddPhotoForm';

function App() {
  const [photos, setPhotos] = useState([
    { id: 1, description: 'Citynight', url: 'https://th.bing.com/th/id/OIP.FlEe4V3GJSAfk4__nyIBLwHaLH?rs=1&pid=ImgDetMain' },
    
    { id: 2, description: 'Mountain', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5uoY-6bJyGxzbtGDAGyUUu2Q_7nse9y-0Kg&s' },

    { id: 3, description: 'Sunrise', url: 'https://th.bing.com/th/id/OIP.vOHaJMnWGfDKzVabH3lIxQHaLa?rs=1&pid=ImgDetMain' }
    
  ]);

  const addPhoto = (photo) => {
    setPhotos([...photos, photo]);
  };

  const deletePhoto = (id) => {
    setPhotos(photos.filter(photo => photo.id !== id));
  };

  return (
    <div className="App">
      <h1>Product Gallery</h1>
      <AddPhotoForm onAddPhoto={addPhoto} />
      <Gallery photos={photos} onDeletePhoto={deletePhoto} />
    </div>
  );
}

export default App;
