<template>
    <v-app class="app">
    <v-main>
     
      <router-view/>
     
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
<style>
:root {
  --secondary: #3B5F85;
  --primary: #35A19E;
}

@font-face {
  font-family: "Lato";
  src: local("Lato"),
   url(./assets/fonts/Lato/Lato-Regular.ttf) format("truetype");
}
.app{
  font-family: Lato;
  line-height: 1.6;;
}
.btn-primary, .btn-primary:hover, .btn-primary:focus, .btn-primary:active:focus{
color:#fff !important;
background: var(--primary) !important;
border-color: var(--primary) !important;
box-shadow: none

}
.btn-secondary{
color:#fff !important;
background: var(--secondary) !important;

}
.text-primary{
  color: var(--primary) !important
}
.text-secondary{
  color: var(--secondary) !important
}

</style>
