import React from "react"

export default function Label({htmlFor, labelName}){
    return (
        <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
            {labelName}
        </label>
    )
}