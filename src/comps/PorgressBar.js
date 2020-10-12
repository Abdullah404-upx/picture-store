import React, {useEffect}from 'react'
import useStorage from '../Hooks/useStorage'

const PorgressBar = ({file, setFile})=>{
    const {url, progress} = useStorage(file);
    //console.log(progress, url);

    useEffect(()=>{
        if(url){
            setFile(null);
        }
    }, [url, setFile])

    return (
        <div className="progress-bar" style={{ width: progress + '%'}}>
         
          <span>loading</span>
        </div>
    );
}

export default PorgressBar;