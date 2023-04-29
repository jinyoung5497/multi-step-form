import React, { useState, useEffect, useRef } from 'react'
import { sidebarDesktop, sidebarMobile } from '../assets'
import { Link } from 'react-router-dom'
import { usePlan } from './Plan'

export default function Summary() {
    const plan = usePlan()
    
    
    return (
        <main className='bg-Light-gray h-screen flex de:items-center justify-center'>
            <div className='bg-White de:w-[1100px] de:h-[700px] de:my-20 grid de:grid-cols-3 de:p-5 de:rounded-3xl mo:grid-rows-6 mo:grid-cols-1 mo:p-0 mo:w-full mo:h-full mo:justify-items-center mo:bg-Light-gray'>
                <div className='flex de:flex-col z-20 col-start-1 row-start-1 de:p-9 de:mt-2 mo:w-fit mo:gap-5 mo:self-center'>
                    <section className='flex de:mb-8 z-10'>
                        <div className='border-Light-blue border-[1px] text-white rounded-full flex items-center justify-center w-12 h-12 de:mr-5'>
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
                        <div className='bg-Light-blue rounded-full flex items-center justify-center w-12 h-12 de:mr-5'>
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
                <div className='flex flex-col col-span-2 mx-[10%] de:mt-10 mo:mx-4 mo:bg-white mo:h-fit mo:p-5 mo:rounded-xl mo:z-10'>
                    <h1 className='text-4xl mo:text-2xl font-bold text-marine-blue mb-2'>Finishing up</h1>
                    <p className='text-lg text-gray-400 de:mb-10 mo:mb-2 font-medium mo:text-base'>Double-check everything looks OK before confirming.</p>
                    <section className='bg-slate-100 p-7 rounded-xl'>
                        <div className='flex items-center place-content-between'>
                            <div>
                                <div className='flex'>
                                    <p className='text-marine-blue font-bold text-lg'>{plan.arcade && 'Arcade '}{plan.advanced && 'Advanced '}{plan.pro && 'Pro '}</p>
                                    <p className='text-marine-blue font-bold text-lg'>{plan.yearly ? '(Yearly)' : '(Monthly)'}</p>
                                </div>
                                <Link to='/select-plan'>
                                    <button className='text-gray-400 underline font-medium hover:text-marine-blue' onClick={plan.reset}>Change</button>
                                </Link>
                            </div>
                            <p className='text-marine-blue font-bold text-lg'>{plan.yearly ? `$${plan.total}/yr` : `$${plan.total}/mo`}</p>
                        </div>
                        {plan.onlineService || plan.largerStorage || plan.customise ? <div className='mt-8 w-full border-b-[1px] border-Light-gray'></div> : null}
                        {plan.onlineService && <div className='flex items-center place-content-between mt-5'>
                            <p className='text-gray-400 font-medium '>Online service</p>
                            <p className='text-marine-blue text-lg font-medium'>{plan.yearly ? '$10/yr' : '$1/mo'}</p>
                        </div>}
                        {plan.largeStorage && <div className='flex items-center place-content-between mt-5'>
                            <p className='text-gray-400 font-medium '>Larger storage</p>
                            <p className='text-marine-blue text-lg font-medium'>{plan.yearly ? '$20/yr' : '$2/mo'}</p>
                        </div>}
                        {plan.customise && <div className='flex items-center place-content-between mt-5'>
                            <p className='text-gray-400 font-medium '>Customisable profile</p>
                            <p className='text-marine-blue text-lg font-medium'>{plan.yearly ? '$20/yr' : '$2/mo'}</p>
                        </div>}
                    </section>
                    <div className='flex items-center place-content-between mt-5 mx-7'>
                        <p className='text-gray-400 font-medium '>{plan.yearly ? 'Total (per year)' : 'Total (per month)'}</p>
                        <p className='text-Purplish-blue font-bold text-xl'>{plan.yearly ? `+$${plan.total + plan.addon}/yr` : `+$${plan.total + plan.addon}/mo`}</p>
                    </div>

                    <div className='flex place-content-between  mt-auto mo:hidden'>
                        <Link to='/add-on' className='rounded-lg w-fit p-3 px-5 text-gray-400 font-medium text-base self-start  mt-auto mb-3' >
                            <button onClick={plan.reset} className='hover:text-marine-blue'>Go Back</button>
                        </Link>
                        <Link to='/thanks'>
                            <button className='bg-Purplish-blue rounded-lg w-fit p-3 px-5 text-White font-medium text-base self-end mt-auto mb-3 hover:bg-blue-600'>Confirm</button>
                        </Link>
                    </div>
                </div>
                <div className='flex place-content-between de:mt-auto de:hidden mo:bg-white mo:w-full mo:row-start-6 mo:h-16 mo:self-end mo:items-center'>
                    <Link to='/add-on' className='rounded-lg w-fit p-3 px-5 text-gray-400 font-semibold text-base mo:ml-4' >
                        <button onClick={plan.reset} className='hover:text-marine-blue'>Go Back</button>
                    </Link>
                    <Link to='/thanks'>
                        <button className='bg-Purplish-blue rounded-lg w-fit p-3 px-5 text-White font-semibold text-base mo:mr-4 hover:bg-blue-600'>Confirm</button>
                    </Link>
                </div>

            </div>
        </main>
    )
}