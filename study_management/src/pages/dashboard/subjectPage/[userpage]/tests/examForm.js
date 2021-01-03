import React, {useState,useEffect} from "react"
import {useRouter} from "next/router"
import Button from '@material-ui/core/Button';
import styles from "./examForm.module.css"
import Dexie from "dexie"

export default function TestPage({username, email, rollNumber, tests}){

    const router = useRouter(); 

    // State variable for storing answers 
    const [FormAns,setFormsAns] = useState([]);
    // const [Questions,setQuestions] = useState([])
    // const [Options,setOptions] = useState([])
    
    // Indexed DB for storing user answers
    const answers_db = new Dexie("testAnswers");
    // // Indexed DB for storing test questions
    // const questions_db = new Dexie("testQuestions");
    // // Indexed DB for storing test options
    // const options_db = new Dexie("testOptions");

    // Key value pairs for answers database
    answers_db.version(1).stores({
        posts:"++id,answer"
    })
    answers_db.open().catch((err) =>{
        console.log(err.stack || err)
    })

    // // Key value pairs for questions database
    // questions_db.version(1).stores({
    //     posts:"question"
    // })
    // questions_db.open().catch((err) =>{
    //     console.log(err.stack || err)
    // })

    // // Key value pairs for options database
    // options_db.version(1).stores({
    //     posts:"[option1,option2,option3,option4]"
    // })
    // options_db.open().catch((err) =>{
    //     console.log(err.stack || err)
    // })

    // const addQuestions = () => {
    //     tests.map((bit)=>{
    //         const questionBit = {
    //             question:bit.question,
    //             answer:bit.answer,
    //             options:bit.options
    //         }
    //         setQuestions([
    //             ...Questions,
    //             bit.question
    //           ]);
    //     })
    // }

    // const addOptions = () => {
    //     tests.map((bit)=>{
    //         setOptions([
    //             ...Options,
    //             [...bit.options]
    //           ]);
    //     })
    // }

    // const saveQuestions = () => {
    //     Questions.map((question)=>{
    //         questions_db.questions.add(question)
    //     })
    // }

    const saveOptions = () => {
        Options.map((option)=>{
            options_db.questions.add(option)
        })
    }


    const valueAdded = (e) => {
        setFormsAns([
            ...FormAns,
            e.target.value
          ]);
          answers_db.posts.add({answer:e.target.value})
    }


    const formSubmit = (e) => {
        e.preventDefault();

        FormAns.map((ans)=>{
            // console.log(ans)
            answers_db.posts.put({answer:ans})
        })
    }

    const retId = (ind) => {
        return "exampleRadios"+ind
    }

    return(
    <div style={{"background": "#5bc0de","border":"4px solid #FFA501","borderRadius":"1%"}} className="Subject_Test_App container" ><br />
        <div className={styles.formsContainer} >
            {/* {addQuestions}{saveQuestions}{saveOptions} */}
            <br />
            <p style={{"fontWeight":"500","fontSize":"25px"}}>Welcome &ensp; <u style={{"fontSize":"34px"}}>{username}</u>.</p>
            
            <hr style={{"borderTop": "2px dashed gray"}}/>   <br />
            <p>Please be ready For appearing the {router.query.subjectTest} Examination</p>
        <form onSubmit={formSubmit}>
            <div className={styles.test}>
                {tests.map((QA,index)=>{
                    return(
                        <div className={styles.QBlock}>
                            <div className={styles.question}>
                                {QA.question}
                            </div><br />
                            <div className={styles.options}>
                                {QA.options.map((option)=>{
                                    return(
                                        <div className="form-check" className={index}>
                                            <input className="form-check-input" type="radio" name={retId(index)} id={retId(index)} value={option} onChange={valueAdded} style={{"transform": "scale(1.5)"}} required/>
                                            <label className="form-check-label" for={retId(index)}>{option}</label>
                                        </div>
                                    );
                                })}
                                <br />
                            </div>
                        </div>
                    );
                })}
                <Button type="submit" variant="contained" color="secondary">
                    Submit
                </Button>
            </div>
        </form>
        </div>  <br />      
        
    </div>
    )
}


// export const getStaticProps = async () =>{
//     // const options = {
//     //     method: 'POST',
//     //     headers: {
//     //       'Content-Type': 'application/json'
//     //     },body: JSON.stringify({status:"Need Data"}) 
//     //   }
//     console.log("Hi")
//     const res = await fetch("http://localhost:3000/api/get_test/get_subject_test",options);
//     const testData = await res.json();
//     console.log(testData)
//     return{
//         props:{
//             testData:testData
//         }
//     }
// }
