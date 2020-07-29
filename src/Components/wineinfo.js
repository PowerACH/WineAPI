import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'



//Single Wine Routed Page
export default class WineInfo extends React.Component {
    state = {
        id: [],
        name: []
    }

    componentDidMount(){
        // console.log("Props are: " + JSON.stringify(this.props, null, 2))
        let id = this.props.match.params.id;
        axios.get("http://myapi-profstream.herokuapp.com/api/a5b159/wines/" + id)
            .then(res => {
                this.setState({
                    id: res.data
                })
                console.log(res)
            })
        this.setState({
            id: id
        })
    }
    render() { 
        const wine = this.state.id ? (
            <div className="wine">
                <img src={this.state.id.picture} alt="wine" />
                <h4 className = "center"> {this.state.id.name}</h4>
                <p>{this.state.id.description}</p>
                <p> Year: {this.state.id.year}</p>
                <p> Country: {this.state.id.countryy}</p>
                <p> Region: {this.state.id.region}</p>
                <p> Price: ${this.state.id.price}</p>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        )
        return(
           
            <div className="container">
            <div>
                <Link to="/">back</Link>
            </div>
                <h4>{ wine }</h4>
            </div>
        )
    }
}