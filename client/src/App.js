import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'


import './App.css';
import SC from './Components/SignupComponent/SignupComponent';
import PCS from './Components/ProfileCardSingle';
import PCL from './Containers/ProfileCardList';
import ProfileViewPage from './Components/ProfileViewPage/ProfileViewPage'
import UFF from './Practice/UserFormFull';
import DFL from './Practice/DiscoverFeaturedList';
import Error from './Components/Error';
import Navigation from './Components/Navigation' 

// import SC from './Containers/SignupFormCard'
class App extends Component {
  render() {
    return (
      // <div className="App"> 
      //    <div>
      //      <SC/>
      //    </div>
      //    <div>
      //      <PCL/>
      //    </div>
      //    <div>
      //      <ProfileViewPage/>
      //    </div>
      //    <div>
      //      <DFL/>
      //    </div>
         
      // </div>
      <BrowserRouter>
        <div>

            <Navigation/>
            <Switch>
                <Route path='/' component={PCL} exact/>
                <Route path='/pcs' component={PCS}/>
                <Route path='/signup' component={SC}/>
                <Route path='/bio' component={ProfileViewPage }/>
                <Route path='/dfl' component={DFL }/>
                <Route component={Error} exact/>
            
            </Switch>

        </div>

      
      
      </BrowserRouter>

    );
  }
}

export default App;
