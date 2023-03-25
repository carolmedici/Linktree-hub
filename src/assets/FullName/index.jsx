import './FullName.css'
import React from 'react';

const FullName = (props) => {
    return (
        <div className='full-name'>
          <h4>{props.fullName ? props.fullName : '\u00A0'}</h4>
        </div>
    );
};

export default FullName;







