import React from 'react';
import "./firstSetup.css";

const FirstSetup = ({ formData, setFormData}) => {
    return (
        <div className="firstSetup">
            <form className="firstForm">
                <input type="text" 
                    placeholder="First Name" 
                    className="input"
                    value={formData.firstName} 
                    onChange={(event) => {
                        setFormData({ ...formData, firstName: event.target.value})
                    }}
                />
                <input type="text" 
                    placeholder="Last Name"  
                    className="input"
                    value={formData.lastName} 
                    onChange={(event) => {
                        setFormData({ ...formData, lastName: event.target.value})
                    }}
                />
                <input type="text" 
                    placeholder="Username"  
                    className="input"
                    value={formData.username} 
                    onChange={(event) => {
                        setFormData({ ...formData, username: event.target.value})
                    }}
                />
                
            </form>
        </div>
    )
}

export default FirstSetup
