import React from 'react'
import ReactDOM from 'react-dom'

class Counter extends React.Component { //定义组件，继承父类
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            count: 0,
        }
    }

    handleClick(e) {
        e.preventDefault();
        
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (<div>
                <p>{this.state.count}</p>
                <a href="#" onClick={this.handleClick}>更新</a>
            </div>)
    }

}


ReactDOM.render(<Counter/>,document.getElementById('Counter'))