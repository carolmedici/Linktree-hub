import { useState } from 'react'
import Form from './assets/Form'
import FullName from './assets/FullName';
import Link from './assets/LinkList';
import Photo from './assets/Photo'
import PhotoUploader from './assets/PhotoUploader';

function App() {
  const [items, setItems] = useState([]);
  const [nextItemId, setNextItemId] = useState(1); 
  const [fullName, setCurrentFullName] = useState('');
  const [showFullName, setShowFullName] = useState(false);
  const [imageUrl, setImageUrl] = useState("https://media.licdn.com/dms/image/D4E35AQHSsKLT2zznSA/profile-framedphoto-shrink_400_400/0/1677771949323?e=1681304400&v=beta&t=wUq7jEW6GaieWPrf_Y5dVA3AiKoRk-eQYOcYQWcPblM");

  const onItemAdd = (itemList) => {
    const newItem = { ...itemList, id: nextItemId };
    setItems([...items, newItem]);
    setNextItemId(nextItemId + 1);
  };

  const onFullNameChange = (fullName) => {
    setCurrentFullName(fullName);
    setShowFullName(true);
  }

  const onFormSubmit = (itemList) => {
    if (itemList.fullName) {
      setCurrentFullName(itemList.fullName);
      setShowFullName(true);
    }

    onItemAdd(itemList);
  };

  const onImageChange = (newImageUrl) => {
    setImageUrl(newImageUrl);
  };

  return (
    <div className="App">
      <h1>Linktree Hub</h1>
      <h2>Fill in the data to create your Linktree</h2>
      <Photo src={imageUrl} alt="Profile" /> 
      {showFullName && <FullName fullName={fullName}/>}
      <PhotoUploader defaultImageUrl={imageUrl} onImageChange={onImageChange}/>
      <Link />
      {items.map(item => (
        <Link key={item.id} item={item} />
      ))}
      <Form forRegisteredItem={itemList => {
        onFormSubmit(itemList);
      }} />
      <p className="madeBy">
        by <a href="https://github.com/carolmedici">Carolina Médici</a>
      </p>
    </div>
  );
}

export default App;
