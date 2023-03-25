import TextField from '../TextField';
import './Form.css'
import React, { useState } from 'react';

const Form = (props) =>{
    
    const [fullName, setFullName] = useState ('')
    const [nameLink, setnameLink] = useState ('')
    const [LinkList, setLinkList] = useState('')

    const newItem = {
        nameLink: nameLink,
        url: LinkList,
      };
      
    

const onSave = (event) =>{
    event.preventDefault()
    props.forRegisteredItem({
        fullName,
        nameLink,
        LinkList
    })
    setFullName('')
    setnameLink('')
    setLinkList('')
}

    return(
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Fill in the data to create your Linktree</h2>
                <TextField
                obligatory={true}
                label='Name'
                placeholder= 'Add your full name'
                result = {fullName}
                toChange={result => setFullName(result)}
                />
                <TextField
                obligatory={true}
                label='Link name'
                placeholder= 'Add the link name'
                result = {nameLink}
                toChange={result => setnameLink(result)}
             
                />
                <TextField
                obligatory={true}
                label='Link'
                placeholder= 'Insert the link to be customized'
                result = {LinkList}
                toChange={result => setLinkList(result)}
             
                />
                <button className='btnSubmit'>Submit</button>
            </form>
        </section>
    );
}

export default Form