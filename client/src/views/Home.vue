<template>
  <div class="container" style="text-align: center; width:76%;">
    
    <h1>Hello {{this.session.user.firstName}} ! Welcome to Fitness Tracker!</h1>
    <p>You can get started by creating an account. Click the Sign Up button at the top right of the screen. Then you are well on your way to becoming ripped!</p>
  </div>
</template>

<script>
import Session from "../services/session";
export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
      user: this.Session.user.firstName
    }
  }
}
</script>
