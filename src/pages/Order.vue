<template>
  <div class="section">
    <template>
      <div>
        <div class="container-contact100">
          <div class="wrap-contact100">
            <form class="contact100-form validate-form">
              <span class="contact100-form-title">{{orderPackage.name}} for {{friendName}}</span>
              <div
                class="alert alert-danger"
                role="alert"
                v-if="errors.length > 0"
              >{{errors.join(",")}}</div>
              <label class="label-input100" for="first-name">Tell us your name *</label>
              <div
                class="wrap-input100 rs1-wrap-input100 validate-input"
                data-validate="Type first name"
              >
                <input
                  id="first-name"
                  class="input100"
                  type="text"
                  name="first-name"
                  v-model="orderData.firstname"
                  placeholder="First name"
                />
                <span class="focus-input100"></span>
              </div>
              <div
                class="wrap-input100 rs2-wrap-input100 validate-input"
                data-validate="Type last name"
              >
                <input
                  class="input100"
                  type="text"
                  name="last-name"
                  v-model="orderData.lastname"
                  placeholder="Last name"
                />
                <span class="focus-input100"></span>
              </div>

              <label class="label-input100" for="email">Enter your contact Details *</label>
              <div
                class="wrap-input100 rs1-wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  id="email"
                  class="input100"
                  type="text"
                  v-model="orderData.email"
                  name="email"
                  placeholder="Email "
                />
                <span class="focus-input100"></span>
              </div>
              <div class="wrap-input100 rs1-wrap-input100">
                <input
                  id="phone"
                  class="input100"
                  type="text"
                  name="phone"
                  v-model="orderData.phonenumber"
                  placeholder="Phone Number"
                />
                <span class="focus-input100"></span>
              </div>
              <label class="label-input100" for="phone">One Last Thing, Where are you at</label>
              <div class="wrap-input100">
                <a
                  class="btn btn-info btn-sm btn-outline"
                  v-on:click="setGeoLocation()"
                >Enable Location</a>
                <input
                  id="phone"
                  class="input100"
                  type="text"
                  name="address"
                  placeholder="Address"
                  :value="orderData.location"
                  disabled
                />
                <span class="focus-input100"></span>
              </div>
              <hr />
              <label class="label-input100" for="phone">Your Friend's Name</label>
              <div class="wrap-input100">
                <input
                  id="friend_name"
                  class="input100"
                  type="text"
                  name="friend_name"
                  v-model="orderData.order.celebrant_name"
                  placeholder=""
                />
                <span class="focus-input100"></span>
              </div>
              <label class="label-input100" for="phone">What day is this surprise?</label>
              <div class="wrap-input100">
                <date-pick
                  v-model="orderData.order.celebration_time"
                  :format="'YYYY-MM-DD HH:mm:ss'"
                  :pickTime="true"
                ></date-pick>
                <span class="focus-input100"></span>
              </div>
              <label class="label-input100" for="phone">Where are we celebrating</label>
              <div class="wrap-input100">
                <input
                  id="celebrant.address"
                  class="input100"
                  type="text"
                  v-model="orderData.order.celebration_address"
                  placeholder=""
                />
                <span class="focus-input100"></span>
              </div>
              <label class="label-input100" for="first-name">How do you want the Surprise</label>
              <div class="wrap-input100 rs1-wrap-input100 validate-input" id="music-package">
                <label class="label-input100 package-service">
                  <input
                    type="checkbox"
                    class="wrap-input100 rs2-wrap-input100 validate-input"
                    v-model="isMusicService"
                  /> Music
                </label>
                <span class="focus-input100"></span>
              </div>
              <div
                class="wrap-input100 rs2-wrap-input100 validate-input"
                data-validate="Type last name"
              >
                <label class="label-input100 package-service">
                  <input
                    type="checkbox"
                    class="wrap-input100 rs2-wrap-input100 validate-input"
                    v-model="isFoodService"
                  /> Food
                </label>
                <span class="focus-input100"></span>
              </div>

              <label class="label-input100" for="message">Message *</label>
              <div class="wrap-input100 validate-input" data-validate="Message is required">
                <textarea
                  id="message"
                  class="input100"
                  name="message"
                  v-model="orderData.order.other"
                  placeholder="Write us a message"
                ></textarea>
                <span class="focus-input100"></span>
              </div>

              <div class="container-contact100-form-btn">
                <button class="contact100-form-btn" v-on:click="submitOrder($event)">{{getQuoteText}}</button>
              </div>
            </form>

            <div class="contact100-more flex-col-c-m" id="background-suprise">
              <div class="flex-w size1 p-b-47">
                <div class="txt1 p-r-25">
                  <span class="lnr lnr-map-marker"></span>
                </div>
                <div class="flex-col size2">
                  <span class="txt1 p-b-20">Address</span>

                  <span class="txt2">Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US</span>
                </div>
              </div>

              <div class="dis-flex size1 p-b-47">
                <div class="txt1 p-r-25">
                  <span class="lnr lnr-phone-handset"></span>
                </div>

                <div class="flex-col size2">
                  <span class="txt1 p-b-20">Lets Talk</span>

                  <span class="txt3">+1 800 1236879</span>
                </div>
              </div>

              <div class="dis-flex size1 p-b-47">
                <div class="txt1 p-r-25">
                  <span class="lnr lnr-envelope"></span>
                </div>

                <div class="flex-col size2">
                  <span class="txt1 p-b-20">General Support</span>

                  <span class="txt3">contact@example.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
 <script src="https://maps.google.com/maps?file=api&amp;v=3&amp;sensor=false"
     type="text/javascript"></script>
<script>
import Api from "@/Api";
import store from "@/util/store";
import DatePick from "vue-date-pick";
import "vue-date-pick/dist/vueDatePick.css";

