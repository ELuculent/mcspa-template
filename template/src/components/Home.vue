<template>
  <!-- Wrapper for home page -->
  <div class="Home" style="background-color: #383838;">
    <!-- Slider -->
    <b-carousel indicators :interval="5000" background="green" height="450px">
        <!-- Carousel Slide, duplicate if you need more -->
        <b-carousel-slide background="green" height="450px"
                         caption="First slide"
                         text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                         img=""
                         img-alt="1st Slide Image">
        </b-carousel-slide>

        <b-carousel-slide background="green" height="450px"
                         caption="Second slide"
                         text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                         img=""
                         img-alt="2nd Slide Image">
        </b-carousel-slide>

    </b-carousel>
    <!-- Jumbotron. Draws attention to this text -->
    <b-jumbotron header="Heading"
                 lead="Leading text" >
        <p>Descriptive text</p>
        <router-link type="button" class="btn btn-primary btn-lg btn-block" :to="'/'">Button</router-link>
    </b-jumbotron>
    <!-- Background colour container -->
    <div class="bg-container">
        <!-- Bootstrap Grid System -->
        <div class="row">
            <div class="col-1">
                
            </div>
            <div class="col">
                <!-- media object. Links to your media. Duplicate from the row div to it's closing div if you need more -->
                <b-media style="color:white;text-align:left;">
                    <!-- media image -->
                    <a href=""><img slot="aside" alt="Media Aside" src=""/></a>
                    <h2>Media Body</h2>
                    <p>Filler Text. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Quisque vehicula sem eget porta tempor. Aliquam erat volutpat. Vestibulum accumsan mattis enim, at porttitor tortor viverra non. Cras dignissim metus vel interdum lobortis. Etiam non nulla eget nulla elementum sodales vel efficitur justo. Nullam vitae iaculis dui. Morbi a lacinia magna, vestibulum bibendum eros. </p>
                </b-media>
            </div>
            <div class="col-2">
                
            </div>
        <!-- row closing div -->
        </div>
        
        <div class="row">
            <div class="col-1">
                
            </div>
            <div class="col">
                <b-media style="color:white;text-align:right;" right-align="true">
                    <a href="">
                        <img slot="aside" alt="Media Aside" src=""/>
                    </a>
                    <h2>Media Body</h2>
                    <p>Filler Text. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Quisque vehicula sem eget porta tempor. Aliquam erat volutpat. Vestibulum accumsan mattis enim, at porttitor tortor viverra non. Cras dignissim metus vel interdum lobortis. Etiam non nulla eget nulla elementum sodales vel efficitur justo. Nullam vitae iaculis dui. Morbi a lacinia magna, vestibulum bibendum eros. </p>
                </b-media>
            </div>
            <div class="col-2">
                
            </div>
        </div>
                
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .bg-container{
        background-color: #383838;
    }

</style>
