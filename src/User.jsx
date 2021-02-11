import React from 'react';
import './User.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone';
const User=(probs)=>{
    
    return<>
            <div className='Container'>
                  <CancelTwoToneIcon onClick={probs.Dis2} id="Cross" style={{fontSize:40}}></CancelTwoToneIcon><hr></hr>
                  <div><AccountCircleIcon id="Icon" style={{fontSize:60}}></AccountCircleIcon> 
                      <div>
                           SOURABH PATEL
                           <br></br>
                           psourabh080299@gmail.com 
                           <br></br>
                           <br></br>          
                          <a href="#"> Manage your Google Account</a>
                      </div> 
                      <br></br>
                      <hr></hr>         
                  </div>
                  <div className="inner"><PermContactCalendarIcon id="Icon" style={{fontSize:30}}></PermContactCalendarIcon><span>Your channel</span></div>
                  <div className="inner"><AttachMoneyIcon id="Icon" style={{fontSize:30}}></AttachMoneyIcon><span>Purchases and  memeberships</span></div>
                  <div className="inner"><BrightnessHighIcon id="Icon" style={{fontSize:30}}></BrightnessHighIcon><span>YouTube Studio</span></div>
                  <div className="inner"><VideoLibraryIcon id="Icon" style={{fontSize:30}}></VideoLibraryIcon><span>Switch account</span></div>
                  <div className="inner"><ExitToAppIcon id="Icon" style={{fontSize:30}}></ExitToAppIcon><span>Sign out</span></div>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  <div className="inner"><PermContactCalendarIcon id="Icon" style={{fontSize:30}}></PermContactCalendarIcon><span>Your channel</span></div>
                  <div className="inner"><AttachMoneyIcon id="Icon" style={{fontSize:30}}></AttachMoneyIcon><span>Purchases and  memeberships</span></div>
                  <div className="inner"><BrightnessHighIcon id="Icon" style={{fontSize:30}}></BrightnessHighIcon><span>YouTube Studio</span></div>
                  <div className="inner"><VideoLibraryIcon id="Icon" style={{fontSize:30}}></VideoLibraryIcon><span>Switch account</span></div>
                  <div className="inner"><ExitToAppIcon id="Icon" style={{fontSize:30}}></ExitToAppIcon><span>Sign out</span></div>
            </div>
          </>
}
export default User;