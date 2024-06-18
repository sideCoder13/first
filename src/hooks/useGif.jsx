// import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

const useGif = () => {
    const [gif,setgif] = useState('');
    const [loading,setloading] = useState(false);
    
    async function fetchData(tag){
        setloading(true);
    
        //axios is based on a promise like fetch
        const {data} = await axios.get((tag) ? `${randomUrl}&tag=${tag}`: randomUrl ); //destucturing
  
        const output = data.data.images.downsized_large.url;
        // console.log(output); 
        // return output;   
        setgif(output);   
        setloading(false);
    }
    
    useEffect(()=>{
        fetchData();
    },[])

    return {gif,loading,fetchData}
}

export default useGif;