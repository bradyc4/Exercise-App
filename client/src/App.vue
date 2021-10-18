<template>
<div class="fill-height" :style="{'background-image':'url(https://coastalcreative.com/wp-content/uploads/2018/03/2-Gym.jpg)'}" id="wrapper">
  <div class="container">
    <div>
    <Navbar />
    </div>
    <div class="router">
    <router-view/>
    </div>
  </div>
</div>
</template>
<style lang="css">
.router {
    background-color:#39619E;
    height: 50em;
    padding: 0.5em;
    color: white;
}
</style>

<script>
import Navbar from "./components/Navbar.vue";

export default {
    components: {
        Navbar
    },
    data() {
        return{
            myStyle:{
                //background:"lightblue",
            }
        }
    }
}
</script>
