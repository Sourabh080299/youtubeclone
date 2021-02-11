import React from 'react';
import Home from './Home';
import {Switch,Route} from 'react-router-dom';
 const App=()=>{
   return<div>
             <Switch>
               <Route exact path='/' component={Home}></Route>
             </Switch> 
             
         </div>
 }
 export default App;





