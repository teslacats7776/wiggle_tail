import React, { Component } from "react";
// import API from "../../../utils/API";

// class SitterResult extends Component {

function SitterResult (props) {
//     //Initialize State
//     constructor(props){
//     super(props)
//     this.state ={
//         petSitter : []
        
//     }
// }

    // // Render the data from the API request
    // componentDidMount () {
    //     API.getAllPetSitter()
    //     .then(sitterInfo => this.setState({ petSitter: sitterInfo})
    //     )
    //     .catch(err => console.log(err))
    // }

        return(
            <div>
                {/* <div>
                    {props.matchedPetSitters.map(result => ( // matchedPetSitters come from the state in petSitter.js
                       <div className="card mb-3" key={result._id}> */}
                           <div className = "row">

                                {/* Sitter Image Section*/}
                                <div className="col-md-2">
                                    {/* <img className="img-fluid" src={props.matchedPetSitters.userPhoto} /> */}
                                </div>

                                {/* Sitter Info Section */}
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5></h5>
                                        {/* <h5>{result.lastName}</h5>
                                        <h5>{result.sitterZipcode}</h5>
                                        <h5>{result.email}</h5>
                                        <h5>{result.phoneNumber}</h5>
                                        <h5>{result.wage}</h5>
                                        <h5>{result.description}</h5>
                                        <h5>{result.Boarding}</h5>
                                        <h5>{result.Stay_at_home}</h5>
                                        <h5>{result.Walks}</h5>
                                        <h5>{result.Daycare}</h5> */}
                                    </div>
                                </div>

                            </div>
                       </div>

                    // ))}
            //     </div>
            // </div>
        )
}

export default SitterResult;

