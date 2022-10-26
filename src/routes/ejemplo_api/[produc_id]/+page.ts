import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
 
export const load: PageLoad = ({  params }) => {
  if (params.produc_id === 'hello-world') {
    return {
      title: 'Hello world!',
      content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    };
  }
 console.log("ejemplo",params)
  throw error(404, 'Not found');


}