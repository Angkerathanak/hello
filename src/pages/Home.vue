<template>
    <div class="hero_area">
      <Slider></Slider>
      
</div>

<Portfoliocard></Portfoliocard>
<About></About>
      <Blogapi></Blogapi>
      <Contact></Contact>
</template>

<script>
import Slider from '@/components/Slider.vue'
import Portfoliocard from '@/components/Portfoliocard.vue'
import About from '@/components/About.vue'
import Blogapi from '@/components/Blogapi.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'App',
  components: {
    Slider,
    Portfoliocard,
    About,
    Blogapi,
    Contact,
  }
}
</script>
