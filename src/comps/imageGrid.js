import React from 'react'
import useFirestore from '../Hooks/useFirestore'
const ImaageGrid = ({setSelectedImage})=>{

    const {docs} = useFirestore('images');
    console.log(docs);

    return(
     <div className="img-grid">
            {docs && docs.map((doc)=> (
                <div className="img-wrap" key={doc.id} onClick={()=>setSelectedImage(doc.url)}>
                    <img src={doc.url} alt="uploaded pic"/>
                </div>
            ))}
           
           
           </div>
    )
   
}

export default ImaageGrid;