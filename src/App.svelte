<script>
  import { Router, Route } from 'svelte-routing';

  import Home from './views/Home';
  import Categories from './views/Categories';
  import Contact from './views/Contact';
  import Product from './views/Product';
  import Distribuitors from './views/Distribuitors';

  import Particle from 'Organisms/ParticleBackground';
  import Navbar from 'Organisms/Navbar';
  import MainFooter from 'Organisms/MainFooter';

  let showButton = false;

  function toggle() {
    showButton = !showButton;
  }
</script>

<style>
  .main-content {
    z-index: 11;
    position: relative;
    margin: 2em 5em;
    background-color: #fff;
    border-radius: 0px 0px 8px 8px;
  }
  :global(h1, h2, h3, h4, h5) {
    font-family: Cousine;
    font-weight: 700;
  }
  :global(p, small, div, span) {
    font-family: Open Sans;
  }
</style>

<Router>
  <main class="main-content">
    <Navbar />
    <Route path="/" component={Home} />
    <Route path="/categoria/:name" let:params>
      <Categories name={params.name} />
    </Route>
    <Route path="/producto/:name" let:params>
      <Product name={params.name} />
    </Route>
    <Route path="/contacto" component={Contact} />
    <Route path="/distribuidores" component={Distribuitors} />
    <MainFooter />
  </main>
  <Particle />
</Router>
