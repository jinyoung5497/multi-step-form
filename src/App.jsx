import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { YourInfo, SelectPlan, AddOn, Summary, Thanks } from './components'
import { PlanProvider } from './components/Plan'

export default function App() {
    return (
        <>
            <PlanProvider>
                <Routes>
                    <Route path="/" element={<YourInfo />}></Route>
                    <Route path="select-plan" element={<SelectPlan />}></Route>
                    <Route path="add-on" element={<AddOn />}></Route>
                    <Route path="summary" element={<Summary />}></Route>
                    <Route path="thanks" element={<Thanks />}></Route>
                </Routes>
            </PlanProvider>
        </>
    )
}
