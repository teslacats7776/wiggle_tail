//import React from "react"


import React, { Component } from "react";
import API from "../../../utils/API";

class SitterForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        sitterZipCode: "",
        email: "",
        phoneNumber: "",
        wage: "",
        description: "",
        Boarding: false,
        Stay_at_home: false,
        Walks: false,
        Daycare: false

    }

    handleChange = (e)=> {
        console.log(e)
        const {name, value} = e.target

        // e.target{
        //     name,
        //     value
        // }
        // e.target.value
        // e.target.name

        this.setState({
             [name]: value  //lastName:lee
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state)
        //this.props.SitterForm(this.state)

        const sitter = {
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            sitterZipCode: this.state.sitterZipCode,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            wage: this.state.wage,
            description: this.state.description,
            Boarding: this.state.Boarding,
            Stay_at_home: this.state.Stay_at_home,
            Walks: this.state.Walks,
            Daycare: this.state.Daycare

        }
        console.log(sitter)
        
        API.addPetSitterInfo (sitter).then(results=>{
            console.log(results)
    })
    }


    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign Up to be a Pet Sitter</h5>
                        
                        <div className="input-field">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="firstName" value= {this.state.firstName}  onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName" value= {this.state.lastName}  onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="zipcode">Zipcode</label>
                            <input type="number" name="sitterZipCode"  value= {this.state.sitterZipCode} onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="zipcode">Email</label>
                            <input type="text" name="email" value= {this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="number" name="phoneNumber" value= {this.state.phoneNumber}  onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="wage">Dollar per Hours</label>
                            <input type="number" name="wage" value= {this.state.wage}  onChange={this.handleChange}/>
                        </div>
                         <div className="input-field">
                            <label htmlFor="description">Description</label>
                            <input type="text" name="description" value= {this.state.description}  onChange={this.handleChange}/>
                        </div>
                        {/* <div className="input-field">
                            <label htmlFor="boarding">Boarding</label>
                            <input type="text" name="boarding" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="stay_at_home">Stay at home</label>
                            <input type="text" id="stay_at_home" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="walks">Walks</label>
                            <input type="text" id="walks" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="daycare">Daycare</label>
                            <input type="text" id="daycare" onChange={this.handleChange}/>
                        </div> */}
                       
                        <div className="input-field">
    <p>
      <label>
        <input type="checkbox" name="Boarding" value= {this.state.Boarding}  onChange={this.handleChange} />
        <span>Boarding</span>
      </label>
      <br/>
      <label>
        <input type="checkbox" name="Stay_at_home" value= {this.state.Stay_at_home}  onChange={this.handleChange} />
        <span>Stay at Owners Home</span>
      </label>
      <br/>
      <label>
        <input type="checkbox" name="Walks" value= {this.state.Walks} onChange={this.handleChange} />
        <span>Walks</span>
      </label>
      <br/>
      <label>
        <input type="checkbox" name="Daycare" value= {this.state.Daycare}  onChange={this.handleChange} />
        <span>Daycare</span>
      </label>
      

    </p>
                           
        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0" onClick= {this.handleSubmit}>Sign Up to Sit</button>
                            <div className="red-text center">
                            </div>
                        </div>
                    
                </form>
                
            </div>
        )
    }
}



    //render see signup.js


// }
// import Checkbox from "../../checkboxes"

// function SitterForm (props) {

//     return(

//         <div className = "container">
//             <form>
//                 {/* First name */}
//                 <input
//                     onChange = {props.handleInputChange}
//                     value = {props.search} 
//                     name = "fisrtname"
//                     type = "text"
//                     className = "form-control"
//                     placeholder = "First Name"
//                     id = "firstname"
//                     /> 

//                     {/* Last name */}
//                 <input 
//                     onChange = {props.handleInputChange}
//                     value = {props.search} 
//                     name = "lastname"
//                     type = "text"
//                     className = "form-control"
//                     placeholder = "Last Name"
//                     id = "lastname"
//                     />
//                 {/* Email */}
//                 <input 
//                     onChange = {props.handleInputChange}
//                     value = {props.search} 
//                     name = "email"
//                     type = "text"
//                     className = "form-control"
//                     placeholder = "Email"
//                     id = "email"
//                     />

//                 {/* Zipcode */}
//                 <input 
//                     onChange = {props.handleInputChange}
//                     value = {props.search} 
//                     name = "zipcode"
//                     type = "text"
//                     className = "form-control"
//                     placeholder = "Zipcode"
//                     id = "zipcode"
//                 />

//                 {/* Phone*/}
//                 <input 
//                     onChange = {props.handleInputChange}
//                     value = {props.search} 
//                     name = "phone"
//                     type = "text"
//                     className = "form-control"
//                     placeholder = "Cell number"
//                     id = "cellphone"
//                     /> 

//                 {/* Service Charge*/}
//                 <input 
//                     onChange = {props.handleInputChange}
//                     value = {props.search} 
//                     name = "charge"
//                     type = "text"
//                     className = "form-control"
//                     placeholder = "Doller per hour"
//                     id = "charge"
//                     />
//                 {/* Tell us about you */}
//                 <input 
//                     onChange = {props.handleInputChange}
//                     value = {props.search} 
//                     name = "aboutyou"
//                     type = "text"
//                     className = "form-control"
//                     placeholder = "Tell us about you"
//                     id = "aboutyou"
//                     />
                
//                 {/* Options */}
//                 {/* Boarding */}
//                 <div className="form-check">
                    
//                     <input 
//                     className="form-check-input" 
//                     type="checkbox" 
//                     value = {props.search}  
//                     id="defaultCheck1"/>

//                         <label className="form-check-label" for="defaultCheck1">
//                         Boarding
//                         </label>
//                 </div> 

//                 {/* Stay at home */}
//                 <div className="form-check">
//                     <input 
//                     className="form-check-input" 
//                     type="checkbox" 
//                     value = {props.search}  
//                     id="defaultCheck1"/>
                    
//                         <label className="form-check-label" for="defaultCheck1">
//                         Stay at Home
//                         </label>
//                 </div>

//                 {/* Walks */}
//                 <div className="form-check">

//                     <input 
//                     className="form-check-input" 
//                     type="checkbox" 
//                     value = {props.search}  
//                     id="defaultCheck1"/>

//                         <label className="form-check-label" for="defaultCheck1">
//                         Walks
//                         </label>
//                 </div>

//                 {/* Daycare */}
//                 <div className="form-check">

//                     <input 
//                     className="form-check-input" 
//                     type="checkbox" 
//                     value = {props.search} 
//                     id="defaultCheck2"/>
                    
//                         <label className="form-check-label" for="defaultCheck2">
//                         Daycare
//                         </label>
//                 </div>

//                 {/* Submit Btn */}
//                 <button 
//                 type="submit" 
//                 className="btn btn-primary"
//                 onClick = {props.handleFormSubmit}>
//                     Submit
//                 </button>

//             </form>
//         </div>
//     )

// }
export default SitterForm;