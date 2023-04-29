import React, { useState, createContext, useContext } from 'react'

const PlanContext = createContext(null)

export const PlanProvider = ({ children }) => {
    const [yearly, setYearly] = useState(false)
    const [arcade, setArcade] = useState(true)
    const [advanced, setAdvanced] = useState(false)
    const [pro, setPro] = useState(false)
    const [onlineService, setOnlineService] = useState(false)
    const [largeStorage, setLargeStorage] = useState(false)
    const [customise, setCustomise] = useState(false)
    const [total, setTotal] = useState(0)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [noError, setNoError] = useState(true)
    const [addon, setAddon] = useState(0)

    const calculateSum = () => {
        if (yearly) {
            onlineService && setAddon(prev => prev + 10)
            largeStorage && setAddon(prev => prev + 20)
            customise && setAddon(prev => prev + 20)
        } else {
            onlineService && setAddon(prev => prev + 1)
            largeStorage && setAddon(prev => prev + 2)
            customise && setAddon(prev => prev + 2)
        }
    }

    const reset = () => {
        setAddon(0)
    }

    const getName = (event) => {
        setName(event.target.value)
    }

    const getEmail = (event) => {
        setEmail(event.target.value)
    }

    const getPhone = (event) => {
        setPhone(event.target.value)
    }


    const checkInput = (event) => {
        if (name && email && phone) {
            return
        } else {
            event.preventDefault()
            setNoError(false)
        }
    }

    const toggleYearly = () => {
        setYearly(prev => !prev)
    }

    const clickedArcade = () => {
        setArcade(true)
        setAdvanced(false)
        setPro(false)
    }
    const clickedAdvanced = () => {
        setAdvanced(true)
        setArcade(false)
        setPro(false)
    }
    const clickedPro = () => {
        setPro(true)
        setAdvanced(false)
        setArcade(false)
    }

    const getOnlineService = () => {
        setOnlineService(prev => !prev)
    }

    const getLargeStorage = () => {
        setLargeStorage(prev => !prev)
    }

    const getCustomise = () => {
        setCustomise(prev => !prev)
    }

    const btnAddon = () => {
        if (yearly) {
            arcade && setTotal(90)
            advanced && setTotal(120)
            pro && setTotal(150)
        } else {
            arcade && setTotal(9)
            advanced && setTotal(12)
            pro && setTotal(15)
        }
    }

    const resetInput = () => {
        setName('')
        setEmail('')
        setPhone('')
    }

    return (
        <PlanContext.Provider value={{ yearly, toggleYearly, clickedArcade, clickedAdvanced, clickedPro, arcade, advanced, pro, getOnlineService, getLargeStorage, getCustomise, onlineService, largeStorage, customise, total, btnAddon, getName, getEmail, getPhone, name, email, phone, checkInput, noError, resetInput, addon, calculateSum, reset }}>
            {children}
        </PlanContext.Provider>
    )
}

export const usePlan = () => {
    return useContext(PlanContext)
}