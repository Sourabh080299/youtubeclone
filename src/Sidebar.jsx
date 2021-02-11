import React from 'react';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import ShopTwoIcon from '@material-ui/icons/ShopTwo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const Sidebar=()=>{
return<>
      <div className="SideContainer">
          
          <div><HomeIcon id="Icon" style={{fontSize:27}}></HomeIcon> <span>Home</span></div>
          <div><ExploreIcon id="Icon" style={{fontSize:27}}></ExploreIcon> <span>Explore</span></div>
          <div><SubscriptionsIcon id="Icon" style={{fontSize:27}}></SubscriptionsIcon> <span>Subscriptions</span></div>
          
          <br></br>
          <hr></hr>
          <br></br>

          <div><VideoLibraryIcon id="Icon" style={{fontSize:27}}></VideoLibraryIcon> <span>Library</span></div>
          <div><HistoryIcon id="Icon" style={{fontSize:27}}></HistoryIcon> <span>History</span></div>
          <div><ShopTwoIcon id="Icon" style={{fontSize:27}}></ShopTwoIcon> <span>Your Vedio</span></div>
          <div><WatchLaterIcon id="Icon" style={{fontSize:27}}></WatchLaterIcon> <span>WatchLater</span></div>
          <div><KeyboardArrowDownIcon id="Icon" style={{fontSize:27}}></KeyboardArrowDownIcon> <span>Show more</span></div>
            
          <br></br>
          <hr></hr>
          <br></br>
          <p style={{color:"white",fontSize:17,marginLeft:"23px"}}>SUBSCRIPTIONS</p>
          <br></br>
          <div><AccountCircleIcon id="Icon" style={{fontSize:27}}></AccountCircleIcon> <span>Channel name</span></div>
          <div><AccountCircleIcon id="Icon" style={{fontSize:27}}></AccountCircleIcon> <span>Channel name</span></div>
          <div><AccountCircleIcon id="Icon" style={{fontSize:27}}></AccountCircleIcon> <span>Channel name</span></div>
          <div><AccountCircleIcon id="Icon" style={{fontSize:27}}></AccountCircleIcon> <span>Channel name</span></div>
          <div><AccountCircleIcon id="Icon" style={{fontSize:27}}></AccountCircleIcon> <span>Channel name</span></div>
          <div><AccountCircleIcon id="Icon" style={{fontSize:27}}></AccountCircleIcon> <span>Channel name</span></div>
          <div><AccountCircleIcon id="Icon" style={{fontSize:27}}></AccountCircleIcon> <span>Channel name</span></div>
          <div><AccountCircleIcon id="Icon" style={{fontSize:27}}></AccountCircleIcon> <span>Channel name</span></div>
          <div><AccountCircleIcon id="Icon" style={{fontSize:27}}></AccountCircleIcon> <span>Channel name</span></div>
          <div><AccountCircleIcon id="Icon" style={{fontSize:27}}></AccountCircleIcon> <span>Channel name</span></div>
          <br></br>
          <hr></hr>
          <br></br>
          <p style={{color:"white",fontSize:17,marginLeft:"23px"}}>MORE FROM YOUTUBE</p>
          <br></br>
          <div><AccountCircleIcon id="Icon" style={{fontSize:27}}></AccountCircleIcon> <span>Channel name</span></div>
          <div><AccountCircleIcon id="Icon" style={{fontSize:27}}></AccountCircleIcon> <span>Channel name</span></div>
          <div><AccountCircleIcon id="Icon" style={{fontSize:27}}></AccountCircleIcon> <span>Channel name</span></div>
          <div><AccountCircleIcon id="Icon" style={{fontSize:27}}></AccountCircleIcon> <span>Channel name</span></div>
          <div><AccountCircleIcon id="Icon" style={{fontSize:27}}></AccountCircleIcon> <span>Channel name</span></div>
          <div><AccountCircleIcon id="Icon" style={{fontSize:27}}></AccountCircleIcon> <span>Channel name</span></div>
          <div><AccountCircleIcon id="Icon" style={{fontSize:27}}></AccountCircleIcon> <span>Channel name</span></div>
          <div><AccountCircleIcon id="Icon" style={{fontSize:27}}></AccountCircleIcon> <span>Channel name</span></div>
          <div><AccountCircleIcon id="Icon" style={{fontSize:27}}></AccountCircleIcon> <span>Channel name</span></div>
          <div><AccountCircleIcon id="Icon" style={{fontSize:27}}></AccountCircleIcon> <span>Channel name</span></div>
          <br></br>
          <hr></hr>
          <br></br>
          <p style={{color:"white",textAlign:"center"}}> Dovelped by sourabh patel CSE student at Sardar Vallabhbhai National Institute Of Tecnology Surat and content used is 
           HTML || CSS || REACT JS || 
              © 2021  </p>
              <br></br>
          <hr></hr>
          <br></br>
      </div>
      <div className="SideContainer1">          
          <div style={{fontSize:15}}><HomeIcon id="Icon" style={{fontSize:27}}></HomeIcon>Home </div>
          <div style={{fontSize:15}}><ExploreIcon id="Icon" style={{fontSize:27}}></ExploreIcon>Explore </div>
          <div style={{fontSize:14}}><SubscriptionsIcon id="Icon" style={{fontSize:27}}></SubscriptionsIcon>Subscriptions </div>    
          <div style={{fontSize:15}}><VideoLibraryIcon id="Icon" style={{fontSize:27}}></VideoLibraryIcon>Library </div>             
      </div>
      </>
}
export default Sidebar;