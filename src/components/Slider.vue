<template>
        <!-- slider section -->
        <section class="slider_section long_section">
      <div id="customCarousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container ">
              <div class="row">
                <div class="col-md-5">
                  <div class="detail-box">
                    <h3>Hi</h3>
                    <h1>I'm <span style="color: #f89646">Rathanak</span></h1>
                    <h1>a Frontend Developer</h1>
                    <p>
                        {{ $t('Sme') }}
                    </p>
                    <div class="btn-box">
                        <router-link to = "/contact" class="btn1">{{ $t('CONTACT') }}</router-link>
                        <router-link to = "/about" class="btn2">{{ $t('ABOUT') }}</router-link>
                    </div>
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="img-box">
                    <img src="images/slider-img.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end slider section -->
</template>