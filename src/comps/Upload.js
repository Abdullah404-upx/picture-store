import React, {useState} from 'react'
import PorgressBar from './PorgressBar'

const UploadForm = ()=>{
    const [error, setError] = useState(null);
    const [file, setFile] = useState(null);

    const allowedTypes = ['image/png', 'image/jpeg' ];

    
    const changeHalnder = (e)=>{
        let selected = e.target.files[0];
        // it's put in an arry beuacsea you can select multipes files, so here you only accept the fire file
       // console.log(selected);

       if (selected && allowedTypes.includes(selected.type)){
           setFile(selected);
           setError(null);
       }else {
           setFile(null);
        setError("please select an image file (png or jpeg)")
       }
    }

    return (
        <form>
            <input type="file" onChange={changeHalnder}/>

            <div className="output">

         {error && <div className="error">{error}</div>}

            </div>

    {file && <div>{file.name}</div>}
    {file && <PorgressBar file={file} setFile = {setFile}/>}
        </form>
      
    );
}
export default UploadForm;