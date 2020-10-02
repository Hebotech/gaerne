<script>
  import HeroHeader from 'Organisms/Category/HeroHeader';
  import ProductListing from 'Organisms/Home/ProductListing';

  export let name;

  $: categoryObject = {
    name: 'Enduro',
    image: '/images/gaerne-showcase.jpg',
    description:
      'La descripción es lo que explica un poco de la categoría y le da valor y presencia a los productos.',
    products: [
      {
        name: 'SG-12',
        description: 'Lo mejor que puede haber en la historia',
        images: ['http://www.gaerne.com/images/articoli/boots/2174_073.jpg'],
      },
      {
        name: 'SG-14',
        description: 'Lo mejor que puede haber en la historia',
        images: ['http://www.gaerne.com/images/articoli/boots/2174_079.jpg'],
      },

      {
        name: 'SH-212',
        description: 'Lo mejor que puede haber en la historia',
        images: ['http://www.gaerne.com/images/articoli/boots/2174_073.jpg'],
      },
      {
        name: 'SH3812',
        description: 'Lo mejor que puede haber en la historia',
        images: ['http://www.gaerne.com/images/articoli/boots/2174_079.jpg'],
      },
      {
        name: 'SH315',
        description: 'Lo mejor que puede haber en la historia',
        images: ['http://www.gaerne.com/images/articoli/boots/2174_079.jpg'],
      },

      {
        name: 'SH-319',
        description: 'Lo mejor que puede haber en la historia',
        images: ['http://www.gaerne.com/images/articoli/boots/2174_073.jpg'],
      },
      {
        name: 'SH-320',
        description: 'Lo mejor que puede haber en la historia',
        images: ['http://www.gaerne.com/images/articoli/boots/2174_079.jpg'],
      },
    ],
  };
</script>

<style>
</style>

<div class="container-fluid text-center p-0">
  <HeroHeader {...categoryObject} />
  <ProductListing products={categoryObject.products} />
</div>
