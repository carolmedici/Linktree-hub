
import React from 'react';

import './LinkList.css'

const LinkList = ({ item }) => {
  if (!item) {
    return null;
  }

  const { nameLink, urlLink} = item;

  return (
    <div className='container'>
      <h3  className='Link-item'><a href={urlLink} target='_blank'>{nameLink}</a></h3>
     
    </div>
  );
};

export default LinkList;