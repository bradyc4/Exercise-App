<template>
<div>
  <div class="columns">
    <div class="column is-one-third is-offset-one-third">
      <div class="card" style="padding:10px" v-for="p in schedule" :key="p">
        <p>Type: {{ar_type[p.type]}}</p>
        <p>exercise: {{list[p.type][p.exercise].label}}</p>
        <p>From: {{p.from}}</p>
        <p>To: {{p.to}}</p>
        <p>Notes: {{p.notes}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import list from '../services/exercises';
import session from '../services/session';
const ar_type=["Endurance","Strength","Balance","Flexibility"];
export default {
  data(){
    return{
      session,
      schedule: session.user.schedule,
      ar_type,
      list,
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