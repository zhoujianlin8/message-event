import ReactDOM from 'react-dom';
import './index.scss';
import Message from '../src/index';
import React, {Component} from 'react';
const message = new Message();
class Demo extends Component{
		componentDidMount() {
			message.on('hello',(res)=>{
				console.log('res',res)
			})
		}
		render(){
			return <div onClick={this.clickMe.bind(this)}>hello</div>
		}
		clickMe(){
			message.fire('hello',{name: 'assa'})
		}	
}

ReactDOM.render(<Demo />, document.getElementById('container'));




