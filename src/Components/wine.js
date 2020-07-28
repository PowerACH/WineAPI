import React from 'react';
import '../App.css';
import axios from 'axios';

//Render all Wines in the webpage
export default class Wine extends React.Component {
    constructor() {
        super();
        this.state = {
            wines: [],
        }
    }

    componentDidMount() {
        axios.get("http://myapi-profstream.herokuapp.com/api/a5b159/wines")
        .then(res => this.setState({ wines: res.data }))
        .catch(error => console.error( error.message ));
    }

    render() {
        return (
            <div>
                <h1 className = "header" >WINE</h1>
                <div className="container">
                {
                    
                    this.state.wines.map(wine => {
                        console.log(wine);
                        return (
                            <li className="wine">
                                <img src={wine.picture} alt="wine" />
                                <h2>{wine.name}</h2>
                                {/* <h3>{wine.description}</h3> */}
                            </li>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}