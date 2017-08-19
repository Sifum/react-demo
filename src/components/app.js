import React from 'react'
import ReactDOM from 'react-dom'

const Button = React.createClass({
    getDefaultProps() {
        return {
            color: 'danger',
            text: 'Confirm'
        }
    },
    render() {
        const {color, text} = this.props;

        return (<button className={`btn btn-${color}`}><em>{text}</em></button>);
    }
})


ReactDOM.render( <Button /> , document.getElementById('Button'))