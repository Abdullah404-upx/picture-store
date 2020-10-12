import {useState, useEffect} from 'react'
import {projectFireStore} from '../firebase/config'


const useFirestore = (collection)=>{
    const [docs, setDocs] = useState([]);

    useEffect(()=>{
       const unsub =  projectFireStore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot(snap=>{
            let documents = [];
            snap.forEach(doc=>{
                // doc.data()(object) or doc.id(just id)
                documents.push({...doc.data(), id: doc.id})
            })

            setDocs(documents);

        }) // fa function that fires a call babck functoin every time a changeoccurs to the collection/ takes a snape shot of the collection

        return ()=> unsub()

    }, [collection])

    return {docs};
}

export default useFirestore