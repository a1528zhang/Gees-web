/**
 * Created by az on 2017/4/18.
 */
import React, {Component} from 'react'
import FlatButton from 'material-ui/FlatButton';


export default class Navigation extends Component {
    async buttonHandle(){
        console.log('1');
        fetch('http://localhost:9090/user').then((res)=>{
            console.log(res);
        });
        console.log('2');
    }
    render() {
        return (
            <div style={{height:500, width: '100%', position: 'relative', background: '#212121',
                display: 'flex', overflow: 'scroll'}}>
                <div style={{height: 600, width: '100%'}}>
                    <span style={{display: 'fex',
                        color: '#FFFFFF', fontSize: '13em', fontWeight: 'bold', marginLeft: 80}}>Gees</span>
                    <span style={{display: 'flex',
                        color: '#FFFFFF', fontSize: '1em', marginTop: '-3em', marginLeft: 90}}>Anything you wanna talk about?</span>
                </div>
                <div className='gees-app-bar'
                     style={{
                         position: 'absolute',
                         height:70,
                         width:'100%',
                         top: 0,
                         left: 0}}>
                    <FlatButton
                        style={{
                            float: 'right',
                            boxSizing:'content-box',
                            color: '#FFFFFF',
                            border: '1px solid #FFFFFF',
                            marginRight: 30,
                            marginTop: 20
                        }} label='Join Now' onClick={this.buttonHandle}/>
                </div>
            </div>
        )
    }
}

const style = {
    show: {

    },
    hidden: {
        display: 'none'
    }
}