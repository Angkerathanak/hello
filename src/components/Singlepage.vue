<template>
       <div  class="col-10 col-sm-8 col-lg-6">
        <img :src="img" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">{{ title }}</h1>
        <p class="lead">{{ description }}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        </div>
      </div>
</template>
<script>
export default {
  props: ["img", "title", "description","id"],
};
</script>