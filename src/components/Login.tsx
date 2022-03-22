import { useState, FormEventHandler, FormEvent} from 'react'
import axios from 'axios'
import { useRouter} from 'next/router'



const CommentForm = () => {

    const [comment, setComment] = useState('')

    const handleSubmitComment = async (event : FormEvent<HTMLFormElement>) => {
        
        event.preventDefault()
        
        console.log("E: ", comment);
        try {
            await axios.post('http://localhost:4000/comment',{content: comment}, {withCredentials: true, headers:{"Access-Control-Allow-Credentials":true}} )
         
        } catch (error) {
            console.log(error)
        }
    }


  return (
        <div className='bg-white border-2 border-gray-200 mt-10 rounded-md justify-center px-20'>
            <div className='flex justify-between pt-10'>
                <p className='font-sans'>2 Comments</p>
                <div className='flex'>
                    <a className='mr-4' href="">Oldest</a>
                    <a href="">Newest</a>
                </div>
            </div>
            <div className=''>
                <div className='flex mt-10 border-b-2 border-gray-200 pb-6'>
                    <img className='rounded-full h-12 w-12' src="https://i.pinimg.com/originals/79/20/8a/79208ac14cd0682d093ca381d2a9a95f.jpg" alt="" />
                    <div className='ml-4'>
                        <h2 className='font-bold'>Meo Meo</h2>
                        <p>Well done</p>
                        <p>5 months ago</p>
                    </div>

                </div>
                <div className='flex mt-10 border-b-2 border-gray-200 pb-6'>
                    <img className='rounded-full h-12 w-12' src="https://i.pinimg.com/736x/8a/ed/fe/8aedfe469628f7427d2214ed966deaa2.jpg" alt="" />
                    <div className='ml-4'>
                        <h2 className='font-bold'>Meo Meo</h2>
                        <p>Well done</p>
                        <p>5 months ago</p>
                    </div>

                </div>
                <div className='flex mt-10 '>
                    <img className='rounded-full h-12 w-12' src="http://2.bp.blogspot.com/-hZqFkNjxxkQ/UbqN4w4HF2I/AAAAAAAABdI/SU0RTS5QJBk/s1600/cho.jpg" alt="" />
                    <div className='ml-4'>
                        <h2 className='font-bold'>Meo Meo</h2>
                        <p>Well done</p>
                        <p>5 months ago</p>
                    </div>

                </div>
            </div>
            <div className='mt-10 pb-10 relative '> 
                <form className='flex-col flex' onSubmit={(event) => handleSubmitComment(event)} >
                    <input 
                        type="text" 
                        className='h-20 w-full border-2 border-gray-200' 
                        placeholder='Leave a comment, be nice'
                        onChange={e => setComment(e.target.value)} />
                    <button 
                        className=" font-sans mt-4 top-20 w-20 h-12 self-end font-medium 
                        text-white bg-indigo-600 py-0 px-2 rounded "
                        // onClick={(event) => handleSubmitComment(event)}
                        >
                            Post It
                    </button>
                </form>
            </div>                    
        </div>
  )
}

export default CommentForm
