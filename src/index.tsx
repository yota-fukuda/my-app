import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

interface AppProps {
        color: string;
    }

class App extends React.Component<AppProps> {
    render() {
        return (
            <div>{this.props.color} </div>
        )
    }
}

ReactDOM.render(
    <App color="red"/>,
  document.getElementById('root')
);