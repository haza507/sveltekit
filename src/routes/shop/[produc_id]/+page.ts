import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
 
export const load: PageLoad = ({ fetch , params }) => {
 console.log(params);
 const fetchProduct = async (id) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await res.json()
    return data
 }
//   throw error(404, 'Not found');
  return {
    product : fetchProduct(params.produc_id)
  }
}