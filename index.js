import React from 'react';
import ReactDOM from 'react-dom';
import s from 'socket.io';
const socket = s.io();
var msg;
socket.on('msg',(a)=>{
    msg = a;
})
export default class App extends React.Component {
    render(){
        return(
            <div>
                <p>{
                 a   
                }
                }</p>
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
