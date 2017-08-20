import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 多选框
 */
class MultiSelect extends React.Component{
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            coffee: []
        }
    }

    handleChange(e) {
        const {checked, value} = e.target;

        let {coffee} = this.state;

        if (checked && coffee.indexOf(value) === -1) {
            coffee.push(value);
        } else {
            coffee = coffee.filter(i=> i !== value);
        }

        this.setState({
            coffee,
        });
        console.log(coffee);
    }

    render() { 
        const {coffee} = this.state;

        return (
            <div>
                <p>请选择你喜欢的咖啡：</p>
                <label>
                    <input type="checkbox" value="Cappuccino" checked={coffee.indexOf('Cappuccino') !== -1} onChange={this.handleChange} />
                    Cappuccino
                </label>
                <label>
                    <input type="checkbox" value="Mocha" checked={coffee.indexOf('Mocha') !== -1} onChange={this.handleChange} />
                    Mocha
                </label>
                <label>
                    <input type="checkbox" value="Latte" checked={coffee.indexOf('Latte') !== -1} onChange={this.handleChange} />
                    Latte
                </label>
                <label>
                    <input type="checkbox" value="Machiatto" checked={coffee.indexOf('Machiatto') !== -1} onChange={this.handleChange} />
                    Machiatto
                </label>
            </div>
        );
    }
}

export default MultiSelect