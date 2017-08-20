import React from 'react'
import ReactDOM from 'react-dom'

class SelectExample extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            area: ''
        }
    }

    handleChange(e) {
        this.setState({
            area: e.target.value
        });
        console.log(e.target.value);
    }

    render() {
        const {area} = this.state;

        return (
            <select value={area} onChange={this.handleChange}>
                <option value="Beijing">北京</option>
                <option value="Shanghai">上海</option>
                <option value="Hangzhou">杭州</option>
            </select>
        );
    }
}

export default SelectExample