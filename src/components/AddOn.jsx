import React from 'react'
import { sidebarDesktop, sidebarMobile, checkmark } from '../assets'
import { Link } from 'react-router-dom'
import { usePlan } from './Plan'

export default function AddOn() {
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
                        <div className='bg-Light-blue rounded-full flex items-center justify-center w-12 h-12 de:mr-5'>
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
                <div className='flex flex-col col-span-2 mx-[10%] de:mt-10 mo:mx-4 mo:bg-white mo:h-fit mo:p-5 mo:rounded-xl mo:z-10'>
                    <h1 className='text-4xl mo:text-2xl font-bold text-marine-blue mb-2'>Pick add-ons</h1>
                    <p className='text-lg text-gray-400 de:mb-10 mo:mb-2 font-medium mo:text-base'>Add-ons help enhance your gaming experience.</p>
                    <div className='flex flex-col'>
                        <section onClick={plan.getOnlineService} className={plan.onlineService ? 'flex items-center border-[1px] border-Purplish-blue p-5 rounded-lg mb-5 bg-gray-100 cursor-pointer mo:p-3' : 'flex items-center border-[1px] border-Light-gray p-5 rounded-lg mb-5 hover:border-Purplish-blue cursor-pointer mo:p-3'}>
                            <div className={plan.onlineService ? 'bg-Purplish-blue w-6 h-6 flex items-center justify-center rounded-sm p-1 ml-1 mr-8 mo:mr-4' : 'border-[1px] border-Light-gray w-6 h-6 flex items-center justify-center rounded-sm p-1 ml-1 mr-8 mo:mr-4'}>
                                {plan.onlineService && <img src={checkmark} alt="check" className='w-full' />}
                            </div>
                            <div>
                                <p className='font-bold text-marine-blue text-lg mo:text-base'>Online service</p>
                                <p className='text-gray-400 mo:text-sm'>Access to multiplayer games</p>
                            </div>
                            <p className='ml-auto mr-2 text-Purplish-blue text-base font-medium mo:text-sm'>{plan.yearly ? '+$10/yr' : '+$1/mo'}</p>
                        </section>
                        <section onClick={plan.getLargeStorage} className={plan.largeStorage ? 'flex items-center border-[1px] border-Purplish-blue p-5 rounded-lg mb-5 bg-gray-100 cursor-pointer mo:p-3' : 'flex items-center border-[1px] border-Light-gray p-5 rounded-lg mb-5 hover:border-Purplish-blue cursor-pointer mo:p-3'}>
                            <div className={plan.largeStorage ? 'bg-Purplish-blue w-6 h-6 flex items-center justify-center rounded-sm p-1 ml-1 mr-8 mo:mr-4' : 'border-[1px] border-Light-gray w-6 h-6 flex items-center justify-center rounded-sm p-1 ml-1 mr-8 mo:mr-4'}>
                                {plan.largeStorage && <img src={checkmark} alt="check" className='w-full' />}
                            </div>
                            <div>
                                <p className='font-bold text-marine-blue text-lg mo:text-base'>Large storage</p>
                                <p className='text-gray-400 mo:text-sm'>Extra 1TB of cloud save</p>
                            </div>
                            <p className='ml-auto mr-2 text-Purplish-blue text-base font-medium mo:text-sm'>{plan.yearly ? '+$20/yr' : '+$2/mo'}</p>
                        </section>
                        <section onClick={plan.getCustomise} className={plan.customise ? 'flex items-center border-[1px] border-Purplish-blue p-5 rounded-lg mb-5 bg-gray-100 cursor-pointer mo:p-3' : 'flex items-center border-[1px] border-Light-gray p-5 rounded-lg mb-5 hover:border-Purplish-blue cursor-pointer mo:p-3'}>
                            <div className={plan.customise ? 'bg-Purplish-blue w-6 h-6 flex items-center justify-center rounded-sm p-1 ml-1 mr-8 mo:mr-4' : 'border-[1px] border-Light-gray w-6 h-6 flex items-center justify-center rounded-sm p-1 ml-1 mr-8 mo:mr-4'}>
                                {plan.customise && <img src={checkmark} alt="check" className='w-full' />}
                            </div>
                            <div>
                                <p className='font-bold text-marine-blue text-lg mo:text-base'>Customisable profile</p>
                                <p className='text-gray-400 mo:text-sm'>Custom theme on your profile</p>
                            </div>
                            <p className='ml-auto mr-2 text-Purplish-blue text-base font-medium mo:text-sm'>{plan.yearly ? '+$20/yr' : '+$2/mo'}</p>
                        </section>
                    </div>

                    <div className='flex place-content-between mt-auto mo:hidden'>
                        <Link to='/select-plan' className='rounded-lg w-fit p-3 px-5 text-gray-400 font-semibold text-base self-start  mt-auto mb-3' >
                            <button className='hover:text-marine-blue'>Go Back</button>
                        </Link>
                        <Link to='/summary' className='bg-marine-blue rounded-lg w-fit p-3 px-5 text-White font-semibold text-base self-end mt-auto mb-3 hover:bg-blue-500' onClick={plan.calculateSum}>
                            <button>Next Step</button>
                        </Link>
                    </div>
                </div>
                <div className='flex place-content-between de:mt-auto de:hidden mo:bg-white mo:w-full mo:row-start-6 mo:h-16 mo:self-end mo:items-center'>
                    <Link to='/select-plan' className='rounded-lg w-fit p-3 px-5 text-gray-400 font-semibold text-base mo:ml-4' >
                        <button className='hover:text-marine-blue'>Go Back</button>
                    </Link>
                    <Link to='/summary' className='bg-marine-blue rounded-lg w-fit p-3 px-5 text-White font-semibold text-base hover:bg-blue-500 mo:mr-4' onClick={plan.calculateSum}>
                        <button>Next Step</button>
                    </Link>
                </div>
            </div>
        </main>
    )
}