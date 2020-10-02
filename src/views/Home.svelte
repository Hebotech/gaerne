<script>
  import HeroHeader from 'Organisms/Home/HeroHeader';
  import CategoriesListing from 'Organisms/Home/CategoriesListing';
  import ProductListing from 'Organisms/Home/ProductListing';

  let products = [
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
  ];
</script>

<style>
  .product-list h2 {
    text-decoration: underline #f4d316;
  }
</style>

<div class="container-fluid">
  <HeroHeader />
  <CategoriesListing />
  <div class="col-12 text-center product-list">
    <h2>Productos favoritos</h2>
  </div>
  <ProductListing {products} />
</div>
