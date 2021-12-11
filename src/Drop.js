import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import {UploadIcon} from "@heroicons/react/solid";
import {InboxIcon, InboxInIcon} from "@heroicons/react/outline";
import axios from "axios";

export function Drop() {
    const [fileType, setFileType] = useState("")
    const [fileName, setFileName] = useState("")
    const [file, setFile] = useState("")
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0]
        setFileName(file["name"])
        setFileType(file["type"])

        const formData = new FormData();
        formData.append("image", file);
        axios.post('load', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
                const image = response.data["image"]
                setFile(image)
                console.log(response.data["image"].toString())
            },
            (error) => {
                console.log(error);
            });

    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: 'image/jpeg, image/png',
        multiple: false,
        onDrop
    })

    return (
        <div {...getRootProps()}
             className={"font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500"}>
            <input
                className={"text-3xl flex flex-grow flex-col items-center text-center justify-center"} {...getInputProps()}/>
             <img src={`data:image/jpeg;base64,${file}`} alt="Red dot" />
            <div
                className={"text-3xl flex flex-grow flex-col items-center text-center justify-center bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-16"}>
                <div className={"text-white p-6 flex flex-col items-center h-64"}>
                    {
                        fileType ? <div className={"flex flex-col items-center"}>
                                <svg className="animate-spin -ml-1 mr-3 h-24 w-24 text-white py-4"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            stroke-width="4"></circle>
                                    <path className="opacity-75" fill="currentColor"
                                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <p>Processing {fileName} ...</p>
                        </div> :
                            <>
                                {
                                    isDragActive ?
                                        <>
                                            <InboxInIcon className={"h-32 w-32 text-white p-6"}/>
                                            <p>Drop the memes!</p>
                                        </> :

                                        <>
                                            <InboxIcon className={"h-32 w-32 text-white p-6"}/>
                                            <p>Drag your meme here</p>
                                        </>
                                }
                            </>
                    }
                </div>

            </div>

        </div>
    )
}