import { ReactElement } from 'react';
import Layout from '../../containers/Layout/Layout';
import styles from '../../styles/SingleImagePage.module.css'
import {useState, useEffect} from 'react'
import axios from 'axios'
import highlights from '../../reduxstore/reducers/highlights';
import FullScreenPicture from '../../components/FullscreenPicture';
import PaymentLoginForm from '../../components/PaymentLoginForm'
import Card from '../../components/Card'

type Picture = {
    title?: string
    description?: string
    _id?: string
    highlights?: []
    images?: {}
    tags?: []
    price?: number
}

const SingleImagePage = () => {
    const [picture, setPicture] = useState<any>({})

    const [openFullPicture, setOpenFullPicture] = useState<boolean>(false)   

    const [openPaymentLoginForm, setOpenPaymentLoginForm] = useState<boolean>(false)

    useEffect(() => {
        const getPicData = async () => {
            try {
                const res = await axios.get('http://localhost:8080/image/621ca3b08695feee8addbb2d')
                setPicture(res.data)
            } catch (error) {
                console.log(error)                
            }
        }
        getPicData()
    }, [])    

    console.log(picture)

        const bigPictureAndThumbPic = picture['images']
        const thumbPicture = bigPictureAndThumbPic&&bigPictureAndThumbPic.thumbUrl

        const pictureHighlights = picture['highlights']

        console.log('thumbPic', thumbPicture);

    return (
        <div className="h-max">
            {openFullPicture && <FullScreenPicture setOpenFullPicture={setOpenFullPicture} setOpenPaymentLoginForm={setOpenPaymentLoginForm} />}    
            {openPaymentLoginForm && <PaymentLoginForm setOpenPaymentLoginForm={setOpenPaymentLoginForm} />}        
            <div className=''>
                <div className='flex relative mobile:mx-10 mobile:  mx-24 justify-between py-2 rounded-md'>
                    <div className=' mobile:mt-0 text-black'>
                        <span className="px-2 h-8 py-2 rounded-full text-white 
                            bg-green-600 font-semibold text-xs flex align-center 
                            w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                                FEATURED PRODUCT                            
                        </span>
                        <h2 className='text-lg mt-4 mobile:mt-0'>{picture.title}</h2>
                        <h4 className='text-gray-400 mt-4 mobile:mt-0'>80+ colorfull hands with devices </h4>
                    </div>
                    <div className=' mobile:mt-40 mt-20 flex mobile:items-center '>
                        <button className=" sm:hidden lg:block mobile:hidden md:h-12 md:w-16 bg-gray-500 hover:bg-gray-600 py-0 px-4 mr-2 ml-2 text-white font-bold rounded ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                            </svg>
                            <p >20</p>
                        </button>
                        <button className="h-12 mobile:h-10  bg-gray-500 text-white hover:bg-gray-600 font-bold py-0 my-auto px-4 rounded mr-2 ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mobile:h-3 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            <p className='mobile:text-xs'>147</p>
                        </button>
                        <button onClick={() => setOpenFullPicture(true)} className="md:hidden mobile:hidden lg:block sm:hidden h-12 bg-[#2f88e0] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2 ml-2 ">
                            PREVIEW
                        </button>
                        <button onClick={() => setOpenPaymentLoginForm(true)} className="h-12 mobile:h-10 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2 ml-2 mobile:w-40">
                            ADD TO CART {picture.price}
                        </button>
                    </div>
                </div>

            </div>
            <div className='h-max w-creen flex-row ' >
                <div>                
                    <div className='flex flex-wrap justify-center mobile:pt-0 '>
                        <img className='mobile:mt-2 lg:w-5/6 lg:ml-8 lg:mr-8 ml-4 mr-4 mt-4 md:w-3/4 sm:3/4 rounded-md mobile:w-10/12' 
                        src='https://images.ui8.net/uploads/1_1633605327852.png' alt="" />                        
                    </div>
                </div>
                <div >
                    <div className='bg-white shadow-xl border-2 border-black-200 md:w-3/4 md:mx-auto mt-10 rounded-md sm:mx-auto ml-40 mr-40 lg:w-10/12 lg:ml-30 mobile:w-10/12 mobile:mx-auto'>
                        <div className='ml-40 mr-40 pt-6 pb-6 mobile:ml-4 mobile:mr-4'>
                            <p className='text-black font-semibold mx-auto'>Overview</p>
                            <p>
                                {picture.description}
                            </p>
                        </div>
                        <div className='pb-6 ml-40 mr-40 mobile:ml-4 mobile:mr-4' >
                            <p className='text-black font-semibold'>Highlight</p>
                            <div className='flex flex-wrap '>
                                {pictureHighlights&&pictureHighlights.map(highlight => (
                                    <span key={highlight} className='w-2/5 flex mt-2 mb-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="font-bold text-blue-500 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <p>{highlight}</p>
                                </span>       
                                ))}                   
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='h-max w-creen sm:text-sm pb-10 '>
                    <div className='md:pb-10 bg-white border-2 border-black-200 shadow-xl w-5/6 md:w-3/4 md:mx-auto rounded-md sm:mx-auto ml-40 mr-40 lg:w-10/12 lg:ml-30 mt-10 mobile:hidden'>
                        <div className='flex justify-between ml-40 mr-40 pt-10'>
                            <p>2 Comments</p>
                            <div className='flex'>
                                <a className='mr-4' href="">Oldest</a>
                                <a href="">Newest</a>
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex ml-40 mt-10'>
                                <img className='rounded-full h-12 w-12' src="https://i.pinimg.com/originals/79/20/8a/79208ac14cd0682d093ca381d2a9a95f.jpg" alt="" />
                                <div className='ml-4'>
                                    <h2 className='font-bold'>Meo Meo</h2>
                                    <p>Well done</p>
                                    <p>5 months ago</p>
                                </div>

                            </div>
                            <div className='flex ml-40 mt-10'>
                                <img className='rounded-full h-12 w-12' src="https://i.pinimg.com/736x/8a/ed/fe/8aedfe469628f7427d2214ed966deaa2.jpg" alt="" />
                                <div className='ml-4'>
                                    <h2 className='font-bold'>Meo Meo</h2>
                                    <p>Well done</p>
                                    <p>5 months ago</p>
                                </div>

                            </div>
                        </div>
                        <div className='ml-40 mt-10 pb-10 relative'> 
                            <form className='flex-col flex' >
                                <input type="text" className='h-20 w-5/6 ' placeholder='Leave a comment, be nice' />
                                <button className="absolute lg:right-40 md:right-20 right-40 mt-4 top-20 w-20 bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2 ml-2">Post It</button>
                            </form>
                        </div>
                        
                       
                    </div>
                </div>

            </div>
        </div>
    )

}


SingleImagePage.getLayout = function getLayout(page: ReactElement): JSX.Element {
    return <Layout>{page}</Layout>;
  };
  

export default SingleImagePage
