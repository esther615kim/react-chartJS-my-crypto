import {useState,useEffect} from 'react';
import axios from "axios"; // not {axis}

const useFectchDatabyUrl = (url)=>{
  const [data,setData] = useState(); // empty vs null, which one is better?
  const [isLoading,setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    setTimeout(()=>{
      axios.get(url)
      .then((res)=>{
        if(!res.data) throw Error("could not fetch the requested data");

        return res.data;
      })
      .then((updatedData)=>{
        setData(updatedData);
        setIsLoading(false);
        setError(null); //
      })
      .catch((err)=>{
        setIsLoading(false);
        setError(err.message);
      })
    },1000);
  },[url]);

  return {data,isLoading,error}
}

export default useFectchDatabyUrl;