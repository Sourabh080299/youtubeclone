import react from 'react';
import './Nav.css';

import MenuIcon from '@material-ui/icons/Menu';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { NavLink } from 'react-router-dom';
const Nav=(probs)=>{

    
    return<>
            <div className="NavContainer">
               <div className="LeftNav">
                   <NavLink  className='NavLink'  to="/"><MenuIcon onClick={probs.Dis1} style={{fontSize: 25 }}></MenuIcon></NavLink>
                   <NavLink className='NavLink'  to="/" ><YouTubeIcon style={{color:"red",fontSize:25 }}></YouTubeIcon><span>YouTube</span></NavLink> 
               </div>
               <div className="MiddleNav">
                   <div> <input style={{color:"white"}} type="text" placeholder="Search...."></input>
                   <NavLink className='NavLink'   to="/"><SearchIcon style={{color:"rgb(80, 80, 80)",fontSize:20,padding:0 }}></SearchIcon></NavLink>
                   </div>
                 
               </div>
               <div className="RightNav">
                    <NavLink className='NavLink' to="/" onClick={probs.Dis2}><AccountCircleIcon></AccountCircleIcon></NavLink>
                    <NavLink className='NavLink' to="/" onClick={probs.Dis3}><AddAlertIcon></AddAlertIcon></NavLink>     
                    <NavLink className='NavLink' to="/" onClick={probs.Dis4}><ViewComfyIcon></ViewComfyIcon></NavLink>                   
                    <NavLink className='NavLink' to="/" onClick={probs.Dis5}><VideoCallIcon></VideoCallIcon></NavLink>     
                    <NavLink className='NavLink' to="/" id="Mic"><MicIcon id="Mic"></MicIcon></NavLink>  
                    <NavLink className='NavLink' to="/" id="Search"><SearchIcon></SearchIcon></NavLink>
               </div> 
            </div>
                    
                
               
         </>
}
export default Nav;