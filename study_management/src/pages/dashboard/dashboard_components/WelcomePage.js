import React, {useState,useEffect} from "react"
import styles from "./dash_comp.module.css"
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { useRouter } from 'next/router'
import Button from '@material-ui/core/Button';


export default function HomePage({username, email, rollNumber}){
    const router = useRouter()
    const getSubject = (subject) =>{
        router.push("/dashboard/subjectPage/"+username+"/"+subject);
    }
    
    return(
    <div className="Welcome_Page_App container-fluid"><br />
        <p style={{"fontWeight":"500","fontSize":"25px"}}>Welcome &ensp; <u style={{"fontSize":"34px"}}>{username}</u>&ensp;, This is your Dashboard </p>
        
        <hr style={{"borderTop": "2px dashed gray"}}/>   <br />
       
        <p style={{"fontWeight":"500","fontSize":"25px"}}><b>My Courses</b></p>

        <div className={styles.coursesList}>
            {["Linear Integrated Circuits","Microcontrollers and Microprocessors","Control Systems","Maths","Microcontrollers and Microprocessors Lab"].map((subject)=>{
                return (
                <div className={styles.courseCard} key={subject}>
                    <div className="card shadow p-3 mb-5 bg-white rounded" style={{"width":"18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title"><b>{subject}</b></h5>
                            <h6 className="card-subtitle mb-2 text-muted">Semester - 5</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Button variant="contained" onClick={() => getSubject(subject)} color="primary">Go to Course</Button>
                        </div>
                    </div>
                </div>
                );
            })}            
        </div><br /><br />
        <div className="WorkArea">
            <hr style={{"borderTop": "2px dashed gray"}}/>   <br />
            <p style={{"fontWeight":"500","fontSize":"25px"}}><b>Today's Time Table</b></p>
            
            <div className="row">
                <div className="col-md-2">
                <Timeline align="alternate">
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>9 AM - 10 AM</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>10 AM - 11 AM</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot color="secondary" />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>11 AM - 12 AM</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>12 PM - 1 PM</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot color="secondary" />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>1 PM - 2 PM</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot color="primary"/>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>3 PM - 4 PM</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent>4 PM - 5 PM</TimelineContent>
                    </TimelineItem>
                </Timeline>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-8">
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Time</th>
                        <th scope="col">Course</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">9 AM - 10 AM</th>
                            <td>15ECE150</td>
                        </tr>
                        <tr>
                            <th scope="row">90 AM - 11 AM</th>
                            <td>15ECE154</td>
                        </tr>
                        <tr>
                            <th scope="row">11 AM - 12 PM</th>
                            <td>15ECE158</td>
                        </tr>
                        <tr>
                            <th scope="row">12 PM - 1 PM</th>
                            <td>Lunch Break</td>
                        </tr>
                        <tr>
                            <th scope="row">1 PM - 2 PM</th>
                            <td>15ECE162</td>
                        </tr>
                        <tr>
                            <th scope="row">2 PM - 3 PM</th>
                            <td>15ECE166</td>
                        </tr>
                        <tr>
                            <th scope="row">3 PM - 4 PM</th>
                            <td>15ECE170</td>
                        </tr>
                        <tr>
                            <th scope="row">4 PM - 5 PM</th>
                            <td>15ECE174</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div className="col-md-1"></div>
            </div>

        </div>
    </div>
    )
}