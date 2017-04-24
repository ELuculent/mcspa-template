<template>
<div class="container-fluid">
<br /><br /><br />
  <center>
    <div class="container-fluid">
        <!-- vue-carousel -->
         <carousel-3d :autoplay="true" :autoplay-timeout="2500" :display="3" :width="1000" :height="600">
              <!-- Carousel Slides. Duplicate the slides if you need more. -->
              <slide :index="0">
                <img src="">
                Text to go along, delete if you want.
              </slide>
              <slide :index="1">
                  <img src="">
              </slide>
              <slide :index="2">
                <img src="">
              </slide>
         </carousel-3d>
    </div>
  </center>
   <br /><br /><br />
   <br /><br /><br />
    <div class="row">
        <div class="col">
            <b-btn v-b-toggle="'collapse1'" variant="success">Toggle Server Status</b-btn>
             <b-collapse id="collapse1">

                  <b-card class="server-status">
                        <h1 class="status-head">Server status</h1>
                        <h2>Server Name</h2>
                        <p>
                            <span class="onlineQuery"></span><br />
                            <span class="motd"></span><br />
                            There are <span class="count"></span>/<span class="max"></span> players online <br />
                            The server was last online on: <span class="last-online"></span>
                        </p>
                  </b-card>

              </b-collapse>

        </div>
        <div class="col-1">

        </div>
        <div class="col">

        </div>
  </div>
  <div class="row">
    <div class="col">

    </div>
    <div class="col-1">

    </div>
    <div class="col">

    </div>
  </div>
</div>


</template>

<script>
export default {
  name: 'server'
}
</script>

<style scoped>

    .server-status{
        background-color: #323232;
        color: #00ffff;
    }
    .onlineQuery{
        color: #00ffff;
    }
    .status-head{
        color: red;
    }
    .count{
        color: red;
    }
    .max{
        color: red;
    }
    .last-online{
        color: red;
    }
    .container-fluid{
        background-color: #383838;
        color: white;
    }

</style>
