<script>
  import FormSection from 'Organisms/Contact/FormSection';
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
      url(http://www.gaerne.com/img_web/bg-contacts.jpg);
    /* url(/images/gaerne.jpg); */
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 80vh;
  }
  .contact-view h1 {
    color: #f4d316;
    font-family: Cousine;
  }
</style>

<!-- markup (zero or more items) goes here -->
<div class="container-fluid p-5 text-center d-flex flex-column contact-view justify-content-center">
  <div class="row m-0">
    <div class="col-12">
      <h1>Contacto</h1>
    </div>
  </div>
  <FormSection/>
</div>
