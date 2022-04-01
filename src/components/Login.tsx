import { useState, FormEvent} from 'react'
import { useEffect} from 'react'
import SingleCommentDetailPage from '../SingleCommentDetailPage'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, getCommentsInThisImages } from '../../reduxstore/reducers/commentDetailPage'
import { RootState } from '../../reduxstore'
import Input from '../Input';
import { CommentFormType } from '../../types/comment';

const CommentForm = ({urlImageLink, image, objectId}: CommentFormType) => {  
    const userComments = useSelector((state: RootState) => state.comments.allComments)
    
    const [comment, setComment] = useState<string>('')       

    const commentForm = {
        content: comment, 
        objectId: image._id
    }     

    const dispatch = useDispatch()  
  
    useEffect(() => {
        if(objectId) {
        dispatch(getCommentsInThisImages(objectId))      
        }        
    }, [dispatch, objectId])

    const handleSubmitComment = (event : FormEvent<HTMLFormElement>) => {        
        event.preventDefault()                 
        dispatch(addComment(commentForm))
        setComment('')      
    } 

    const commentLength = (userComments.length > 1) 

        ? ( `${userComments.length} comments`) 
        : (userComments.length === 1) 
        ? ('1 comment') 
        : ''

    const commentTitle = (userComments.length === 0) 
        ? ('Be the first to join the discussion')
        : ''
    
    return (
        <div className='bg-white border-2 border-gray-200 mt-10 rounded-md justify-center px-32 lg:px-56 h-[420px] overflow-y-scroll my-auto '>
            <div className='flex  pt-10'>
                <div className='mx-auto'>
                    <p className='font-semibold'>
                        {commentTitle}
                    </p>                    
                </div>
                <p>
                {commentLength}
                </p>
                
            </div>
            {urlImageLink && (
                <div >
                    {userComments && userComments.map(userComment => {   
                        return(                    
                            <SingleCommentDetailPage urlImageLink={urlImageLink} 
                            userComment={userComment}                            
                            key={userComment._id}  />   
                        )}
                     )}           
                </div>
            )}
            <div className='mt-10 relative '> 
                <form className='flex-col flex' 
                onSubmit={handleSubmitComment} 
                >
                    <Input 
                        type="textarea"                       
                        placeHolder='Leave a comment, be nice'
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        rows={4}                      
                    />
                    <button 
                        className=" font-sans mt-4 top-20 w-20 h-12 self-end font-medium 
                        text-white bg-indigo-600  px-2 rounded "                           
                        type='submit'                                        
                        >
                            Post It
                    </button>
                </form>
            </div>                    
        </div>
  )
}

export default CommentForm
    



 

