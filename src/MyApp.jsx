import React from 'react';
import './MyApp.css';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone';
const MyApp=(probs)=>{
    
    return<>
            <div className='ContainerMyApp'>
                   <CancelTwoToneIcon onClick={probs.Dis4} id="Cross" style={{fontSize:40}}></CancelTwoToneIcon><hr></hr>
                  <div><LiveTvIcon id="Icon" style={{fontSize:30,color:"red"}}></LiveTvIcon>YouTube TV</div>
                  <div><PlayCircleFilledIcon id="Icon" style={{fontSize:30,color:"red"}}></PlayCircleFilledIcon>YouTube Music</div>
                  <div><YouTubeIcon id="Icon" style={{fontSize:30,color:"red"}}></YouTubeIcon>YouTube Kids</div>
                  <div><YouTubeIcon id="Icon" style={{fontSize:30,color:"red"}}></YouTubeIcon>Creator Academy</div>
                  <div><YouTubeIcon id="Icon" style={{fontSize:30,color:"red"}}></YouTubeIcon> YouTube for Artist</div>
                  
                </div>
          </>
}
export default MyApp;