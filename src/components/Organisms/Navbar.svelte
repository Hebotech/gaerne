<script>
  import { Link } from 'svelte-routing';
  import { getContext } from 'svelte';
  import { ROUTER } from 'svelte-routing/src/contexts';
  let { activeRoute } = getContext(ROUTER);

  let routePath;

  $: {
    routePath = $activeRoute;
  }

  $: pathUri = routePath ? routePath.uri : '';
</script>

<style>
  .active {
    font-weight: bolder;
    text-decoration: underline;
    transition: all ease-in-out 0.5s;
  }
</style>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/">Gaerne 🤖</Link>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class:active={pathUri === '/'} class="nav-item">
        <Link class="nav-link" to="/">🏡 Home</Link>
      </li>
      <li class="nav-item" class:active={pathUri.includes('/categoria')}>
        <Link class="nav-link" to="/categoria/asda">🚀 Categorías</Link>
      </li>
      <li class="nav-item" class:active={pathUri.includes('/producto')}>
        <Link class="nav-link" to="/producto/eieid">💰 Productos</Link>
      </li>
      <li class="nav-item" class:active={pathUri.includes('/contacto')}>
        <Link class="nav-link" to="/contacto">📨 Contacto</Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search" />
      <button
        class="btn btn-outline-success my-2 my-sm-0"
        type="submit">Search</button>
    </form>
  </div>
</nav>
