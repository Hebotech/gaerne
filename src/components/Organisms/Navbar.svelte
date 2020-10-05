<script>
  import { navigate } from 'svelte-routing';
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
  .navbar {
    background-color: #f5d315;
  }

  .col {
    font-weight: 700;
    font-family: Open Sans;
    text-transform: uppercase;
    padding: 0;
  }

  .col .nav-link {
    font-weight: 700;
    font-family: Open Sans;
    text-transform: uppercase;
    text-align: center;
    margin: auto;
    min-width: 100%;
    min-height: 100%;
    padding: 4% 0;
    color: #000;
    cursor: pointer;
    background-color: #f5d315;
    border: none;
    transition: all 0.3s ease-in;
  }

  .col .nav-link:hover {
    background-color: #333;
    color: white;
    transition: all 0.2s ease-out;
  }

  .col .nav-link {
    border-left: solid 2.5px #000;
  }
  .col .nav-link.active {
    font-weight: bolder;
    font-size: 108%;
    text-decoration: underline;
    transition: all ease-in 0.2s;
  }
</style>

<nav class="navbar p-0 d-flex flex-row text-center">
  <div class="col">
    <button
      on:click={() => navigate('/')}
      class:active={pathUri === '/'}
      class="nav-link">
      Inicio
    </button>
  </div>
  <div class="col">
    <button
      on:click={() => navigate('/categoria/enduro')}
      class:active={pathUri.includes('/categoria')}
      class="nav-link">
      Categorías
    </button>
  </div>
  <div class="col">
    <button
      on:click={() => navigate('/producto/SG-12')}
      class:active={pathUri.includes('/producto')}
      class="nav-link">
      Productos
    </button>
  </div>
  <div class="col">
    <button
      on:click={() => navigate('/distribuidores')}
      class:active={pathUri.includes('/distribuidores')}
      class="nav-link">
      distribuidores
    </button>
  </div>
  <div class="col">
    <button
      on:click={() => navigate('/contacto')}
      class:active={pathUri.includes('/contacto')}
      class="nav-link">
      Contacto
    </button>
  </div>
</nav>
