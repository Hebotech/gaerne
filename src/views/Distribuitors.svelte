<script>
  import SvelteSeo from 'svelte-seo';
  import DistribuitorCard from 'Molecules/DistribuitorCard';
  import Loader from 'Atoms/Loader';

  import { distribuidoresStore } from '../store/distribuidores';

  import { Map, Marker, controls } from '@beyonk/svelte-mapbox';
  const { GeolocateControl, NavigationControl } = controls;
  let mapComponent;

  function onReady() {
    mapComponent.flyTo({ center: [40.7127281, -74.0060152] });
  }

  $: favDistribuitors = $distribuidoresStore
    ? $distribuidoresStore.filter((distribuidor) => distribuidor.fav)
    : null;

  $: regularDistribuitors = $distribuidoresStore
    ? $distribuidoresStore.filter((distribuidor) => !distribuidor.fav)
    : null;

</script>

<SvelteSeo
  title="Distribuidores oficiales | Sitio Oficial Gaerne México"
  description="Encuentra a los distribuidores oficiales de Gaerne en México y compra tus productos favoritos"
/>

<div class="container-fluid pt-5 pb-5">
  <div class="row m-0 justify-content-center">
    <div class="col-12 text-center">
      <h1>Distribuidores</h1>
    </div>
    <!-- <Map
      accessToken="pk.eyJ1IjoiaXJ2aW5nLWhlYm8iLCJhIjoiY2tvcnQ2eTJoMTF2eDJ2bXA5bThtd2kxNiJ9.u4M6pCX-ImB7amvHrhnNxQ"
      style="mapbox://styles/irving-hebo/ckorsf42i12sq17pae7udljrd"
      center={{ lng: -102.2411842, lat: 22.7787241 }}
      zoom={10}
    >
      <NavigationControl />
      
    </Map> -->
    {#if $distribuidoresStore}
      <Map
        accessToken="pk.eyJ1IjoiaXJ2aW5nLWhlYm8iLCJhIjoiY2tvcnQ2eTJoMTF2eDJ2bXA5bThtd2kxNiJ9.u4M6pCX-ImB7amvHrhnNxQ"
        style="mapbox://styles/irving-hebo/ckorsf42i12sq17pae7udljrd"
        center={[-102.2411842, 22.7787241]}
        zoom={5}
      >
        <NavigationControl />
        <GeolocateControl />
        {#each favDistribuitors as distribuitor, i (i)}
          <Marker
            lat={distribuitor.coordinates[1]}
            lng={distribuitor.coordinates[0]}
            label={`${distribuitor.name} - ${distribuitor.address}`}
            on:click={() => {
              console.log(distribuitor);
              window.open(
                `http://maps.google.com/?q=${
                  distribuitor.name + ' ' + distribuitor.address
                }`,
                '_blank'
              );
            }}
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 1027 965"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              on:click={() => {
                console.log(distribuitor);
                window.open(
                  `http://maps.google.com/?q=${
                    distribuitor.name + ' ' + distribuitor.address
                  }`,
                  '_blank'
                );
              }}
            >
              <ellipse
                cx="513.5"
                cy="482.5"
                rx="513.5"
                ry="482.5"
                fill="#BD9D00"
              />
              <ellipse cx="514" cy="483" rx="397" ry="373" fill="#FFD400" />
              <path
                d="M318.992 616.433L366.099 586.605L628.458 586.603L669.585 616.435L318.992 616.433Z"
                fill="white"
              />
              <path
                d="M305.3 613.801H243.328L204 585.393L334.553 351.046L402.29 321H772.109L823.46 359.241L780.879 435.852H622.981L645.202 396.029L637.23 388.461H490.5L467.69 402.335L387.504 540.599H564.532L578.449 515.657L468.084 466.401H763.899L681.981 613.801L631.418 577.131H363.203L305.3 613.801Z"
                fill="black"
              />
            </svg>
          </Marker>
        {/each}
        {#each regularDistribuitors as distribuitor, i (i)}
          <Marker
            lat={distribuitor.coordinates[1]}
            lng={distribuitor.coordinates[0]}
            label={`${distribuitor.name} - ${distribuitor.address}`}
            on:click={() =>
              window.open(
                `http://maps.google.com/?q=${
                  distribuitor.name + ' ' + distribuitor.address
                }`,
                '_blank'
              )}
          >
            <svg
              width="45"
              height="45"
              viewBox="0 0 1027 965"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="513.5"
                cy="482.5"
                rx="513.5"
                ry="482.5"
                fill="black"
              />
              <ellipse cx="514" cy="483" rx="397" ry="373" fill="#494949" />
              <path
                d="M318.992 616.433L366.099 586.605L628.458 586.603L669.585 616.435L318.992 616.433Z"
                fill="white"
              />
              <path
                d="M305.3 613.801H243.328L204 585.393L334.553 351.046L402.29 321H772.109L823.46 359.241L780.879 435.852H622.981L645.202 396.029L637.23 388.461H490.5L467.69 402.335L387.504 540.599H564.532L578.449 515.657L468.084 466.401H763.899L681.981 613.801L631.418 577.131H363.203L305.3 613.801Z"
                fill="#FED700"
              />
            </svg>
          </Marker>
        {/each}
      </Map>
    {:else}
      <div class="row m-0 align-items-center justify-content-center">
        <Loader />
      </div>
    {/if}
  </div>
</div>

<style>
  :global(.mapboxgl-map) {
    height: 100vh;
    width: 100%;
  }
  :global(.mapboxgl-map) {
    height: 100vh;
    width: 100%;
  }
  :global(.mapboxgl-canvas-container) {
    height: 100vh;
    width: 100%;
  }

</style>
