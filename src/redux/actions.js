export const ADD_PRODUCT = (product) => {
  return {
    type: 'ADD_PRODUCT',
    payload: product
  }
}

export const DELETE_PRODUCT = (productId) => {
  return {
    type: 'DELETE_PRODUCT',
    payload: productId
  }
}

export const EDIT_PRODUCT = (product) => {
  return {
    type: 'EDIT_PRODUCT',
    payload: product
  }
}

export const ADD_COMMENT = (productId, comment) => {
  return {
    type: 'ADD_COMMENT',
    payload: {productId, comment}
  }
}

export const DELETE_COMMENT = (productId, commentId) => {
  return {
    type: 'DELETE_COMMENT',
    payload: {productId, commentId}
  }
}
