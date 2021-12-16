<template>
<div>
  <div class="columns">
    <div class="column is-one-third is-offset-one-third">
      <div class="card" style="padding:10px" v-for="(p, i) in p_user.schedule" :key="p">
        <p>Type: {{ar_type[p.type]}}</p>
        <p>exercise: {{list[p.type][p.exercise].label}}</p>
        <p>From: {{p.from}}</p>
        <p>To: {{p.to}}</p>
        <p>With:</p> <p v-for="j in p.with" :key="j">{{j.handle}}</p>
        <p>Notes:  {{p.notes}}</p>
        <button class="button" @click="removeEx(i)">Remove</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import list from '../services/exercises';
import session from '../services/session';
import { Update } from '../services/users';
const ar_type=["Endurance","Strength","Balance","Flexibility"];
export default {
  data(){
    return{
      session,
      p_user: { schedule: session.user.schedule },
      ar_type,
      list,
    }
  },
  methods: {
    removeEx(index){
      this.p_user.schedule.splice(index, 1);
      Update(session.user._id, this.p_user);
    }
  }
}
</script>

<style>
.card{
  background-color:#315283;
  color:white;
}
</style>