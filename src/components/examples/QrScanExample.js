import React from 'react'
import ReactDOM from 'react-dom'
/**
 * 避免混用合成事件和原生DOM事件
 * React的合成事件系统只是原生DOM事件系统的一个子集
 * 此例存在事件冒泡问题，连续点击二维码按钮却不能完成切换
 */
class QrScan extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleClickQr = this.handleClickQr.bind(this);

        this.state = {
            active: false
        }
    }

    componentDidMount() {
        document.body.addEventListener('click', e=> {
            if (e.target && e.target.matches('div.code')) {
                return;
            }
            this.setState({
                active: false
            });
        });      
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({
            active: !this.state.active
        })
    }

    handleClickQr(e) {
        e.preventDefault();
    }

    componentWillUnmount() {
        document.body.removeEventListener('click');
    }
    
    render() {
        return (
            <div className="qr-wrapper">
                <button  className="btn btn-success btn-lg" onClick={this.handleClick}>二维码</button>
                <div className="code" style={{display: this.state.active ? 'block':'none'}} onClick={this.handleClick}>
                    二维码图
                </div>
            </div>
        );
    }
}

export default QrScan