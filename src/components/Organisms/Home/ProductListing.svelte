<script>
  import ProductCard from 'Molecules/Home/ProductCard';

  let products = [
    {
      name: 'Enduro',
      description: 'Lo mejor que puede haber en la historia',
      images: ['http://www.gaerne.com/images/articoli/boots/2174_073.jpg'],
    },
    {
      name: 'Trial',
      description: 'Lo mejor que puede haber en la historia',
      images: ['http://www.gaerne.com/images/articoli/boots/2174_079.jpg'],
    },

    {
      name: 'Enduro',
      description: 'Lo mejor que puede haber en la historia',
      images: ['http://www.gaerne.com/images/articoli/boots/2174_073.jpg'],
    },
    {
      name: 'Trial',
      description: 'Lo mejor que puede haber en la historia',
      images: ['http://www.gaerne.com/images/articoli/boots/2174_079.jpg'],
    },
    {
      name: 'Trial',
      description: 'Lo mejor que puede haber en la historia',
      images: ['http://www.gaerne.com/images/articoli/boots/2174_079.jpg'],
    },

    {
      name: 'Enduro',
      description: 'Lo mejor que puede haber en la historia',
      images: ['http://www.gaerne.com/images/articoli/boots/2174_073.jpg'],
    },
    {
      name: 'Trial',
      description: 'Lo mejor que puede haber en la historia',
      images: ['http://www.gaerne.com/images/articoli/boots/2174_079.jpg'],
    },
  ];
</script>

<style>
  /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
<div class="row mt-5 mb-5 m-0 justify-content-around align-items-stretch">
  <div class="col-12 text-center">
    <h2>
      Nueva temporada
    </h2>
  </div>
  {#each products as product, productIndex (productIndex)}
  <ProductCard {product}/>
  {/each}
</div>
