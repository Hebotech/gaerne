<script>
  import { onMount } from 'svelte';
  import HeroHeader from 'Organisms/Home/HeroHeader';
  import CategoriesListing from 'Organisms/Home/CategoriesListing';
  import ProductListing from 'Organisms/Home/ProductListing';

  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  import MorphSVGPlugin from 'gsap/MorphSVG';

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

    let tl2 = new gsap.timeline({
      delay: 1.2,
    });

    tl2
      .from('svg.logo-svg', {
        ease: 'power1',
        duration: 2,
        scale: 1.5,
        translateX: '10em',
        translateY: '1em',
      })
      .to(
        '#path-motorcycle',
        {
          morphSVG: '#path-full-logo',
          ease: 'power1',
          duration: 2,
          fill: 'white',
        },
        '0'
      )
      .to(
        '#path-brand-motorcycle',
        {
          morphSVG: '#path-shape-logo',
          ease: 'power1',
          fill: '#FFD400',
          duration: 2,
        },
        '0'
      )
      .to('#svg-letters-gaerne', {
        opacity: 1,
        ease: 'power1',
        duration: 1.5,
      })
      .to('.logo-animation', {
        ease: 'power1',
        // delay: 500,
        duration: 0.4,
        translateX: '15em',

        opacity: 0,
        display: 'none',
      })
      .fromTo(
        '.hero-header .title-hero',
        {
          display: 'block',
          translateY: '-20em',
          opacity: 0,
        },
        {
          duration: 1,
          ease: 'power1',
          opacity: 1,
          translateY: '0em',
        }
      );
  });

  let ready = true;

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
