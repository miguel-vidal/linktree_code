import React from 'react';

export const SocialNetwork=props=>{
    const {name,image,link}=props.props;

    return(
        <section className={`social-media  ${name}`}>
            <img src={image} alt={name}/>
            <a href={link}>{name}</a>
        </section>
    )
}