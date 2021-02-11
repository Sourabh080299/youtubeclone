import React from 'react';
import './Upload.css';
import WifiTetheringTwoToneIcon from '@material-ui/icons/WifiTetheringTwoTone';
import PublishTwoToneIcon from '@material-ui/icons/PublishTwoTone';
import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone';
const Upload=(probs)=>{
    
    return<>
            <div className='ContainerUpload'>
                  
                  <CancelTwoToneIcon onClick={probs.Dis5} id="Cross" style={{fontSize:30}}></CancelTwoToneIcon><hr></hr>
                  <div><PublishTwoToneIcon id="Icon" style={{fontSize:30,color:"red"}}></PublishTwoToneIcon>Upload vedio</div>
                  <div><WifiTetheringTwoToneIcon id="Icon" style={{fontSize:30,color:"red"}}></WifiTetheringTwoToneIcon>Go Live</div>        
                  
                </div>
          </>
}
export default Upload;