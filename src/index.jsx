import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import {MemeLoader} from "./MemeLoader";

class App extends React.Component {
    render() {
        return (
            <div className={"grid place-items-center min-h-screen bg-gradient-to-tr from-blue-400 to-green-400"}>
                <div
                    className="flex flex-col justify-center items-center max-w-5xl rounded-2xl overflow-hidden shadow-lg mx-auto my-8 bg-white p-16">
                     <h1 className={"text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500"}>
                        PATINA
                    </h1>
                    <div className="w-full">
                        <p className={"text-3xl text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500 py-6"}>
                            Increase the street cred of your memes! Age your memes by adding patina and compression
                            artifacts.
                        </p>
                    </div>

                    <div className="py-4 w-full">
                        <MemeLoader/>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));