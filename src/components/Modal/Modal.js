import React, { useState } from 'react';
import { useDispatch, } from 'react-redux';
import './modal.css';
import { ADD_PRODUCT, EDIT_PRODUCT } from '../../redux/actions';
import { Box, Layer, TextInput, FormField, Form, Button } from 'grommet';

export default function SimpleModal(props) {
  
  const [productName, setProductName] = useState(props.productName || '');
  const [productImgUrl, setProductImgUrl] = useState(props.productImgUrl || '');
  const [productCount, setProductCount] = useState(props.productCount || 1);
  const [productWeight, setProductWeight] = useState(props.productWeight || 1);
  const [productWidth, setProductWidth] = useState(props.productWidth || 1);
  const [productHeight, setProductHeight] = useState(props.productHeight || 1);

  const dispatch = useDispatch();

  const handleClose = () => {
    if (props.onClose) {
      props.onClose();
    } 
  };
  const addProduct = () => {
    const validInputs = productName && productImgUrl.startsWith('http') 
    && productWeight && productWidth && productHeight;
    
    if (validInputs) {
      const productValues = {
        id: Date.now().toString(),
        imageUrl: productImgUrl,
        name: productName[0].toUpperCase() + productName.slice(1),
        count: +productCount,
        size: {
          width: productWidth,
          height: productHeight
        },
        weight: productWeight,
        comments:[]
      }
      dispatch( ADD_PRODUCT(productValues));
      handleClose();
    }else {
      alert('Please, fill the form. (Product Img Url must starts with "http")')
    }
  }
  
  const editProduct = () => {
    const validInputs = productName && productImgUrl.startsWith('http') 
    && productWeight && productWidth && productHeight;
    
    if (validInputs) {
      const productValues = {
        id: props.productId,
        imageUrl: productImgUrl,
        name: productName[0].toUpperCase() + productName.slice(1),
        count: +productCount,
        size: {
          width: productWidth,
          height: productHeight
        },
        weight: productWeight,
        comments: props.comments
      }
      dispatch( EDIT_PRODUCT(productValues));
      handleClose()
    
    }else {
      alert('Please, fill the form. (Product Img Url must starts with "http")')
    }
  }

  const saveButton = props.productName  
    ? <Button margin='15px' size='large' primary label='Edit' color='neutral-1' onClick={editProduct}/>
    : <Button margin='15px' size='large' primary label='Add' color='neutral-1' onClick={addProduct}/>;
  
  return (
    props.open && <Layer onClickOutside={() => props.onClose()}>
        <Box 
          align='center'
          justify='center'
        >
          <Form>
            <FormField name="name" htmlFor="name" label="Name:" margin={{top: '10px'}}>
              <TextInput 
                id='name'
                size='small'
                pad='100px'
                placeholder='Enter name of product'
                onChange={(event) => setProductName(event.target.value)}
                value={productName}
              />
            </FormField>
            <FormField name="img" htmlFor="img" label="Image url:" margin={{top: '10px'}}>
              <TextInput 
                id='img'
                size='small'
                placeholder='Enter img url of product'
                onChange={(event) => setProductImgUrl(event.target.value)}
                value={productImgUrl}
              />
            </FormField>      
            <Box 
              direction='row'
              pad='10px'
              margin='20px'
            >
              <Box
                basis='1/2'
                align='start'
                justify='end'
                pad='20px'
                margin='20px'
              >
                <span >Enter count of product</span>
                <TextInput 
                  id='count'
                  type='number'
                  min="1" max="100000"
                  onChange={(event) => setProductCount(event.target.value)}
                  value={productCount}
                />
                <span >Enter weight (g)</span>
                <TextInput 
                  id='weight' 
                  type='number'
                  min="1" max="10000"
                  onChange={(event) => setProductWeight(event.target.value)}
                  value={productWeight}
                />
              </Box>
              <Box
                align='end'
                justify='end'
                basis='1/2'
                pad='20px'
                margin='20px'
              >
                <label htmlFor='width'>Enter width (cm)</label>
                <TextInput 
                  id='width' 
                  type='number'
                  min="1" max="10000"
                  onChange={(event) => setProductWidth(event.target.value)}
                  value={productWidth}
                />
                <label htmlFor='height'>Enter height (cm)</label>
                <TextInput 
                  id='height' 
                  name='height' 
                  type='number'
                  min="1" max="10000"
                  onChange={(event) => setProductHeight(event.target.value)}
                  value={productHeight}
                />
              </Box>
            </Box>
          </Form>
          <Box
            align='center'
            justify='center'
          >
            {saveButton}
            <Button 
              size='large'
              margin='5px'
              primary
              label='Cancel'
              color='status-error'
              onClick={handleClose}
            />
          </Box>
        </Box>
      </Layer>
     
  );
}
