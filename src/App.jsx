import { useState } from 'react'

import Form from './assets/Form'
import FullName from './assets/FullName';
import Link from './assets/LinkList';
import Photo from './assets/Photo'

function App() {
  
  

  const [items, setItems] = useState([]);
  const [nextItemId, setNextItemId] = useState(1); 

 

  const onItemAdd = (itemList) => {
    const newItem = { ...itemList, id: nextItemId };
    setItems([...items, newItem]);
    setNextItemId(nextItemId + 1);
  };





 /* function handleRegisteredItem(itemData) {
    const newItem = { id: nextItemId, ...itemData };
    setItems([...items, newItem]);
    setNextItemId(nextItemId + 1); // Atualiza nextItemId adicionando 1
  }
  console.log(items)*/
  return (
    <div className="App">
      <h1>Linktree Hub</h1>
      <Photo />    
      <FullName />
      <Form forRegisteredItem={itemList => onItemAdd(itemList)} />
    
      
     <Link />
     {items.map(item => (
  <Link key={item.id} item={item} />
))}

   
      
       <p className="madeBy">
          by <a href="https://github.com/carolmedici">Carolina Médici</a>
       </p>
    </div>

    
  )
}

export default App