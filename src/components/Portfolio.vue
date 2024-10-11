<template>
      <!-- furniture section -->

        <div class="col-md-6 col-lg-4">
          <div class="box">
            <div class="img-box">
              <img :src="img" alt="">
            </div>
            <div class="detail-box">
              <h4>
                {{ title }}
              </h4>
              <div class="price_box">
                <h6 class="price_heading">
                    {{ description }}
                </h6>
                <h6><router-link to = "/singlepage" class="nav-lin">{{ $t('See More') }}</router-link></h6>
                
              </div>
            </div>
          </div>
        </div>

  <!-- end furniture section -->
</template>
<script>
export default {
  props: ["img", "title", "description"],
};
</script>