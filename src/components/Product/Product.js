import React from "react"
import { useDispatch,} from "react-redux";
import { DELETE_PRODUCT } from "../../redux/actions";
import './product.css';
import { Link, useRouteMatch } from "react-router-dom";
import { Box, Button, Image } from "grommet";

const Product = (props) => {
  const {name, count, imageUrl, id} = props;
  const dispatch = useDispatch();

  const handleDeleteProductButton = () => {
    const approve = window.confirm(`Are you realy want to delete product ${name}?`);
    if (approve) {
      dispatch(DELETE_PRODUCT(id))
    }
  }

  // let { path, url } = useRouteMatch()

     
  return (
    <Box 
      pad='xsmall'
      basis='1/3'
      direction='column'
      background='white'
      border='all'
      justify='between'
    >
      <Box>
      <h2 className='product-title'>Name: {name}</h2>
      <h3>Count: {count}</h3>
      </Box>
      <Box height='medium'  >
      <Image 
        src={imageUrl}
        fit='contain'
        width='100%'
      />
      </Box>
      <Box 
        align='center'
        justify='between'
        direction='row'
        margin={{top: '10px'}}

      >
        <Link to={`${id}`}>
          <Button 
            secondary
            label='Details'
            size='small'
            color='neutral-3'
          />
        </Link>
          <Button 
            secondary
            label='Delete product'
            size='small'
            color='status-error'
            onClick={handleDeleteProductButton}
          >
          </Button>
      </Box>      
    </Box>
  )
}

export default Product
