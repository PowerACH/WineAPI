import React from 'react';
import '../App.css';
import axios from 'axios';
// import WineInfo from './wineinfo'
import { Link } from 'react-router-dom';

const BASE_API = "http://myapi-profstream.herokuapp.com/api/a5b159"

//Render all Wines in the webpage
//Route Params
export default class Wine extends React.Component {
    constructor() {
        super();
        this.state = {
            wines: [],
        }
    }

    componentDidMount() {
        axios.get(`${BASE_API}/wines`)
        .then(res => this.setState({ wines: res.data }))
        .catch(error => console.error( error.message ));
    }

    render() {
        return (
            
            <div>
                <h1 className = "header" >WINE</h1>
                <div className="container">
                {
                    
                    this.state.wines.map((wine,i) => {
                        console.log(wine);
                        return (
                            <li className="wine">
                            <Link to= {`/wines/${wine.id}`}>
                                <img src={wine.picture} alt="wine" key={i} /> 
                                </Link>
                                <h2>{wine.name}</h2>                               
                            </li>
                        )
                    }
                  )
                }
            </div>
          </div>
        )
    }
}