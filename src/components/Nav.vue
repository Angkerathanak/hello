<template>
        <!-- header section strats -->
        <header class="header_section long_section px-0">
      <nav class="navbar navbar-expand-lg custom_nav-container ">
          <router-link to = "/" class="navbar-brand">
          <img style="width: 50%;" src="/images/r.png">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class=""> </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
            <ul class="navbar-nav  ">
              <li class="nav-item active">
                <router-link to = "/" class="nav-link">{{ $t('HOME') }}</router-link>
              </li>
              <li class="nav-item">              
              <router-link to = "/portfolio" class="nav-link">{{ $t('PORTFOLIO') }}</router-link>
              </li>
              <li class="nav-item">              
              <router-link to = "/about" class="nav-link">{{ $t('ABOUT') }}</router-link>
              </li>
              <li class="nav-item">              
              <router-link to = "/blog" class="nav-link">{{ $t('BLOG') }}</router-link>
              </li>
              <li class="nav-item">              
              <router-link to = "/contact" class="nav-link">{{ $t('CONTACT') }}</router-link>
              </li>
            </ul>
          </div>
          <div class="quote_btn-container">
            <img @click="changeLocalekh('khm')" style="width: 30px;" src="/images/cambodia.png">
            <img @click="changeLocale('en')" style="width: 35px; margin-left:15px;" src="/images/us.png">

          </div>
        </div>
      </nav>
    </header>
    <!-- end header section -->
</template>
<script>
export default {
  methods: {
    changeLocale() {
      if (this.$i18n.locale == 'khm'){
      this.$i18n.locale = 'en'
    }
  },
  changeLocalekh() {
      if (this.$i18n.locale == 'en'){
      this.$i18n.locale = 'khm'
    }
  }
  }
};
</script>