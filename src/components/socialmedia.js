import React from 'react';
import { SocialNetwork } from './socialnetwork';

export const SocialMedia=props=>{
    const {socialmedia}=props.props

    return(
        <div className="bottom">
            {
                socialmedia.map((sm,idx)=>{
                    return <SocialNetwork props={sm} key={idx}/>
                })
            }
        </div>
    )
}