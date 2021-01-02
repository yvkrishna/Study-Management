import styles from "./dash_comp.module.css"
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import Button from '@material-ui/core/Button';

export default function NavBar() {
    
  return (
    <div className={styles.SideBar_App}>
        <nav className="navbar navbar-expand-lg navbar-light" style={{"backgroundColor":"#3f51b5"}}>
            <a className="navbar-brand" href="#" style={{"color":"#fff"}}>Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <NotificationsNoneIcon className={styles.TopIcon} style={{"fontSize": "35px"}} />
                </li>
                <li className="nav-item">
                    <ChatIcon className={styles.TopIcon} style={{"fontSize": "35px"}} />
                </li>
                <li className="nav-item">
                    <AssignmentRoundedIcon className={styles.TopIcon} style={{"fontSize": "35px"}} />
                </li>
                <li className="nav-item dropdown">
                    <CallRoundedIcon className={styles.TopIcon} style={{"fontSize": "35px"}} />
                </li>
                <li className="nav-item dropdown">
                <Button variant="contained" color="secondary">
                   Log Out
                </Button>
                </li>
                </ul>
            </div>
        </nav>
    </div>
  );
}

