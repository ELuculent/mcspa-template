<template>
  <div id="app">

  <nav class="navbar fixed-top navbar-toggleable-md navbar-inverse" style="background-color:#000000;">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
  </button>
  <b-link class="navbar-brand" to="/">
      <span style="color:#00ffff;">
          <img src="assets/logo.png" /> Template
      </span>
  </b-link>

   <b-collapse is-nav id="nav_collapse">
      <ul class="navbar-nav ml-auto" style="color:#00ffff;">
        <li class="nav-item active">
          <router-link class="nav-link" v-bind:to="'/'" style="color:#00ffff;">Home <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" v-bind:to="'/about'" style="color:#00ffff;">About</router-link>
        </li>
        <!-- Start Dropdown. Defined by bootstrap-vue (https://bootstrap-vue.github.io) -->
        <b-nav-item-dropdown>
              <template slot="text">
                <span style="color:#00ffff;">Server</span>
              </template>
              <!-- Dropdown Header. This is not a link! -->
              <h6 class="dropdown-header"><b>General</b></h6>
              <!-- Dropdown Links -->
              <b-dropdown-item v-bind:to="'/server'">Information</b-dropdown-item>
              <b-dropdown-item v-bind:to="'/vote'">Vote</b-dropdown-item>
              <b-dropdown-item v-bind:to="'/donate'">Donate</b-dropdown-item>
              <!-- Separate Dropdown Sectio -->
              <div class="dropdown-divider"></div>
                <!-- Dropdown Header -->
              <h6 class="dropdown-header"><b>Staff</b></h6>
                <!-- Dropdown Links -->
                <router-link v-bind:to="'/staff'" class="dropdown-item">Staff Team</router-link>
                <router-link v-bind:to="'/apply'" class="dropdown-item">Staff Applications</router-link>
          </b-nav-item-dropdown>
          <!-- Make Dropdown completely visable. Delete if using mr-auto instead of ml-auto -->
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </ul>
    </b-collapse>
  </nav>


  <!-- the router outlet, where all matched components would ber viewed -->


  <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'app',
    }

</script>
<!-- styling for the component -->
<link rel="stylesheet" href="../css/css.css">
<style>
    #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.cHead {
    text-align: center;
}

.jtext {
    margin-left: 20px;
    color: white;
}

.jHeading {
    margin-left: 20px;
    color: white;
}

.user {
    margin-right: 60px;
}

.text {
    text-align: justify;
}

.carousel {
    margin-left: -11px;
    height: 900px;
    width: 101.6%;
    background: rgba(0, 0, 0, .4);
    position: relative;
}

.container-fluid {
    width: 100%;
}

.bg-img {
    position: absolute;
    left: 0%;
    margin-left: 0px;
    height: 720px;
    width: 1280px;
}

.cls-1 {
    font-size: 30px;
    font-family: CloisterBlack-Light, Cloister Black;
}

* {
    border-radius: 2px !important;
    -moz-border-radius: 2px !important;
    -webkit-border-radius: 2px !important;
}

.login-modal-container {
    max-width: 350px;
    width: 100% !important;
    background-color: #292B2C;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    overflow: hidden;
}

.login-modal-container .modal-body {
    padding: 20px 10px;
}

.login-modal-container .modal-footer {
    text-align: center;
    margin: 0 10px;
}

.login-modal-container h2 {
    text-align: center;
    font-size: 25px;
    margin-bottom: 25px;
}

.login-modal-container input {
    font-size: 16px;
    background-color: #FFFFFF
}

.login-modal-container input[type=submit] {
    background-color: #0069ff;
    border: 2px solid #0069ff;
    text-shadow: 0 1px rgba(0, 0, 0, 0.1);
}

.login-modal-container input[type=submit]:hover {
    background-color: #f80000;
    border: 2px solid #f80000;
}

.error {
    background-color: #292B2C;
}

.register-modal-container {
    max-width: 350px;
    width: 100% !important;
    background-color: #292B2C;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    overflow: hidden;
}

.register-modal-container .modal-body {
    padding: 20px 10px;
}

.register-modal-container .modal-footer {
    text-align: center;
    margin: 0 10px;
}

.register-modal-container h2 {
    text-align: center;
    font-size: 25px;
    margin-bottom: 25px;
}

.register-modal-container input {
    font-size: 16px;
    background-color: #FFFFFF
}

.register-modal-container input[type=submit] {
    background-color: #0069ff;
    border: 2px solid #0069ff;
    text-shadow: 0 1px rgba(0, 0, 0, 0.1);
}

.register-modal-container input[type=submit]:hover {
    background-color: #f80000;
    border: 2px solid #f80000;
}

.error {
    background-color: #292B2C;
}

.modal-text {
    color: #FFFFFF;
}

.carousel-indicators {
    color: #000000;
}

.carousel-text {
    color: #FFFFFF;
}
.card-text {
    text-align: justify;
}
.nav-link {
    color: #00ffff;
}
.navbar .nav-link .nav-item{
    color: #00ffff;
}
.card-image-top{
    width: 100%;
    height: 100%;
}

.container-fliud #wrapper {
    background-color: darkorange;
}
.jumbotron{
    background-color: darkgray;
}
.jumbotron-header{

}

</style>
