<template>
  <div>
      <nav class="navbar is-info" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://www.clipartmax.com/png/small/190-1907892_clipart-of-the-man-running-icon-running-man-icon-png.png" alt="Clipart Of The Man Running Icon - Running Man Icon Png @clipartmax.com">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" @click="home">
        Home
      </a>
      
      <a class="navbar-item" @click="feed">
        Feed
      </a>

      <a class="navbar-item" @click="friends">
            Friends
      </a>

      <a class="navbar-item" @click="about">
            About
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <login-badge />
      </div>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
import session from "../services/session";
import LoginBadge from './LoginBadge';
export default {
  data(){
    return {
      isActive: false
    }
  },
  components: {
    LoginBadge,
  },
  methods: {
    home(){
      this.$router.push('/');
    },
    feed(){
      if(session.user === null){
        this.$router.push('/login');
      }
      else{
        this.$router.push('/feed');
      }
    },
    friends(){
      if(session.user === null){
        this.$router.push('/login');
      }
      else{
        this.$router.push('/friends');
      }
    },
    about(){
      this.$router.push('/about');
    }
  }
}
</script>

<style>

</style>