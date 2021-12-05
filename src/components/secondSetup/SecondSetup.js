import React from 'react';
import "./secondSetup.css";

const SecondSetup = ({ formData, setFormData}) => {
    
    return (
        <div className="secondSetup">
            <form className="secondForm">
                <input type="email" 
                    placeholder="Email" 
                    className="input" 
                    value={formData.email} 
                    onChange={(event) => {
                        setFormData({ ...formData, email: event.target.value})
                    }}
                />
                <input type="password" 
                    placeholder="Password"
                    className="input"
                    value={formData.password} 
                    onChange={(event) => {
                        setFormData({ ...formData, password: event.target.value})
                    }}
                />
                <input type="password" 
                    placeholder="Confirm Password"  
                    className="input"
                    value={formData.confirmPassword} 
                    onChange={(event) => {
                        setFormData({ ...formData, confirmPassword: event.target.value})
                    }}
                />
                
            </form>
        </div>
    )
}

export default SecondSetup
