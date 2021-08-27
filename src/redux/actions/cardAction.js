import { TYPES } from "../constants/type"
import data from '../../data'

export const cardAction=(productId)=>async (dispatch)=>{

    const product=data.products.find(x=>x._id===productId)
    dispatch({
        type:TYPES.ADD_CARD,
        payload:{
           name:product.name ,
           brand:product.brand,
           id:product._id,
           image:product.image,
           price:product.price
        }
    })
}

export const removeAction=(productId)=>async (dispatch)=>{

   
    dispatch({
        type:TYPES.REMOVE_CARD,
        payload:productId
    })
}