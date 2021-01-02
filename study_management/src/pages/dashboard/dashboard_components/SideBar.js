import styles from "./dash_comp.module.css"
import Link from "next/link"
import Image from 'next/image'
import HomeIcon from '@material-ui/icons/Home';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';
import Button from '@material-ui/core/Button';

export default function SideBar({username, email, rollNumber}) {
    
  return (
    <div className={styles.SideBar_App}>
        <div className={styles.sideBar}>
            <br /><br />
            <div className={styles.information}>
                <div>
                    <Image src="/profile.svg" alt="avatar" className={styles.img} classname="img-thumbnail mx-auto d-block" width="100" height="100"/>
                </div>
                <div><br />
                    <h4>{username}</h4>
                    <h5>{rollNumber}</h5>
                </div>
            </div><br /><br />

            <div className="d-flex bd-highlight">
                <div className="p-2 bd-highlight">
                    <ul style={{"listStyleType": "none","padding":"20px"}}>
                        <li className={styles.sidebarlitag}><HomeIcon className={styles.sideBarIcon} style={{"fontSize": "35px"}} /></li>
                        <li className={styles.sidebarlitag}><LibraryBooksRoundedIcon className={styles.sideBarIcon} style={{"fontSize": "35px"}} /></li>
                        <li className={styles.sidebarlitag}><AccountCircleIcon className={styles.sideBarIcon} style={{"fontSize": "35px"}} /></li>
                        <li className={styles.sidebarlitag}><ReceiptIcon className={styles.sideBarIcon} style={{"fontSize": "35px"}} /></li>
                        <li className={styles.sidebarlitag}><Brightness4Icon className={styles.sideBarIcon} style={{"fontSize": "35px"}} /></li>
                    </ul>
                </div>
                <div className="p-2 bd-highlight">
                    <ul style={{"listStyleType": "none","padding":"20px"}}>
                        <li  className={styles.sidebarlitag} style={{"marginTop":"3px"}}>Home</li>
                        <li  className={styles.sidebarlitag} style={{"marginTop":"3px"}}>My Courses</li>
                        <li  className={styles.sidebarlitag} style={{"marginTop":"3px"}}>My Account</li>
                        <li  className={styles.sidebarlitag} style={{"marginTop":"3px"}}>Dues</li>
                        <li  className={styles.sidebarlitag} style={{"marginTop":"3px"}}>Night Mode</li>
                    </ul>
                </div>
            </div>
            <div style={{"padding":"20px","margin-Left":"20px"}}>
                <Button variant="contained" color="secondary">
                    Log Out
                </Button>
            </div>
        </div>
    </div>
  );
}

