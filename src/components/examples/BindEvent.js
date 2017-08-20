/*
1.事件委托
*/
//bind
class Button extends React.Component {
    handleClick(e, arg) {
        console.log(e, arg);
    }

    render() {
        return (<button onClick={this.handleClick.bind(this, 'test')}>Test</button>);
    }
}
//不传参的便捷方式
class Button extends React.Component {
    handleClick(e) {
        console.log(e);
    }

    render() {
        return (<button onClick={this.handleClick}>Test</button>);
    }
}
//箭头语法
class Button extends React.Component {
    handleClick = (e) => {
        console.log(e);
    };

    render() {
        return (<button onClick={this.handleClick}>Test</button>);
    }
}

/*
2.自动绑定
*/
//原生事件
class Button extends React.Component {
    //componentDidMount会在组件完成安装并且在浏览器中存在真是的Dom后调用
    componentDidMount() {
        this.refs.button.addEventListener('click', e=>{
            this.handleClick(e, this.refs.button.innerHTML);
        });
    }

    handleClick(e,args) {
        console.log(e, args);
    }
    //在React中使用DOM原生事件，一定要在组件卸载时手动移除，否则很可能出现内存泄漏的问题
    componentWillUnmount() {
        this.refs.button.removeEventListener('click');
    }
    
    render() {
        return (<button ref="button">Test</button>);
    }
}