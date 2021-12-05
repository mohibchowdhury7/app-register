import React, { useState } from 'react';
import "./register.css";
import FirstSetup from "../../components/firstSetup/FirstSetup"
import SecondSetup from "../../components/secondSetup/SecondSetup"
import ThirdSetup from "../../components/thirdSetup/ThirdSetup"


const Register = () => {
    const [step, setSetp] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        username: "",
        nationality: "",
        other: "",
    })

    const FormTitles = ["Personal Info", "Sign Up", "Other"];

    const setUpDisplay = () => {
        if (step === 0) {
            return <FirstSetup formData={formData} setFormData={setFormData}/>
        } else if (step === 1) {
            return <SecondSetup formData={formData} setFormData={setFormData}/>
        } else {
            return <ThirdSetup formData={formData} setFormData={setFormData}/>
        }
    }
    return (
        <div className="form">
            <div className="progressbar"></div>
            <div className="form-container">
                <div className="stepheader">
                    <h2>{FormTitles[step]}</h2>
                </div>


                <div className="body">
                    {setUpDisplay()}
                </div>

                
                <div className="footer">
                    <button
                        disabled={step === 0}
                        onClick={() => {
                            setSetp((currPage) => currPage -1);
                        }}
                    >Prev</button>
                    <button 
                        disabled={step === 3}
                        onClick={() => {
                            if (step === FormTitles.length - 1){
                                alert("Form has been submited")
                                console.log(formData)
                            } else {
                                setSetp((currPage) => currPage + 1);
                            }
                        }}
                    >
                        {step === FormTitles.length - 1 ? "Submit" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Register;
