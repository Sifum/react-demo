import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 单选
 */
class SelectChoose extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            radioValue: 'female'
        }
    }

    handleChange(e) {
        this.setState({
            radioValue: e.target.value
        });
        console.log(e.target.value);
    }


    render() {
        const {radioValue} = this.state;

        return (
            <div>
                <p>gender:</p>
                <div className="form-inline">
                    <div className="form-group">
                            <label>male:<input className="form-control input-sm" type="radio" value="male" checked={radioValue === 'male'} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>female:<input className="form-control input-sm" type="radio" value="female" checked={radioValue === 'female'} onChange={this.handleChange} />
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectChoose