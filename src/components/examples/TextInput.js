import React from 'react'
import ReactDOM from 'react-dom'
/**
 * 文本框
 */
class TextInput extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
        this.seeResult = this.seeResult.bind(this);

        this.state = {
            inputValue: '',
            textareaValue: ''
        }
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value 
        });
    }

    handleTextareaChange(e) {
        this.setState({
            textareaValue: e.target.value
        })
    }

    seeResult(e) {
        const {inputValue, textareaValue} = this.state;
        console.log(inputValue, textareaValue);
    }

    render() {
        const {inputValue, textareaValue} = this.state;
        return (
            <div>
                <button className="btn btn-success btn-sm" onClick={this.seeResult}>see</button>
                <p>单行输入框: <input type="text" value={inputValue} onChange={this.handleInputChange} /></p>
                <p>多行输入框: <textarea value={textareaValue} onChange={this.handleTextareaChange} /></p> 
            </div>
        );
    }
}


export default TextInput