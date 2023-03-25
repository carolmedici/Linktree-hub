
import React from 'react';

import './LinkList.css'

const LinkList = ({ item }) => {
  if (!item) {
    return null;
  }

  const { nameLink, url } = item;

  return (
    <div className='Link-item'>
      <h3>{nameLink}</h3>
      <p>{url}</p>
    </div>
  );
};

export default LinkList;