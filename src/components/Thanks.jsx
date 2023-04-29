import React from 'react'
import { sidebarDesktop, sidebarMobile, thank } from '../assets'
import { usePlan } from './Plan'

export default function Thanks() {
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
                
                <div className='flex flex-col items-center justify-center col-span-2   mx-[10%] de:mt-10 mo:mx-4 mo:bg-white mo:h-fit mo:p-2 mo:rounded-xl mo:z-10 mo:py-16'>
                    <img src={thank} alt="thanks icon" />
                    <h1 className='text-marine-blue text-4xl mo:text-3xl font-bold mt-8 mb-4'>{`Thanks ${plan.name}!`}</h1>
                    <p className='mx-16 text-center text-gray-400 font-medium mo:font-normal mo:text-[16px]'>Thanks for confirming your subscription! We hope you hav fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
                </div>
            </div>
        </main>
    )
}