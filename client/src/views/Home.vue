<template>

  <div class="container" style="text-align: center; width:50%;">
    <div v-if="!Session.user">
      <h1>Hello ! Welcome to Fitness Tracker!</h1>
      <p>You can get started by creating an account. Click the Sign Up button at the top right of the screen. Then you are well on your way to becoming ripped!</p>
    </div>
    <div v-else>
      <h1>Hello {{name}}! Welcome to Fitness Tracker!</h1>
      <p>You can get started by adding some exercises to your schedule! Click the Schedule button on the navigation bar above. Then you are well on your way to becoming ripped!</p>
    </div>
    
    
  </div>
</template>

<script>
import Session from "../services/session";
export default {
  name: 'Home',
  components: {
  },
  data() {
    return{
      Session,
      user: Session.user,

    }
  },
  computed: {
    name(){
      return this.user.firstName;
    }
  }
}
</script>
