<script lang="ts">
    import type { PageData } from './$types';
  
    export let data: PageData;
    console.log(data);
  </script>
  
  <h1>{data.product.title}</h1>
  <p>{data.product.description}</p>
  <p>{data.product.price.toFixed(2)}</p>
