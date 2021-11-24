<template>
  <div>
      <nav class="navbar is-info" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://www.clipartmax.com/png/small/190-1907892_clipart-of-the-man-running-icon-running-man-icon-png.png" alt="Clipart Of The Man Running Icon - Running Man Icon Png @clipartmax.com">
    </a>

    <a id="burger" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{'is-active': isActive }" @click="isActive = !isActive; activateBurger();">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>


  <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{ 'is-active': activator }">
    <div class="navbar-start">
      <router-link class="navbar-item" to="/" active-class="is-active" exact>
        Home
      </router-link>
      
      <router-link class="navbar-item" to="/feed" active-class="is-active">
        Feed
      </router-link>

      <router-link class="navbar-item" to="/friends" active-class="is-active">
        Friends
      </router-link>

      <router-link class="navbar-item" to="/schedule" active-class="is-active">
        Schedule
      </router-link>

      <router-link class="navbar-item" to="/about" active-class="is-active">
        About
      </router-link>
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
      isActive: false,
      activator: false
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
    },
    activateBurger(){
      this.activator = !this.activator;
      return this.activator;
    }
  },
  

}
</script>

<style>

</style>