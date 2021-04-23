import React from "react"

export default function Input({id, name, type, autoComplete}){
    return (
        <div className="mt-1">
                  <input
                    id={id}
                    name={name}
                    type={type}
                    autoComplete={autoComplete}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
    )
}