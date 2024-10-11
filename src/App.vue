<template>
    <div class="hero_area">
      <Navbar></Navbar>
      <router-view></router-view>
</div>
      <Footer></Footer>
      
</template>

<script>
import Navbar from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  }
}
</script>
