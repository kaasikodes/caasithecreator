import Home from "./Pages/Home";
import OtherPages from "./Pages/OtherPages";

import GlobalStyle from "./globalStyles";

import {AnimatePresence } from 'framer-motion'


import {Switch, Route, useLocation} from 'react-router-dom'


function App() {
  const location = useLocation();
  
  return (
    <div >
      <GlobalStyle/>

      <AnimatePresence exitBeforeEnter = {true}>
        <Switch location = {location} key = {location.key}>
          <Route exact path = '/' component = {Home}/>
          <Route exact path = '/home' component = {OtherPages}/>
        </Switch>

      </AnimatePresence>
      

      {/* Design n reponsive */}
      {/* Create admin ui */}
      {/* Implement admin ui n project */}
      {/* host */}
      {/* finish onoms n post*/}
      {/* fin design 2 landing pages  */}
      {/* start applying and looking for clients online */}
     

    </div>
          

      
  );
}

export default App;
