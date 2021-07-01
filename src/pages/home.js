import React from 'react';
import {Data} from '../data/data.js';

//components
import {Profile} from '../components/profile.js';
import { SocialMedia } from '../components/socialmedia.js';

let userData=Data[0];
export const Home=()=>{
    
    return(
        <div className="card">
            <Profile props={userData}/>
            <SocialMedia props={userData}/>
        </div>
    )
}