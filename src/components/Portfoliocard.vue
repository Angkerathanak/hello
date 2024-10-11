<template>
    <!-- furniture section -->

<section class="furniture_section layout_padding">
  <div class="container">
    <div class="heading_container align">
      <h2>
        {{ $t('PORTFOLIO') }}
      </h2>
      <p>
          {{ $t('Dsp') }}
      </p>
    </div>
    <div class="row">
        <Portfolio
        v-for="(item, index) in portfolio"
        :key="index"
        :img="item.img"
        :title="item.title"
        :description="item.description" >
    </Portfolio>
    </div>
    </div>
  </section>
  </template>
  <script>
  import Portfolio from "@/components/Portfolio.vue";
  export default {
    components: {
      Portfolio,
    },
    data() {
      return {
        portfolio: [
          {
            img: "/images/f1.png",
            title: "Furni",
            description: "Modern Interior Design Studio",
          },
          {
            img: "/images/f2.png",
            title: "MARKT.AI",
            description: "AI-Driven Marketing",
          },
          {
            img: "/images/f3.png",
            title: "Play NFT",
            description: "Discover, Collect and Sell Dope Art NFT",
          },
          {
            img: "/images/f4.png",
            title: "HEUBOWL",
            description: "Discover Rice Bowl",
          },
          {
            img: "/images/f5.png",
            title: "KFC",
            description: "Bargain bucket menu campaign",
          },
          {
            img: "/images/f6.png",
            title: "SPACE",
            description: "The Night Sky Beyond the Naked Eye",
          },
        ],
      };
    },
  };
  </script>