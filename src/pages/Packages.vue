<template>
  <div class="section">
    <template>
      <div>
        <div class="main-banner-2"></div>
        <div class="breadcrumb-agile bg-light py-2">
          <ol class="breadcrumb bg-light m-0">
            <li class="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Packages</li>
          </ol>
        </div>
        <!-- menu -->
        <section class="portfolio py-5">
          <div class="container py-xl-5 py-lg-3">
            <div class="title-section text-center mb-md-5 mb-4">
              <h3 class="w3ls-title mb-3">
                Our
                <span>Packages</span>
              </h3>
              <p class="titile-para-text mx-auto">
                Inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.Nemo
                enim totam rem aperiam.
              </p>
            </div>
            <div class="row mt-4">
              <div class="col-md-4">
                <div class="gallery-demo">
                  <a href="#gal1">
                    <img src="@/assets/images/blog1.jpg" alt=" " class="img-fluid" />
                    <h4 class="p-mask">
                      Birthday Suprises
                      <span></span>
                    </h4>
                    <router-link to="/order/1" class="button-w3ls mt-5 ml-2" id="order-button">
                      Request Quote
                      <span class="fa fa-caret-right ml-1" aria-hidden="true"></span>
                    </router-link>
                  </a>
                </div>
              </div>
              <div class="col-md-4 mt-md-0 mt-4">
                <div class="gallery-demo">
                  <a href="#gal2">
                    <img src="@/assets/images/blog2.jpg" alt=" " class="img-fluid" />
                    <h4 class="p-mask">
                      Wedding Anniversary -
                      <span></span>
                    </h4>
                    <router-link to="/order/2" class="button-w3ls mt-5 ml-2" id="order-button">
                      Request Quote
                      <span class="fa fa-caret-right ml-1" aria-hidden="true"></span>
                    </router-link>
                  </a>
                </div>
              </div>
              <div class="col-md-4 mt-md-0 mt-4">
                <div class="gallery-demo">
                  <a href="#gal3">
                    <img src="@/assets/images/blog3.jpg" alt=" " class="img-fluid" />
                    <h4 class="p-mask">
                      Custom Suprises -
                      <span></span>
                    </h4>
                    <router-link to="/order/3" class="button-w3ls mt-5 ml-2" id="order-button">
                      Request Quote
                      <span class="fa fa-caret-right ml-1" aria-hidden="true"></span>
                    </router-link>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </template>
  </div>
</template>

<script>
import Api from "@/Api";
export default {
  data() {
    return {
      loading: true,
      posts: null
    };
  },
  created() {
    /*Api.getPosts()
      .then(response => {
        this.posts = response.data;
        this.loading = false;
      })
      .catch(() => {
        alert("ERROR");
        this.loading = false;
      });*/
  }
};
</script>
<style scoped>
p {
  margin-left: 25%;
  font-size: 16px;
}
#order-button {
  margin-left: 25% !important;
  margin-bottom: 12px;
  margin-top:0px !important
}
</style>