<template>
  <div class="section">
    <template>
      <div class="jumbotron text-center">
        <h1 class="display-3">Thank You!</h1>
        <p class="lead">
          <strong>We have recorded your Order</strong> We will reach out to you within 24 hours, please check your mail
        </p>
        <hr />
        <p>
          Having trouble?
          <a href>Contact us +2348148380710</a>
        </p>
        <p class="lead">
          <a
            class="btn btn-primary btn-sm"
            href="/"
            role="button"
          >Continue to homepage</a>
        </p>
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
  margin-top: 0px !important;
}
</style>