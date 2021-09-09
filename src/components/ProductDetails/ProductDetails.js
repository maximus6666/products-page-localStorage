import React, { useState } from "react";
import './productDetails.css'
import ProductCommentForm from "../ProductCommentForm/ProductCommentForm";
import Modal from "../Modal/Modal";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductComment from "../ProductComment/ProductComment";
import { Box, Button, Heading, Image, Text } from "grommet";
import { Link } from 'react-router-dom';

const ProductDetails = (props) => {
  const [editModalOpen, setEditModalOpen] = useState(false)
  const products = useSelector(state => state.products)

   // Get current product details 
  const { id }  = useParams();
  const productDetails = products.find((el) => el.id === id);

  if (!productDetails) {
    return <div className="error">Product not found</div>
  }

  const {name, count, imageUrl, size, weight, comments} = productDetails;
  const  {width, height} = size;
   
  const handleOpen = () => {
    setEditModalOpen(true);
  };

  return (
      <Box
        align='center'
      >
        <Box
          alignSelf='center'
          justify='center'
          direction='row'
        >
          <Image 
            src={imageUrl}
            alignSelf='center'
            width='75%'
          />
        </Box>
        <Heading 
          alignSelf='center'
        >
          Name: {name}
        </Heading>
        <Text alignSelf='center'>Count: {count}</Text>
        <Box 
          alignSelf='center'
          justify='center'
          border='horizontal'
          pad='medium'
          margin='15px'
        >
          <Text margin={{bottom: '10px'}}>Details:</Text>
          <Text>Width: {width} cm</Text>
          <Text>Height: {height} cm</Text>
          <Text>Weight: {weight} g</Text>
        </Box>
        <Box direction='row' alignSelf='center'>
          <Button
            onClick={handleOpen}
            primary
            label='Edit'
            alignSelf='center'
            margin='10px'
          />
          <Link to='/'>
            <Button
              secondary
              label='Back'
              alignSelf='center'
              margin='10px'
            />
          </Link>
        </Box>
        <Modal 
          open={editModalOpen}
          productId={id}
          productName={name}
          productImgUrl={imageUrl}
          productCount={count}
          productWeight={weight}
          productWidth={width}
          productHeight={height}
          comments={comments}
          onClose={() => setEditModalOpen(false)}
       />
        <ProductCommentForm 
          productId={id}/>
        <Box 
          width='100%'
          align='center'
          justify='center'
          >
          {
            comments && comments.length
              ? comments.reverse().map((el, i) => <ProductComment key={el.id} color={i % 2 ? 'light-1' : 'light-3' }{...el} />)
              : 'No comments'
          }
        </Box>
      </Box>
  )
}

export default ProductDetails
