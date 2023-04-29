import React from 'react'
import { sidebarDesktop, sidebarMobile } from '../assets'
import { Link } from 'react-router-dom'
import { usePlan } from './Plan'

export default function YourInfo() {
    const plan = usePlan()
    return (
        <main className='bg-Light-gray h-screen flex de:items-center justify-center'>
            <div className='bg-White de:w-[1100px] de:h-[700px] de:my-20 grid de:grid-cols-3 de:p-5 de:rounded-3xl mo:grid-rows-6 mo:grid-cols-1 mo:p-0 mo:w-full mo:h-full mo:justify-items-center mo:bg-Light-gray'>
                <div className='flex de:flex-col z-20 col-start-1 row-start-1 de:p-9 de:mt-2 mo:w-fit mo:gap-5 mo:self-center'>
                    <section className='flex de:mb-8 z-10'>
                        <div className='bg-Light-blue rounded-full flex items-center justify-center w-12 h-12 de:mr-5'>
                            <p className='font-bold'>1</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className=' text-[13px] text-Light-gray mo:hidden'>STEP 1</p>
                            <p className='font-bold text-White mo:hidden'>YOUR INFO</p>
                        </div>
                    </section>
                    <section className='flex de:mb-8 z-10'>
                        <div className='border-Light-blue border-[1px] text-white rounded-full flex items-center justify-center w-12 h-12 de:mr-5'>
                            <p className='font-bold '>2</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className=' text-[13px] text-Light-gray mo:hidden '>STEP 2</p>
                            <p className='font-bold text-White mo:hidden'>SELECT PLAN</p>
                        </div>
                    </section>
                    <section className='flex de:mb-8 z-10'>
                        <div className='border-Light-blue border-[1px] text-white rounded-full flex items-center justify-center w-12 h-12 de:mr-5'>
                            <p className='font-bold '>3</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className=' text-[13px] text-Light-gray mo:hidden'>STEP 3</p>
                            <p className='font-bold text-White mo:hidden'>ADD-ONS</p>
                        </div>
                    </section>
                    <section className='flex de:mb-8 z-10'>
                        <div className='border-Light-blue border-[1px] text-white rounded-full flex items-center justify-center w-12 h-12 de:mr-5'>
                            <p className='font-bold '>4</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className=' text-[13px] text-Light-gray mo:hidden'>STEP 4</p>
                            <p className='font-bold text-White mo:hidden'>SUMMARY</p>
                        </div>
                    </section>
                </div>
                <img src={sidebarDesktop} alt="bg-sidebar-desktop" className='z-0 col-start-1 row-start-1 h-full mo:hidden' />
                <img src={sidebarMobile} alt="bg-sidebar-mobile" className='de:hidden  mo:z-0 mo:col-start-1 mo:row-start-1 mo:w-fit' />
                <div className='flex flex-col de:col-span-2 de:mx-[10%] mo:mx-4 de:mt-10 mo:row-start-2 mo:col-start-1 mo:z-10 mo:bg-white mo:p-3 mo:rounded-xl mo:h-fit mo:pt-10'>
                    <h1 className='text-4xl mo:text-3xl font-bold text-marine-blue mb-2'>Personal info</h1>
                    <p className='text-lg mo:text-base text-gray-400 de:mb-10 font-medium'>Please provide your name, email address, and phone number.</p>
                    <div className='flex place-content-between'>
                        <p className='text-marine-blue font-semibold mb-1'>Name</p>
                        {plan.noError ? null : !plan.name && <p className='text-Strawberry-red font-medium mo:font-normal'>This field is required</p>}
                    </div>
                    <input onChange={plan.getName} type="text" placeholder='e.g. Stephen King' className={`border-[1px] focus:border-Purplish-blue outline-none border-Light-gray mb-4 p-3 mo:py-2 rounded-lg font-semibold ${plan.noError ? null : !plan.name && 'border-Strawberry-red'}`} />
                    <div className='flex place-content-between'>
                        <p className='text-marine-blue font-semibold mb-1'>Email Address</p>
                        {plan.noError ? null : !plan.email && <p className='text-Strawberry-red font-medium mo:font-normal'>This field is required</p>}
                    </div>
                    <input onChange={plan.getEmail} type="email" placeholder='e.g. stephenking@lorem.com' className={`border-[1px] focus:border-Purplish-blue outline-none border-Light-gray mb-4 p-3 mo:py-2 rounded-lg font-semibold ${plan.noError ? null : !plan.email && 'border-Strawberry-red'}`} />
                    <div className='flex place-content-between'>
                        <p className='text-marine-blue font-semibold mb-1'>Phone Number</p>
                        {plan.noError ? null : !plan.phone && <p className='text-Strawberry-red font-medium mo:font-normal'>This field is required</p>}
                    </div>
                    <input onChange={plan.getPhone} type="text" placeholder='e.g. +1 234 567 890' className={`border-[1px] focus:border-Purplish-blue outline-none border-Light-gray mb-4 p-3 mo:py-2 rounded-lg font-semibold ${plan.noError ? null : !plan.phone && 'border-Strawberry-red'}`} />
                    <Link to='select-plan' className='bg-marine-blue rounded-lg w-fit p-3 px-5 text-White font-semibold text-base self-end mt-auto mb-3  hover:bg-blue-500 mo:hidden' onClick={plan.checkInput}>
                        <button onClick={plan.checkInput}>Next Step</button>
                    </Link>
                </div>
                <div className='mo:bg-white mo:w-full mo:mt-auto mo:row-start-6 mo:h-16 de:hidden mo:flex mo:items-center mo:justify-end'>
                    <Link to='select-plan' className='bg-marine-blue rounded-lg w-fit p-3 px-5 text-White font-semibold text-base hover:bg-blue-500 mo:mr-4' onClick={plan.checkInput}>
                        <button onClick={plan.checkInput}>Next Step</button>
                    </Link>
                </div>
            </div>
        </main>
    )
}
