<script>
  import { onMount } from 'svelte';
  import { productsStore } from '../store/products';
  import SvelteSeo from 'svelte-seo';

  import { animationPlayed } from 'Store/index';

  import HeroHeader from 'Organisms/Home/HeroHeader';
  import CategoriesListing from 'Organisms/Home/CategoriesListing';
  import ProductListing from 'Organisms/Home/ProductListing';
  import Loader from 'Atoms/Loader';

  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  import MorphSVGPlugin from 'gsap/MorphSVG';

  function finishedAnimation() {
    animationPlayed.set(true);
  }

  onMount(() => {
    animationPlayed.subscribe((value) => {
      if (!value) {
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
          .eventCallback('onComplete', finishedAnimation);
      } else {
        let tl = gsap.timeline();
        tl.to('.logo-animation', {
          display: 'none',
          duration: 0.0001,
        }).fromTo(
          '.hero-header .title-hero',
          {
            display: 'block',
            translateX: '-20em',
            opacity: 0,
          },
          {
            duration: 1,
            ease: 'power1',
            opacity: 1,
            translateX: '0em',
          }
        );
      }
    });
  });

  let ready = true;
</script>

<style>
  .product-list h2 {
    text-decoration: underline #f4d316;
  }
</style>

<SvelteSeo
  openGraph={{ title: 'Open Graph Title', description: 'Open Graph Description', url: 'https://www.example.com/page', type: 'website', images: [{ url: 'https://www.example.com/images/og-image.jpg', width: 850, height: 650, alt: 'Og Image Alt' }] }} />

<div class="container-fluid">
  <HeroHeader />
  <CategoriesListing />
  <div class="col-12 text-center product-list">
    <h2>Productos favoritos</h2>
  </div>

  {#if $productsStore}
    <ProductListing products={$productsStore} />
  {:else}
    <div class="row m-0 align-items-center justify-content-center">
      <Loader />
    </div>
  {/if}
</div>
