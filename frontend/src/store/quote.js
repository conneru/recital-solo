import { csrfFetch } from "./csrf";
const REMOVE_QUOTE = "quote/removeQuote";

export const  deleteQuote = async (id) =>{
    const res = await csrfFetch(`/api/quote/${id}`,{
        method:'DELETE'
    });
  if (res.ok) {
    console.log('deleted')
  }
}