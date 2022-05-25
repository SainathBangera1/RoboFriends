import React from "react";

const Card = ({id,username,name,email})=>{
    return(
        <div  className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <h2>{name}</h2>
            <img alt='robots' src={`https://www.robohash.org/${id}?200x200`}/>
            <div>
                <h2>{username}</h2>
                <p>{email}</p>
            </div>
        </div>
    ) 
}

export default Card;