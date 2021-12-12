import React, {useState} from 'react'
import axios from "axios";
import {DragDrop} from "./components/DragDrop";

export function MemeLoader() {
    const [fileType, setFileType] = useState("");
    const [fileName, setFileName] = useState("");
    const [file, setFile] = useState("");
    // Handle file drag in
    const onDrop = acceptedFiles => {
        const file = acceptedFiles[0]
        setFileName(file["name"]);
        setFileType(file["type"]);

        const formData = new FormData();
        formData.append("image", file);
        axios.post('load', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
                const image = response.data["image"];
                setFile(image);
                console.log(response.data["image"].toString());
            },
            (error) => {
                console.log(error);
            });

    }


    if (!file) {
        return <DragDrop fileName={fileName} onDrop={onDrop}/>
    } else {
        return <div
            className={"text-3xl flex flex-grow flex-col items-center text-center justify-center bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-16"}>
            <img src={`data:image/jpeg;base64,${file}`} alt="Red dot" className={"object-contain"}/>
        </div>
    }
}