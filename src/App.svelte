<script>
  import { Router, Route } from 'svelte-routing';
  import Home from './views/Home';
  import Categories from './views/Categories';

  let showButton = false;

  function toggle() {
    showButton = !showButton;
  }
</script>

<Router>
  <main>
    <Route path="/" component={Home} />
    <Route path="/categoria/:name" component={Categories} />
  </main>
</Router>
