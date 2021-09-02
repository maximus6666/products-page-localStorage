export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload]
      }

    case "DELETE_PRODUCT":{
      const products = state.products;
      const productId = action.payload
      const newProductsList = products.filter((product) => product.id !== productId)
      return {
        ...state,
        products: [...newProductsList]
      }
    }
      
    case 'EDIT_PRODUCT':{
      const productIndex = state.products.findIndex((el) => el.id === action.payload.id);

      return {
        ...state,
        products: [
          ...state.products.slice(0, productIndex), 
          action.payload,
          ...state.products.slice(productIndex + 1)
        ]
      }
    }
      
      case "ADD_COMMENT":{
        const productIndex = state.products.findIndex((el) => el.id === action.payload.productId);
        const product = state.products[productIndex];

        return {
          ...state,
          products: [
            ...state.products.slice(0, productIndex), 
            {
              ...product,
               comments: [...product.comments, action.payload.comment]
            },
            ...state.products.slice(productIndex + 1)
          ]
        }
      }
        
        case "DELETE_COMMENT":{
          const productId = action.payload.productId;
          const productIndex = state.products.findIndex((el) => el.id === productId);
          const product = state.products[productIndex];

          const productComments = product.comments;
          const commentId = action.payload.commentId;

          const newCommentList = productComments.filter((comment) => comment.id !== commentId);
          
         return {
          ...state,
          products: [
            ...state.products.slice(0, productIndex), 
            {
            ...product,
             comments: newCommentList
            },
            ...state.products.slice(productIndex + 1)
          ]      
        }
      }
      
    default:return state;
  }
}
