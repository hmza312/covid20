import React from 'react';
import clsx from 'clsx';
import  firebase from 'firebase';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import {Link} from 'react-router-dom'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import logo from '../logo.jpeg';
import './style.css';

const useStyles = makeStyles({
  list: {
    paddingTop:50,
    width: 250,
    
    },
  fullList: {
    width: 'auto',
  },
});
export default class TemporaryDrawer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
    
      
      logged: false,
items:[],

  }
}
   
componentDidMount() {
  const itemsRef = firebase.database().ref('login');
  itemsRef.on('value', (snapshot) => {
    let items = snapshot.val();
    if(items===null){
      this.setState({
        items: [],
        logged:false
      });
    }
    else{
    console.log(items)
    let newState = [];
    for (let item in items) {
      newState.push({
        id:item,
        username: items[item].username,
        password: items[item].password,
    

      });
    }
    this.setState({
      items: newState,
      logged:true
    });
  }
  });
}

  render(){
  return(

    <TemporaryDrawer1 login={this.state.logged}/>
  )
  }
}

function TemporaryDrawer1(props){
    
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });


const toggleDrawer = (anchor, open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }

  setState({ ...state, [anchor]: open });
};
if (props.login === true) {
  var list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <List>
          <ListItem>
            <img src={logo} height='200' width='auto' style={{borderRadius:'5%',}} />
          </ListItem>
          <Divider />
        {['Dashboard','Admin','AddTitle','ManageTitle', 'AddSurvey','UserManagement', 'ManageSurvey','Logout',].map((text, index) => (
          <Link to={`/${text}`} ><ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </Link>
        ))}
      </List>
      
    
    </div>
  );
}
else if (props.login === false) {

  var list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <List>
          <ListItem>
            <img src={logo} height='200' width='auto' style={{borderRadius:'5%',}} />
          </ListItem>
          <Divider />
        {[ 'Login',].map((text, index) => (
          <Link to={`/${text}`} ><ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </Link>
        ))}
      </List>
      
    
    </div>
  );
}


return (
  <div>
    {['right'].map((anchor) => (
      <React.Fragment key={anchor}>
        <MenuIcon id="draw"
              fontSize="large" fontColor="white" style={{marginRight:20, marginTop:20}}
             onClick={toggleDrawer(anchor, true)}>
        </MenuIcon>
        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    ))}
  </div>
);
}