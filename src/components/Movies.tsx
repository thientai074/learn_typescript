import { XIcon } from "@heroicons/react/solid"
import { ShoppingCartIcon } from "@heroicons/react/solid"
import {Dispatch, SetStateAction} from 'react'

interface FullScreenPictureType {
    setOpenFullPicture: Dispatch<SetStateAction<boolean>>
    setOpenPaymentLoginForm: Dispatch<SetStateAction<boolean>>
}
const FullScreenPicture = ({setOpenFullPicture, setOpenPaymentLoginForm}: FullScreenPictureType) => {
    return (
        <div className="h-screen top-0 right-0 left-0 bottom-0 w-screen z-50 bg-[#2a2a2a] fixed flex">
            <img className="h-full w-3/5 md:mt-24 md:w-4/5 md:h-4/5  mx-auto" src="https://images.ui8.net/uploads/1_1633605327852.png" alt="" />
            <div className='relative md:mt-20 md:right-0'>
               <button onClick={() => setOpenFullPicture(false)} className="absolute lg:top-10 lg:right-10 md:right-4 md:top-10">
                   <XIcon className="text-white h-10 " />
               </button>
               <button className="absolute lg:top-40 lg:right-10 md:right-4 md:top-40">
                    <ShoppingCartIcon onClick={() => {setOpenFullPicture(false); setOpenPaymentLoginForm(true)}} className="text-white h-10" />
               </button>
            </div>
        </div>
    )
}

export default FullScreenPicture