export default {
  data() {
    return {
      loading: true,
      posts: null,
      friendName: "Your Friend",
      errors: [],
      date: "",
      getQuoteText : "Get Quote",
      isLocationApi: false,
      orderPackage: {
        name: "",
        id: null
      },
      date: "",
      orderData: {
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        location: "",
        order: {
          celebrant_name: "",
          celebration_address: "",
          celebration_type: "",
          celebration_time: "",
          other: null,
          services: []
        }
      },
      isFoodService: false,
      isMusicService: false
    };
  },
  created() {
    let orderId = this.$route.params["id"];
    this.setCurrentOrder(orderId);
  },
  mounted: function() {
    self = this;
    window.initMap = function() {
      self.initMap();
    };
    if (window.google && window.google.maps) {
      self.initMap();
      return;
    }

    var self = this;
    var script = document.createElement("script");
    script.onload = function() {
      if (!window.google && !window.google.maps)
        return void console.error("no google maps script included");
      // self.create_map();
    };

    script.async = true;
    script.defer = true;
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDfLRjmAN2A44hiZ8bNGEXqpAtRGU0Q45k&callback=initMap";
    document.getElementsByTagName("head")[0].appendChild(script);
  },
  updated() {
    this.token = store.state.token;
  },
  methods: {
    setCurrentOrder: function(orderId) {
      if (orderId == 1) {
        this.orderPackage = { id: orderId, name: "Birthday Suprise" };
      } else if (orderId == 2) {
        this.orderPackage = { id: orderId, name: "Wedding Suprises" };
      } else if (orderId == 3) {
        this.orderPackage = { id: orderId, name: "Custom Suprises" };
      }
    },
    makeOrder: function() {
      let axios = store.state.axios;
      axios
        .post("/order", this.orderData)
        .then(response => {
          if (response.data.status == 1) {
            this.$router.push({name:'success'})
          }
        })
        .catch(error => {
          console.log(error);
          console.log(error.response);
          this.errors = ["There was an error in submitting your request"];
        });
    },
    setGeoLocation: function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          this.showPosition,
          this.showLocationError
        );
      } else {
        this.setError(
          "Geolocation is not supported by this browser, Please try using chrome or update your browser"
        );
      }
    },
    initMap: function() {
      this.isLocationApi = true;
    },
    showPosition: function(position) {
      if (this.isLocationApi) {
        var latlon = position.coords.latitude + "," + position.coords.longitude;
        var latlng = {
          lat: parseFloat(position.coords.latitude),
          lng: parseFloat(position.coords.longitude)
        };
        var geocoder = new window.google.maps.Geocoder();
        let self = this;
        geocoder.geocode({ location: latlng }, function(results, status) {
          if (status === "OK") {
            if (results[0]) {
              self.orderData.location = results[0].formatted_address;
            } else {
              window.alert("No results found");
            }
          } else {
            window.alert("Geocoder failed due to: " + status);
          }
        });
      }
    },
    submitOrder: function(e) {
      e.preventDefault();
      this.getQuoteText = "Getting Quote, Please wait.....";
      this.errors = [];
      this.setServices();
      
      Object.keys(this.orderData).forEach((key, index) => {
        if (this.orderData[key] == "") {
          this.setError(key + " is cannot be empty");
        }
        if (key == "order") {
          this.validateOrder(this.orderData[key]);
        }
      });
      if (this.errors.length > 0) {
        this.getQuoteText = "Get Quote";
        return;
      }
      this.orderData.order.celebration_type = this.orderPackage.name;
      this.makeOrder();
      this.getQuoteText = "Get Quote";
    },
    setServices: function() {
      this.orderData.order.services = [];
      if (this.isFoodService) {
        this.orderData.order.services.push(1);
      }
      if (this.isMusicService) {
        this.orderData.order.services.push(2);
      }
    },
    validateOrder: function(order) {
      if (order.celebrant_name == "") {
        this.setError("The celebrant name, we need it ");
      }
      if ((order.celbration_address = "")) {
        this.setError("Where is the place of surprise ;)");
      }
      if (order.celebration_time == "") {
        this.setError(
          "24 hours is a long time, when would you have us be there?"
        );
      }
      if (order.services.length <= 0) {
        this.setError("What service would you like us to offer to you?");
      }
    },
    showLocationError: function(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          this.setError(
            "Hello friend, we need your location to proceed. Don't worry, we won't spam you ;)"
          );
          break;
        case error.POSITION_UNAVAILABLE:
          this.setError("Location information is unavailable.");
          break;
        case error.TIMEOUT:
          this.setError("The request to get user location timed out.");
          break;
        case error.UNKNOWN_ERROR:
          this.setError("An unknown error occurred.");
          break;
      }
    },
    setError(error) {
      this.errors = [];
      this.errors.push(error);
    }
  },
  components: { DatePick }
};
</script>
<style>
@import "@/../../assets/order/css/main.css";
@import "@/../../assets/order/css/util.css";
/*@import 'node_modules/@livelybone/vue-datepicker/lib/css/index.css';*/
p {
  margin-left: 25%;
  font-size: 16px;
}
#background-suprise {
  background-image: url("@/../../assets/images/custom/9.jpg");
}
#order-button {
  margin-left: 25% !important;
  margin-bottom: 12px;
  margin-top: 0px !important;
}
#music-package {
  border-right: none;
}
#home {
  display: none !important;
}

.vdpComponent.vdpWithInput > input[type="text"] {
  display: block;
  width: 100%;
  background: transparent;
  font-family: Poppins-Regular;
  font-size: 18px;
  color: #666666;
  padding: 20px;
  line-height: 1.2;
}
</style>