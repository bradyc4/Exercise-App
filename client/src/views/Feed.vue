<template>
<div>
  <div class="columns">
    <div class="column is-one-third is-offset-one-third">
      <div class="card" style="padding:10px" v-for="(p, i) in feed" :key="p">
        <p>Handle: {{handles[i]}}</p>
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
import { GetByHandle } from '../services/users';
const ar_type=["Endurance","Strength","Balance","Flexibility"];
export default {
  data(){
    return{
      session,
      user: session.user,
      schedule: session.user.schedule,
      following: session.user.following,
      ar_type,
      list,
      feed:[],
      handles:[],
    }
  },
  methods: {
      async updateFeed(){
          for(let i=0; i<this.user.following.length; i++){
            GetByHandle(this.user.following[i].handle).then(x =>{
                for(let j=0; j<x.schedule.length; j++){
                    this.feed.push(x.schedule[j]);
                    this.handles.push(x.handle);
                }
            })
          }
      }
  },
  async mounted(){
      this.updateFeed();
  },
}
</script>

<style>
.card{
  background-color:#315283;
  color:white;
}
</style>