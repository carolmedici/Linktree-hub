# Linktree-hub

LinkTree Hub created based on [Jean Meira's](https://github.com/JCDMeira/challenge-FR-001-linktree-hub) React challenge .
 

 ## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Change profile picture.
- Add your name.
- Add a Link with a customizable name to compose your Linktree


### Screenshot

![](https://github.com/carolmedici/Linktree-hub/blob/main/public/images/print.png)
![](https://github.com/carolmedici/Linktree-hub/blob/main/public/images/print2.png)



### Links

- Solution URL: [https://github.com/carolmedici/Linktree-hub](https://github.com/carolmedici/Linktree-hub)
- Live Site URL: [linktree-hub.vercel.app](linktree-hub.vercel.app)

## My process

### Built with

- React:
 -- Imported files : useState, valid-url
 -- Functions
 -- Components


### What I learned

Improving skills to create a React application using functional components, the useState hook, how to pass information and functions between React components using props.
I also learned how to do URL validation using the valid-url library.

Check it out:
```js
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
  const [imageUrl, setImageUrl] = useState("https://media.licdn.com/dms/image/D4E35AQHSsKLT2zznSA/profile-framedphoto-shrink_400_400/0/1677771949323?e=1680094800&v=beta&t=b2UJDDrJxc2BGa9S58R8ATdJ9SxcOOl_upMjd-MoRnc");

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
```


### Continued development


Keep practicing React

## Author

- LinkedIn - [Carolina Médici](https://www.linkedin.com/in/carolina-medici/)
- Frontend Mentor - [@carolmedici](https://www.frontendmentor.io/profile/carolmedici)




