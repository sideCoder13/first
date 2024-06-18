import React from 'react'
import { useState } from 'react';
import useGif from '../hooks/useGif';

const Tag = () => {
  // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  // const [gif,setgif] = useState('');
  // const [loading,setloading] = useState(false);
  // const [tag,settag] = useState('');
  
  // async function fetchData(){
  //     setloading(true);
  //     // console.log(API_KEY)
  //     // const url = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`;
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
  
  //     //axios is based on a promise like fetch
  //     const {data} = await axios.get(url); //destucturing

  //     const output = data.data.images.downsized_large.url;
  //     // console.log(output); 
  //     // return output;   
  //     setgif(output);   
  //     setloading(false);
  // }
  // // 
  // useEffect(()=>{
  //     fetchData();
  // },[])

  const [tag,settag] = useState('');

  const {loading,fetchData,gif} = useGif(tag);


  function clickHandler(){
    fetchData(tag);
  }
 console.log(tag);


 function changeHandler(event) {
    // Directly update the tag with the input's value
    settag(event.target.value);
 }
 return (
  <div className='flex flex-col items-center border border-black bg-green-500 
      w-1/2 rounded-lg gap-y-10 '>

      <div className='text-2xl font-bold underline uppercase'>{`A Random ${tag} GIF`}</div>
      {(!loading) ? (<img src={gif} width="450" alt="gif" />) : (<div className="custom-loader"></div>) }

      <input
        className='w-9/12 border border-black mb-[3px] py-2'
        type='text'
        placeholder='type of GIF you want...'
        name='text'
        value={tag}
        onChange={changeHandler}
      />

      <button onClick={clickHandler} className='bg-white w-9/12 p-2.5'>Generate</button>
  </div>

)
}

export default Tag;
