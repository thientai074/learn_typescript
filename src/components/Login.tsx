import React from 'react'
import { MinusIcon, XIcon } from '@heroicons/react/solid'
import { CreditCardIcon } from '@heroicons/react/solid'
import {Dispatch, SetStateAction} from 'react'

interface PaymentLoginFormType {
  setOpenPaymentLoginForm: Dispatch<SetStateAction<boolean>>
}

const PaymentLoginForm = ({setOpenPaymentLoginForm}: PaymentLoginFormType ) => {
  return (
    <div className="top-0 right-0 left-0 bottom-0 w-screen z-50 bg-[#5b52d7] lg:bg-[#353535]  fixed">
        <div className='mt-24 lg:h-4/5 lg:w-3/5 lg:bg-[#5b52d7] lg:flex ml-6 mr-6 lg:absolute lg:right-10'>
            <div className=' lg:bg-white'>
                {/* H1 */}
                <div className='flex lg:w-2/5 justify-between '>
                  <h2 className='font-bold text-lg text-white lg:hidden'>Review your order</h2>
                  <button className='' onClick={() => setOpenPaymentLoginForm(false)} >
                    <XIcon className='h-6 text-white lg:absolute lg:right-10 lg:top-4' />
                  </button>
                </div>
                {/* Image */}
                <div className='flex lg:flex-col lg:w-80 lg:pb-10 bg-white rounded-md mt-4'>
                  <img className='w-20 lg:w-72 lg:mx-auto  my-2 mx-2 rounded-md' src="https://images.ui8.net/uploads/1_1633605327852.png" alt="" />
                  <div className='relative mt-4 lg:ml-4'>
                    <h1 className='font-semibold'>HandyMocuo</h1>
                    <div className='flex items-center lg:mt-2'>
                      <p className='text-sm font-semibold mr-4'>$48</p>
                      <p className='text-gray-400 text-xs'>Standal license</p>
                    </div>
                  </div>
                  <button className='absolute lg:hidden right-8 top-44 rounded-full bg-red-500 lg:top-10 lg:right-{500}'>
                    <MinusIcon className='text-white h-6' />
                  </button>
                </div>                
            </div>
            {/* Div Form */}
            <div className='mt-10 lg:mx-6'>
                {/* Form */}
                <div className='flex justify-between'>
                  <h1 className='hidden lg:block  lg:text-white lg:text-lg'>Total 200$</h1>
                  <div>
                  <h1 className='font-semibold text-gray-300'>Pay with</h1>
                  <div className='flex'>
                    <button className='flex rounded-md bg-red-500 h-8 items-center px-2'>
                      <CreditCardIcon className='h-6 text-gray-400 mr-2' />  
                      <p>CREDIT CARD</p>
                    </button>
                    <button className='ml-2 shadow-inner rounded-md bg-red-500 h-8 items-center px-2'>PAYPAL</button>
                  </div> </div>                 
                </div>
                <div className='mt-8 rounde'>
                  {/* Form */}
                    <form className='rounded-md lg:text-xs ' >
                      <input required placeholder='Email Address' type="text" className='w-full  rounded-t h-14 border-2 border-gray-200' />
                      <input required placeholder='Full Name' type="text" className='w-full  h-14 border-2 border-gray-200' />
                      <input required placeholder='Password' type="text" className='w-full  h-14 border-2 border-gray-200' />
                      <input required placeholder='Card Number' type="text" className='w-full  h-14 border-2 border-gray-200' />
                      <div className='flex'>
                        <div className='flex'>
                          <input type="number" className='w-16 border-2  border-gray-200 rounded-bl' placeholder='MM' />
                          <input type="number" className='w-16 border-2  border-gray-200' placeholder='YY' />
                        </div>
                        <input type="text" className='w-20 border-2 border-gray-200 ' placeholder='CVC' />
                        <div className='flex w-full rounded-b'>
                          <input type="checkbox" className='h-full w-full lg:w-full border-2 border-gray-200 rounded-br'  />                          
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className=' mt-6 hidden lg:flex lg:justify-between items-center'>
                    <p className='text-white'>Your card will be charged $0</p>
                    <button className='rounded-md text-white font-bold bg-green-600 lg:h-10 lg:px-2'>PAY & DOWNLOAD</button>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentLoginForm
