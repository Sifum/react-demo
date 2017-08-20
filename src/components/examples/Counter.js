import React from 'react'
import ReactDOM from 'react-dom'


/*react组件的构建方法：
1.React.createClass
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
2.ES6 classes
class Button extends Comment {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        color: 'blue',
        text: 'Confirm'
    }

    render() {
        return (
            <button className={`btn btn-${color}`}><em>{text}</em></button>
        );
    }
}
3.无状态函数
function Button1({color = 'warning', text = 'Confirm'}) {
    return (<button className={`btn btn-default btn-${color}`}><em>{text}</em></button>);
}
*/

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
        return ( <div><p> { this.state.count } </p> <a href = "#" onClick = { this.handleClick } > 更新 </a> </div>);
    }

}

export default Counter