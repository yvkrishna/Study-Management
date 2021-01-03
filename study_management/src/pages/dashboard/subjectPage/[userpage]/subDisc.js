import React, {useState,useEffect} from "react"
import {useRouter} from "next/router"
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import styles from "./subDisc.module.css"

export default function SubPage({username, email, rollNumber}){
    const router = useRouter();

    const getTest= () =>{
        router.push("/dashboard/subjectPage/"+username+"/tests/"+router.query.subjectPage);
    }

    return(
    <div className="Subject_Description_App container-fluid"><br />
        <p style={{"fontWeight":"500","fontSize":"25px"}}>Welcome &ensp; <u style={{"fontSize":"34px"}}>{username}</u>&ensp; to {router.query.subjectPage} </p>
        
        <hr style={{"borderTop": "2px dashed gray"}}/>   <br />
       
        <p style={{"fontWeight":"500","fontSize":"25px"}}><b>{router.query.subjectPage}</b></p>
        
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button><a href="#info" className={styles.initButtons}>Information</a></Button>
            <Button><a href="#syllabus" className={styles.initButtons}>Syllabus</a></Button>
            <Button><a href="#resourses" className={styles.initButtons}>Resources</a></Button>
            <Button><a href="#announcements" className={styles.initButtons}>Announcements</a></Button>
            <Button><a href="#testsAndQuizzes" className={styles.initButtons}>Tests And Quizzes</a></Button>
        </ButtonGroup><br /><br /><br />

        
                <div id="info">
                    <h4>Information</h4><br />
                    <p>Hi, Welcome to this course on <b>{router.query.subjectPage}</b>.<br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
           <br /><br />
            <div className="row">
            <div className="col-md-5 col-sm-5 col-12">
                <div id="syllabus">
                    <h4>Syllabus</h4><br />
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-danger">Syllabus</li>
                        <li className="list-group-item">Lorem Ipsum</li>
                        <li className="list-group-item">Lorem Ipsum</li>
                        <li className="list-group-item">Lorem Ipsum</li>
                        <li className="list-group-item">Lorem Ipsum</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-1 col-sm-1 col-12"></div>
            <div className="col-md-5 col-sm-5 col-12">
                <div id="resourses">
                    <h4>Resources</h4><br />
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-primary">Resources</li>
                        <li className="list-group-item">Lorem Ipsum</li>
                        <li className="list-group-item">Lorem Ipsum</li>
                        <li className="list-group-item">Lorem Ipsum</li>
                        <li className="list-group-item">Lorem Ipsum</li>
                        <li className="list-group-item">Lorem Ipsum</li>
                    </ul>
                </div>
            </div>
        </div>

        <br /><br />
        
        <div className="row">
            <div className="col-md-5 col-sm-5 col-12">
                <div id="announcements">
                    <h4>Announcements</h4><br />
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start list-group-item-info">
                            <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">List group item heading</h5>
                            <small>3 days ago</small>
                            </div>
                            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            <small>Donec id elit non mi porta.</small>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">List group item heading</h5>
                            <small className="text-muted">3 days ago</small>
                            </div>
                            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            <small className="text-muted">Donec id elit non mi porta.</small>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">List group item heading</h5>
                            <small className="text-muted">3 days ago</small>
                            </div>
                            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                            <small className="text-muted">Donec id elit non mi porta.</small>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md-1 col-sm-1 col-12"></div>
            <div className="col-md-5 col-sm-5 col-12">
                <div id="testsAndQuizzes">
                        <h4>Tests And Quizzes</h4><br />
                        <p>Hello,<br /> In this Tab you will get notified if there is any tests or quizzes available</p>
                        <div className="alert alert-success" role="alert">
                            <a onClick={() => getTest()} className="alert-link">End Semester Examination</a>. 50 Marks (In Total)
                        </div>    
                </div>
            </div>
        </div>
        <br /><br /><br />
    </div>
    )
}