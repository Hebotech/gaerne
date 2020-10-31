<script>
  import SvelteSeo from 'svelte-seo';
  import FormSection from 'Organisms/Contact/FormSection';

  import { blur } from 'svelte/transition';
</script>

<style>
  .contact-view {
    background-color: #333;
    color: white;
    background-image: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.3) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url(/images/background/bg-contacts.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 60vh;
  }
  .contact-view h1 {
    color: #f4d316;
    font-family: Cousine;
  }
</style>

<SvelteSeo
  title="Contacto | Sitio Oficial Gaerne México"
  description="Encuentra a los distribuidores oficiales de Gaerne en México y compra tus productos favoritos" />
<div
  class="container-fluid p-5 text-center d-flex flex-column contact-view justify-content-center">
  <div transition:blur class="row m-0">
    <div class="col-12">
      <h1>Contacto</h1>
    </div>
  </div>
  <FormSection />
</div>
