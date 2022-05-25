import React from 'react';

const Scroll = (props)=>{
    return (
        <div style={{marginTop:'10px',overflowY:'scroll', height:'600px',borderTop:'2px solid cyan'}}>
            {props.children}
        </div>
    )
}

export default Scroll;