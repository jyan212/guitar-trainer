import React from 'react';
import ReactDOM from 'react-dom';
import s from 'socket.io';
const socket = s.io();

export default class App extends React.Component {
    render(){
        return(
            <div>
                <p>{
                    socket.on(
                        'msg',(a)=>{a}
                    )
                }</p>
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
  );