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
            <li class="breadcrumb-item active" aria-current="page">Order</li>
            <li class="breadcrumb-item active" aria-current="page">{{package.name}}</li>
          </ol>
        </div>
        <!-- menu -->
        <section class="portfolio py-5">
          <!-- login -->
          <div class="login-contect py-5">
            <div class="container py-xl-8 py-3">
              <div class="login-body">
                <div class="login p-4 mx-auto">
                  <h5 class="text-center mb-4">Request A Quote</h5>
                  <form action="#" method="post">
                    <div class="form-group">
                      <label>Your Name</label>
                      <input type="text" class="form-control" name="name" placeholder required />
                    </div>
                    <div class="form-group">
                      <label>Email</label>
                      <input type="email" class="form-control" name="email" placeholder required />
                    </div>
                    <div class="form-group">
                      <label class="mb-2">Mobile</label>
                      <input
                        type="text"
                        class="form-control"
                        name="mobile"
                        id="mobile"
                        placeholder
                        required
                      />
                    </div>
                     <div class="form-group">
                      <label class="mb-2">Your Address</label>
                      <textarea
                        type="text"
                        class="form-control"
                        name="mobile"
                        id="mobile"
                        placeholder
                        required
                      />
                    </div>
                     <div class="form-group">
                      <label class="mb-2">Where do you want to plan your Suprise</label>
                      <textarea
                        type="text"
                        class="form-control"
                        name="mobile"
                        id="mobile"
                        placeholder
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label class="mb-2">What date are we looking at</label>
                      <input
                        type="text"
                        class="form-control"
                        name="mobile"
                        id="mobile"
                        placeholder
                        required
                      />
                    </div>
                    <hr />
                    <div class="form-group">
                      <label class="mb-2">What Service, do you want</label>
                      <div class="row">
                        <div class="col-lg-6 col-6 team-grid mt-lg-0 mt-4">
                          <a href="#team">
                            <img src="@/assets/images/t4.png" class="img-fluid" alt />
                          </a>
                          <div class="caption">
                            <div class="team-text">
                              <h4>
                                <a href="#team">Music</a>
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 col-6 team-grid mt-lg-0 mt-4">
                          <a href="#team">
                            <img src="@/assets/images/t1.png" class="img-fluid" alt />
                          </a>
                          <div class="caption">
                            <div class="team-text">
                              <h4>
                                <a href="#team">Food</a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="submit" class="btn submit mb-4">Requet your Quote</button>
                    <p class="text-center">
                      <a href="#" class="text-da">By Requesting a Quote,</a>
                    </p>
                  </form>
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
      posts: null,
      package: {
        name: "",
        id: null
      },
      orderData: {
        name: "",
        email: "",
        mobile: ""
      }
    };
  },
  created() {
    let orderId = this.$route.params["id"];
    this.setCurrentOrder(orderId);
  },
  methods: {
    setCurrentOrder: function(orderId) {
      if (orderId == 1) {
        this.package = { id: orderId, name: "Birthday Suprise" };
      } else if (orderId == 2) {
        this.package = { id: orderId, name: "Wedding Suprises" };
      } else if (orderId == 3) {
        this.package = { id: orderId, name: "Custom Suprises" };
      }
    }
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
  margin-top: 0px !important;
}
</style>