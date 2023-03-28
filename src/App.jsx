import { useState } from 'react'

import Form from './assets/Form'
import FullName from './assets/FullName';
import Link from './assets/LinkList';
import Photo from './assets/Photo'

function App() {
  
  

  
  const [items, setItems] = useState([]);
  const [nextItemId, setNextItemId] = useState(1); 
  const [fullName, setCurrentFullName] = useState('');
  const [showFullName, setShowFullName] = useState(false);

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

  return (
    <div className="App">
      <h1>Linktree Hub</h1>
      <h2>Fill in the data to create your Linktree</h2>
      <Photo />    
      {showFullName && <FullName fullName={fullName}/>}
  
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
    

   
      
       <p className="madeBy">
          by <a href="https://github.com/carolmedici">Carolina Médici</a>
       </p>
    

export default App