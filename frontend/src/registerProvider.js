import React, {createContext, useContext, useState} from "react";

const registerContext = createContext()

export const useRegisterContext = () => useContext(registerContext)

const RegisterProvider = ({children}) => {

    const [isRegistered, setIsRegistered] = useState (false)
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const register = (firstName, lastName, email, password) => {
        setFirstName(firstName)
        setLastName(lastName)
        setEmail(email)
        setPassword(password)
        setIsRegistered(true)
    }

    const logout = () => {
        localStorage.clear()
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
    }

    const state = {
        isRegistered,
        firstName,
        lastName,
        email,
        password,
        register,
        logout
    }

    return(
    <registerContext.Provider value={state}>{children}</registerContext.Provider>
    )
}

export default RegisterProvider;