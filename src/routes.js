import React from 'react';
import { Route } from 'react-router-dom';
import DashBoard from "./component/dashBoard.js";
import Survey from "./component/SurveyForm.js";
import viewSurvey from "./component/viewsurvey.js";
import viewtitle from "./component/viewtitle.js";
import logout from "./component/logout.js";
import Main from "./component/main.js";
import SurveyTitle from "./component/surveytitle.js";
import Admin from "./component/admin.js";
import Detail from './component/fulldetails';
import home from './component/home.js';
//import ArticleDetail from './containers/ArticleDetailView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={home}/>
        <Route exact path='/Dashboard' component={Main}/>
        <Route exact path='/Login' component={DashBoard}/>
        <Route exact path='/Admin' component={Admin}/>
        <Route exact path='/AddSurvey' component={Survey}/>
        <Route exact path='/AddTitle' component={SurveyTitle}/>
        <Route exact path='/ManageSurvey' component={viewSurvey}/>
        <Route exact path='/ManageTitle' component={viewtitle}/>
        <Route exact path='/Logout' component={logout}/>
        <Route exact path='/Dashboard/:title' component={Detail}/>
    </div>

)

export default BaseRouter;