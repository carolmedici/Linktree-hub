import TextField from '../TextField';
import './Form.css'
import React, { useState } from 'react';
import validUrl from 'valid-url'

const Form = (props) =>{
    
    const [fullName, setFullName] = useState('')
    const [nameLink, setnameLink] = useState ('')
    const [urlLink, seturlLink] = useState('')
    

    const newItem = {
        nameLink: nameLink,
        urlLink: urlLink,
        fullName: fullName,
    };

    const onSave = (event) => {
        event.preventDefault();
        if (validateUrl(urlLink)) {
          props.forRegisteredItem({
            fullName: fullName,
            nameLink: nameLink,
            urlLink: urlLink,
          });
          setFullName("");
          setnameLink("");
          seturlLink("");
        } else {
          alert("Invalid URL! Insert http://...");
        }
      };
      

    const validateUrl = (url) => {
        if (validUrl.isUri(url)) {
          return true;
        } else {
          return false;
        }
      };
      

    return(
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Fill in the data to create your Linktree</h2>
                <TextField
                    obligatory={false}
                    label='Full Name'
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
                    result = {urlLink}
                    toChange={result => seturlLink(result)}
                />
                <button className='btnSubmit'>Submit</button>
            </form>
        </section>
    );

  

}

export default Form

