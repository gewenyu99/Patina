import React from 'react';
import ReactDOM from 'react-dom';
import {Drop} from "./Drop";
import "./index.css"

class App extends React.Component {
    render() {
        return (
            <div
                className={"justify-evenly bg-gradient-to-l from-green-200 to-yellow-100 min-h-screen min-w-screen " +
                "flex flex-col items-stretch text-center gap-32 p-32"}>
                <span
                    className={"text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-yellow-600"}>
                  PATINA
                </span>
                <Drop/>
            </div>

        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));