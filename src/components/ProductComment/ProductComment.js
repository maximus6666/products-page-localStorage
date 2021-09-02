import { Box, Button, Paragraph} from "grommet";
import React from "react";
import { useDispatch } from "react-redux";
import { DELETE_COMMENT } from "../../redux/actions";

const ProductComment = (props) => {
  const productId = props.productId;
  const dispatch = useDispatch()

  return (
  <>
    <Box
      direction='row'
      width='100%'
      justify='between'
      background={props.color}
      pad='medium'
    >
      <Box>
        <Paragraph color='neutral-3'>
          {props.date}.
        </Paragraph>
        <Paragraph margin='0'>
          {props.description}
        </Paragraph>
      </Box>
      <Button 
        alignSelf='center'
        onClick={() => {dispatch(DELETE_COMMENT(productId, props.id))}}
        label='Delete'
        secondary
        color='status-error'
        size='small'
    />
  </Box>
  </>
  )
}

export default ProductComment
