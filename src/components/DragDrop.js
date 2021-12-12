import {Spinner} from "./Spinner";
import {InboxIcon, InboxInIcon} from "@heroicons/react/outline";
import React, {useCallback} from 'react'
import {useDropzone} from "react-dropzone";

export function DragDrop(props) {

    const onDrop = useCallback(props.onDrop, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: 'image/jpeg, image/png',
        multiple: false,
        onDrop
    });
    return (
        <div {...getRootProps()}
             className={"font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500"}>
            <input
                className={"text-3xl flex flex-grow flex-col items-center text-center justify-center"} {...getInputProps()}/>
            <div
                className={"text-3xl flex flex-grow flex-col items-center text-center justify-center bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-16"}>
                <div className={"text-white p-6 flex flex-col items-center h-64"}>
                    {
                        props.fileName ?
                            // If a file is selected, show loading animation
                            <Spinner message={"Processing " + props.fileName + "..."}/>
                            // else show drag drop
                            : <>
                                {
                                    isDragActive ?
                                        // If a file is dragged over drop zone
                                        <>
                                            <InboxInIcon className={"h-32 w-32 text-white p-6"}/>
                                            <p>Drop the memes!</p>
                                        </>
                                        // If no files are dragged over drop zone
                                        : <>
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