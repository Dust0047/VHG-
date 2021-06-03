<template>
  <v-app>
    <div>
      <router-view></router-view>
      
      <Footer />
    </div>
  </v-app>
</template>

<script>
  import Footer from './components/common/Footer.vue';

  export default {
    name: 'App',

    components: {
      Footer,
    },

    data: () => ({
      //
    }),
  }
  
</script>
