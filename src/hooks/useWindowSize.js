import {useState, useEffect} from 'react'

function useWindowSize(){
    const [size, setSize] = useState([window.innerHeight, window.innerWidth])
    useEffect(() => {
      const HandleResize = () =>{
        setSize([window.innerHeight, window.innerWidth])
      }
      window.addEventListener('resize', HandleResize)
      return() => {
        window.removeEventListener('resize', HandleResize)
      }
  
    }, [])
    return size;
  }

  export default useWindowSize;