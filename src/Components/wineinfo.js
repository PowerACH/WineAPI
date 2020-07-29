import React from 'react';
import axios from 'axios';



//Single Wine Routed Page
export default class WineInfo extends React.Component {
    state = {
        id: null
    }

    componentDidMount(){
        // console.log("Props are: " + JSON.stringify(this.props, null, 2))
        let id = this.props.match.params.id;
        axios.get("http://myapi-profstream.herokuapp.com/api/a5b159/wines/" + id)
            .then(res => {
                this.setState({
                    post: res.data
                })
                console.log(res)
            })
        this.setState({
            id: id
        })
    }
    render() {
        return (
            <div className="container">
                <h4>{ this.state.id }</h4>
            </div>
        )
    }
}