import axios from 'axios';
import React from 'react';

class Resource extends React.Component{
    state={
        loading:false,
        payload: []
    }

    componentDidMount() {
        this.setState({loading: true});
        axios.get(this.props.path).then(res => {
            this.setState({
                payload: res.data,
                loading: false
            })
        })
    }
    
    render() {
        return this.props.render(this.state)
    }
}


export default Resource; 