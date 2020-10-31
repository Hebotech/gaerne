<script>
  import SvelteSeo from 'svelte-seo';
  import DistribuitorCard from 'Molecules/DistribuitorCard';

  let distribuitors = [
    {
      name: 'Hebotechno',
      description: 'Importadora de productos europeos para motos',
      website: 'https://mundohebotech.com',
      isFav: true,
    },
    {
      name: 'Hebotechno',
      description: 'Importadora de productos europeos para motos',
      website: 'https://mundohebotech.com',
      isFav: true,
    },
    {
      name: 'Hebotechno',
      description: 'Importadora de productos europeos para motos',
      website: 'https://mundohebotech.com',
      isFav: true,
    },
    {
      name: 'Hebotechno',
      description: 'Importadora de productos europeos para motos',
      website: 'https://mundohebotech.com',
      isFav: true,
    },
    {
      name: 'Hebotechno',
      description: 'Importadora de productos europeos para motos',
      website: 'https://mundohebotech.com',
      isFav: true,
    },
    {
      name: 'Hebotechno',
      description: 'Importadora de productos europeos para motos',
      website: 'https://mundohebotech.com',
      isFav: false,
    },
    {
      name: 'Hebotechno',
      description: 'Importadora de productos europeos para motos',
      website: 'https://mundohebotech.com',
      isFav: false,
    },
    {
      name: 'Hebotechno',
      description: 'Importadora de productos europeos para motos',
      website: 'https://mundohebotech.com',
      isFav: false,
    },
    {
      name: 'Hebotechno',
      description: 'Importadora de productos europeos para motos',
      website: 'https://mundohebotech.com',
      isFav: false,
    },
    {
      name: 'Hebotechno',
      description: 'Importadora de productos europeos para motos',
      website: 'https://mundohebotech.com',
      isFav: false,
    },
    {
      name: 'Hebotechno',
      description: 'Importadora de productos europeos para motos',
      website: 'https://mundohebotech.com',
      isFav: false,
    },
  ];

  $: favDistribuitors = distribuitors.filter(
    (distribuidor) => distribuidor.isFav
  );

  $: regularDistribuitors = distribuitors.filter(
    (distribuidor) => !distribuidor.isFav
  );
</script>

<style>
</style>

<SvelteSeo
  title="Distribuidores oficiales | Sitio Oficial Gaerne México"
  description="Encuentra a los distribuidores oficiales de Gaerne en México y compra tus productos favoritos" />

<div class="container-fluid pt-5 pb-5">
  <div class="row m-0 justify-content-center">
    <div class="col-12 text-center">
      <h1>Premium</h1>
    </div>
    {#each favDistribuitors as distribuitor, i (i)}
      <DistribuitorCard {...distribuitor} {i} />
    {/each}
  </div>
  <div class="row m-0 justify-content-center">
    <div class="col-12 text-center">
      <h1>Distribuidores</h1>
    </div>
    {#each regularDistribuitors as distribuitor, i (i)}
      <DistribuitorCard {...distribuitor} {i} />
    {/each}
  </div>
</div>
