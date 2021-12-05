import React from 'react';
import "./thirdSetup.css";

const ThirdSetup = ({ formData, setFormData}) => {
    return (
        <div className="thirdSetup">
            <form className="thirdForm">
                {/* <input type="number" placeholder="Number" className="input"/> */}
                <input type="text" 
                    placeholder="Nationality"  
                    className="input"
                    value={formData.nationality} 
                    onChange={(event) => {
                        setFormData({ ...formData, nationality: event.target.value})
                    }}
                />
                <input type="text" 
                    placeholder="Other"  
                    className="input"
                    value={formData.other} 
                    onChange={(event) => {
                        setFormData({ ...formData, other: event.target.value})
                    }}
                />
                
            </form>
        </div>
    )
}

export default ThirdSetup
