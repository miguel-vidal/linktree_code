import React from 'react';

export const Profile=props=>{
    const {image,name,position}=props.props;

    return(
        <div className="top">
            <div className="image_profile">
                <img src={image} alt={name}/>
            </div>
            <h1>{name}</h1>
            <h2>{position}</h2>
        </div>
    );
}