import React from 'react'
import useGif from '../hooks/useGif';

// const API_KEY = "kC0kZcGTTNZITKMQPLaxGwHeGpwYMn45"

const Random = () => {
    // const [gif,setgif] = useState('');
    // const [loading,setloading] = useState(false);
    // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    
    // async function fetchData(){
    //     setloading(true);
    //     // console.log(API_KEY)
    //     // const url = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`;
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`
    
    //     //axios is based on a promise like fetch
    //     const {data} = await axios.get(url); //destucturing

    //     const output = data.data.images.downsized_large.url;
    //     console.log(output); 
    //     // // return output;   
    //     setgif(output);   
    //     setloading(false);
    // }
    // // 
    // useEffect(()=>{
    //     fetchData();
    // },[])

   const {loading,fetchData,gif} = useGif(); 

    function clickHandler(){
        fetchData();
    }
  return (
    <div className='flex flex-col items-center border border-black bg-green-500 
        w-1/2 rounded-lg gap-y-10 '>

        <div className='text-2xl font-bold underline uppercase'>A Random GIF</div>
        {(!loading) ? (<img src={gif} width="450" alt="gif" />) : (<div className="custom-loader"></div>) }
        <button onClick={clickHandler} className='bg-white w-9/12 p-2.5'>Generate</button>
    </div>

  )
}

export default Random;
