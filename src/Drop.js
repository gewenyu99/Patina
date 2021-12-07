import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'

export function Drop() {
    const [fileType, setFileType] = useState("")
    const [fileName, setFileName] = useState("")
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0]
        setFileName(file["name"])
        setFileType(file["type"])

    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: 'image/jpeg, image/png',
        multiple: false,
        onDrop
    })

    return (
        <div {...getRootProps()}
             className="h-72 flex-grow bg-white rounded-xl shadow-md flex items-center mx-64">
            <input {...getInputProps()}/>
            {

                fileType ? <p>{fileName} {fileType}</p> :
                    <>
                        {
                            isDragActive ?
                                <p>Drop the files here ...</p> :
                                <p>Drag 'n' drop some files here, or click to select files</p>
                        }
                    </>
            }
        </div>
    )
}