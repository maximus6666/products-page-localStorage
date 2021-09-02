import React, { useState } from "react";
import { useDispatch } from "react-redux";
import './ProductCommentForm.css'
import { ADD_COMMENT } from "../../redux/actions";
import { Button, Paragraph, TextArea } from "grommet";

const ProductComment = (props) => {
  const productId = props.productId;
  const [comment, setComment] = useState('')
  const dispatch = useDispatch()

  const productComment = {
    id: Date.now(),
	  productId,
	  description: comment,
	  date: new Date().toLocaleString()
  }

  const handleOnClick = () => {
    if(!comment) {return}
    dispatch(ADD_COMMENT(productId, productComment))
    setComment('')
  }

  return(
    <>
      <Paragraph>Comments:</Paragraph>
      <TextArea 
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        className='comment-text-area'
        placeholder='Write your comment!'

      />
      <Button 
        margin='15px'
        label='Add comment'
        secondary
        color='neutral-1'
        onClick={handleOnClick}
      />
    </>
  )
}

export default ProductComment
