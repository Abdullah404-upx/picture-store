import {useState, useEffect} from 'react'
import {projectStorage, projectFireStore, timeStamp} from '../firebase/config'
//import * as cors from 'cors';

const useStorage = (file) => {
   
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null); // error of the upload
    const [url, setUrl] = useState(null);

    
    useEffect(()=> {
       // refs
    //   const cors = require('cors')({origin: true});

       const storageRef = projectStorage.ref(file.name);
       const collectionRef = projectFireStore.collection('images')
  
       storageRef.put(file).on('state_changed', (snap)=>{
           let percentage  = (snap.bytesTransferred / snap.totalBytes) * 100;
           setProgress(percentage);
       }, (err)=>{
           setError(err)
       }, async ()=>{
           
        const url = await storageRef.getDownloadURL();

        const createdAt = timeStamp();
       
        collectionRef.add({ url, createdAt});
        setUrl(url);
       })
    }, [file])

    return {progress, url, error}
}


export default useStorage;


