<template>
       <div class="row">
        <Singlepage
        v-for="(item, index) in singlepage"
        :key="index"
        :img="item.img"
        :title="item.title"
        :id="item.id"
        :description="item.description" >
       </Singlepage>
    </div>
  </template>
  <script>
  import Singlepage from "@/components/Singlepage.vue";
  export default {
    components: {
      Singlepage,
    },
    data() {
      return {
        singlepage: [
          {
            img: "/images/f1.png",
            title: "Furni",
            description: "Modern Interior Design Studio",
            id: "001",
          },
          {
            img: "/images/f2.png",
            title: "MARKT.AI",
            description: "AI-Driven Marketing",
            id: "002",
          },
          {
            img: "/images/f3.png",
            title: "Play NFT",
            description: "Discover, Collect and Sell Dope Art NFT",
            id: "003",
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