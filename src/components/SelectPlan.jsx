import React from 'react'
import { sidebarDesktop, sidebarMobile, arcade, advanced, pro } from '../assets'
import { Link } from 'react-router-dom'
import { usePlan } from './Plan'

export default function SelectPlan() {
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
                        <div className='bg-Light-blue rounded-full flex items-center justify-center w-12 h-12 de:mr-5'>
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
                <div className='flex flex-col col-span-2 de:mx-[10%] mo:mx-4 de:mt-10 mo:bg-white mo:h-fit mo:p-5 mo:rounded-xl mo:z-10'>
                    <h1 className='text-4xl mo:text-2xl font-bold text-marine-blue mb-2'>Select your plan</h1>
                    <p className='text-lg mo:text-base text-gray-400 mb-10 mo:mb-2 font-medium'>You have the option of monthly or yearly billing.</p>
                    <section className='de:grid de:grid-cols-3 de:gap-8'>
                        <div onClick={plan.clickedArcade} className={plan.arcade ? 'border-[1px] border-Purplish-blue bg-gray-100 rounded-lg p-5 mo:p-3 mo:flex mo:mb-3' : 'border-[1px] border-Light-gray rounded-lg p-5 mo:p-3 hover:border-Purplish-blue cursor-pointer mo:flex mo:mb-3'}>
                            <img src={arcade} alt="arcade icon" className='w-12 mo:mr-5' />
                            <div>
                                <p className='de:mt-14 text-marine-blue font-bold'>Arcade</p>
                                <p className='text-gray-400 font-medium'>{plan.yearly ? '$90/yr' : '$9/mo'}</p>
                                {plan.yearly && <p className='text-marine-blue font-medium text-base mo:text-sm'>2 monthes free</p>}
                            </div>
                        </div>
                        <div onClick={plan.clickedAdvanced} className={plan.advanced ? 'border-[1px] border-Purplish-blue bg-gray-100 rounded-lg p-5 mo:p-3 mo:flex mo:mb-3' : 'border-[1px] border-Light-gray rounded-lg p-5 mo:p-3 hover:border-Purplish-blue cursor-pointer mo:flex mo:mb-3'}>
                            <img src={advanced} alt="advanced icon" className='w-12 mo:mr-5' />
                            <div>
                                <p className='de:mt-14 text-marine-blue font-bold'>Advanced</p>
                                <p className='text-gray-400 font-medium'>{plan.yearly ? '$120/yr' : '$12/mo'}</p>
                                {plan.yearly && <p className='text-marine-blue font-medium text-base mo:text-sm'>2 monthes free</p>}
                            </div>
                        </div>
                        <div onClick={plan.clickedPro} className={plan.pro ? 'border-[1px] border-Purplish-blue bg-gray-100 rounded-lg p-5 mo:p-3 mo:flex' : 'border-[1px] border-Light-gray rounded-lg p-5 mo:p-3 hover:border-Purplish-blue cursor-pointer mo:flex'}>
                            <img src={pro} alt="pro icon" className='w-12 mo:mr-5' />
                            <div>
                                <p className='de:mt-14 text-marine-blue font-bold'>Pro</p>
                                <p className='text-gray-400 font-medium'>{plan.yearly ? '$150/yr' : '$15/mo'}</p>
                                {plan.yearly && <p className='text-marine-blue font-medium text-base mo:text-sm'>2 monthes free</p>}
                            </div>
                        </div>
                    </section>
                    <div className='flex w-full justify-center gap-5 de:mt-7 mo:mt-2 bg-gray-100 p-3 rounded-xl items-center'>
                        <p className={plan.yearly ? 'text-gray-400 font-bold' : 'text-marine-blue font-bold'}>Monthly</p>
                        <div onClick={plan.toggleYearly} className={`bg-marine-blue w-10 rounded-full h-[24px] z-0 flex items-center cursor-pointer ${plan.yearly ? 'justify-end' : 'justify-start'} p-1`}>
                            <div className='h-4 w-4 bg-white rounded-full z-10'></div>
                        </div>
                        <p className={plan.yearly ? 'text-marine-blue font-bold' : 'text-gray-400 font-bold'}>Yearly</p>
                    </div>
                    <div className='flex place-content-between  mt-auto mo:hidden'>
                        <Link to='/' className='rounded-lg w-fit p-3 px-5 text-gray-400 font-semibold text-base self-start  mt-auto mb-3' >
                            <button onClick={plan.resetInput} className='hover:text-marine-blue'>Go Back</button>
                        </Link>
                        <Link to='/add-on' className='bg-marine-blue rounded-lg w-fit p-3 px-5 text-White font-semibold text-base self-end mt-auto mb-3 hover:bg-blue-500' onClick={plan.btnAddon} >
                            <button onClick={plan.btnAddon}>Next Step</button>
                        </Link>
                    </div>
                </div>
                <div className='flex place-content-between de:mt-auto de:hidden mo:bg-white mo:w-full mo:row-start-6 mo:h-16 mo:self-end mo:items-center'>
                    <Link to='/' className='rounded-lg w-fit p-3 px-5 text-gray-400 font-semibold text-base mo:ml-4' >
                        <button onClick={plan.resetInput} className='hover:text-marine-blue'>Go Back</button>
                    </Link>
                    <Link to='/add-on' className='bg-marine-blue rounded-lg w-fit p-3 px-5 text-White font-semibold text-base hover:bg-blue-500 mo:mr-4' onClick={plan.btnAddon} >
                        <button onClick={plan.btnAddon}>Next Step</button>
                    </Link>
                </div>
            </div>
        </main>
    )
}
