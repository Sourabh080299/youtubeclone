import React, { useState } from "react";
import Nav from './Nav';
import Sidebar from './Sidebar';
import Content from './Content';
import User from './User';
import Notification from './Notification';
import MyApp from './MyApp';
import Upload from './Upload';
import { colors } from "@material-ui/core";
const Home=()=>{  
  const [UserDisplay,setValue2]=useState({display:"none"});
  const [SideBarDisplay,setValue1]=useState({display:"block"});
  const [NotificationDisplay,setValue3]=useState({display:"none"});
  const [MyAppDisplay,setValue4]=useState({display:"none"});
  const [UploadDisplay,setValue5]=useState({display:"none"});
  const Dispaly1=()=>{
   (SideBarDisplay.display==="none")?setValue1({display:"block"}):setValue1({display:"none"});
  }
  const Dispaly2=()=>{
    (UserDisplay.display==="none")?setValue2({display:"block"}):setValue2({display:"none"});
   }
  const Dispaly3=()=>{
    (NotificationDisplay.display==="none")?setValue3({display:"block"}):setValue3({display:"none"});
   }
  const Dispaly4=()=>{
    (MyAppDisplay.display==="none")?setValue4({display:"block"}):setValue4({display:"none"});
   }
  const Dispaly5=()=>{
    (UploadDisplay.display==="none")?setValue5({display:"block"}):setValue5({display:"none"});
   }


  return<div> 
           <Nav Dis1={Dispaly1}
                Dis2={Dispaly2}
                Dis3={Dispaly3}
                Dis4={Dispaly4}
                Dis5={Dispaly5}
                >
           </Nav> 
           <div className="Maincontainer">
               <div style={SideBarDisplay}>
                  <Sidebar  cross={SideBarDisplay}
                   >
                  </Sidebar> 
               </div>        
               <Content></Content> 
               <div style={UserDisplay}>
                  <User  Dis2={Dispaly2}
                  ></User> 
               </div>             
               <div style={NotificationDisplay}>
                  <Notification  Dis3={Dispaly3}
                  ></Notification> 
               </div>             
               <div style={MyAppDisplay}>
                  <MyApp    Dis4={Dispaly4}
                  ></MyApp>
               </div>             
               <div style={UploadDisplay}>
                  <Upload Dis5={Dispaly5}
                  ></Upload>
               </div>             
           </div>
           
        </div>

}

export default Home;