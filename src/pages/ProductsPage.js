import React, { useState } from "react"
import { useSelector } from 'react-redux';
import SearchPanel from "../components/SearchPanel/SearchPanel";
import Product from '../components/Product/Product';
import ModalWindow from "../components/Modal/Modal";
import ProductDetails from '../components/ProductDetails/ProductDetails'
import { Grid, Box, Button, Heading } from "grommet";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  HashRouter,
} from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const ProductsPage = () => {
  const [sortByName, setSortByName] = useState(false)
  const [sortByCount, setByCount] = useState(false)
  const products = useSelector(state => state.products)
  const [newProductModalOpen, setNewProductModalOpen] = useState(false);

  //function to display products
  const displayProducts = () => {
    if (sortByCount) {
      const sortedByCount = [...products];
      sortedByCount.sort((a,b) => b.count - a.count);

      return sortedByCount.map((product) => <Product {...product} key={product.id}/>)
    } 
     else if (sortByName) {
      const sortedByName = [...products]
      sortedByName.sort((a, b) => a.name > b.name ? 1 : -1)

      return sortedByName.map((product) => <Product {...product} key={product.id}/>)
    }

      return products.map((product) => <Product {...product} key={product.id}/>);
  }

  const handleOpen = () => {
    setNewProductModalOpen(true);
  };

  // let { path, url } = useRouteMatch()

  return (
    <HashRouter>
      <Switch>
        <Route path={`/:id`}>
          <ScrollToTop/>
          <ProductDetails />
        </Route>
        <Route exact path='/'>
          <Grid 
            className='product-page'
            rows={['auto', 'flex']}
            columns={['auto', 'flex']}
            gap="small"
            areas={[
              { name: 'header', start: [0,0], end: [1,0] },
              { name: 'main', start: [0, 1], end: [1, 1] },
            ]}
          >
            <Box 
              gridArea="header" 
              background="brand"
              alignSelf='center'
              align-items='center'
            >
              <Heading alignSelf='center'>Products Page</Heading>
            </Box>
            <Box
              gridArea="main"
              background="light-2"
            >
              <Box 
                align='center'
                margin='20px'
              >
                <Button 
                  alignSelf='center'
                  secondary
                  size='medium'
                  onClick={handleOpen}
                  label='New Product'

                />

              </Box>
              <ModalWindow open={newProductModalOpen} onClose={() => setNewProductModalOpen(false)} />
              <SearchPanel 
                searchingParam={(filterParam) => {setSortByName(filterParam)}}
                sortParam={(sortParam) => setByCount(sortParam)}
              />
              <Box
                direction='row-responsive'
                wrap={true}
                justify='center'
                margin='10px'
                >
                {displayProducts()}
              </Box>
            </Box>
            
          </Grid>
        </Route>
     </Switch>
    </HashRouter>
  )
}

export default ProductsPage
