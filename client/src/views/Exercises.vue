<template>
  <div>
    <div class="modal" :class="{'is-active': isActive }">
      <div class="modal-background" @click="isActive = false"></div>
      <div class="modal-content">
        <div class="card" style="padding:10px">

            Type
            <div class="dropdown" :class="{'is-active': isActive2 }">
              <div class="dropdown-trigger" @click="isActive2 = !isActive2; isActive3=false">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                  <span>{{ar_type[index]}}</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a class="dropdown-item" @click="index=0; index2=0; isActive2=false; isActive3=false">
                    Endurance
                  </a>
                  <a class="dropdown-item" @click="index=1; index2=0; isActive2=false; isActive3=false">
                    Strength
                  </a>
                  <a class="dropdown-item" @click="index=2; index2=0; isActive2=false; isActive3=false">
                    Balance
                  </a>
                  <a class="dropdown-item" @click="index=3; index2=0; isActive2=false; isActive3=false">
                    Flexibility
                  </a>
                </div>
              </div>
            </div>


            Exercise
            <div class="dropdown" :class="{'is-active': isActive3 }">
              <div class="dropdown-trigger" @click="isActive3 = !isActive3; isActive2=false">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                  <span>{{list[index][index2].label}}</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content" v-for="(p, i) in list[index]" :key="p">
                  <a class="dropdown-item" @click="isActive2=false; isActive3=false; index2=i">
                    {{p.label}}
                  </a>
                </div>
              </div>
            </div>

            <div>
            Day
            <input class="input" type="text" placeholder="Day" @click="isActive2=false; isActive3=false" required v-model="day">
            From
            <input class="input" type="text" placeholder="Time" @click="isActive2=false; isActive3=false" required v-model="from">
            To
            <input class="input" type="text" placeholder="Time" @click="isActive2=false; isActive3=false" required v-model="to">
            Notes
            <textarea class="textarea" placeholder="Notes" @click="isActive2=false; isActive3=false" required v-model="notes"></textarea>  
            <button @click="Submit(); isActive = false">Submit</button>
            <button @click="isActive = false">Cancel</button>
            </div>
            
        </div>        
      </div>
      <button class="modal-close is-large" aria-label="close" @click="isActive = false"></button>
    </div>




    <div class="columns">
      <div class="column is-one-third is-offset-one-third">
        <div class="tabs">
          <ul>
            <li @click="index=0"><button class="button is-info">Endurance</button></li>
            <li @click="index=1"><button class="button is-info">Strength</button></li>
            <li @click="index=2"><button class="button is-info">Balance</button></li>
            <li @click="index=3"><button class="button is-info">Flexibility</button></li>
          </ul>
        </div>                
        <div v-for="(p, i) in list[index]" :key="p.label">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="p.pic" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">{{p.label}}</p>
                  <p class="subtitle is-6">{{p.description}}</p>
                </div>
              </div>
          
              <div class="content">
                <button class="button is-rounded" @click="isActive = true; isActive2=false; isActive3=false; index2=i">Schedule</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>











  </div>
</template>

<script>
import list from "../services/exercises";
import session from '../services/session';
import { Update } from '../services/users';
var index = 0;
var index2 = 0;
const ar_type=["Endurance","Strength","Balance","Flexibility"];
const hours = ["1","2","3","4","5","6","7","8","9","10","11","12"];
const minutes = ["00","05","10","15","20","25","30","35","40","45","50","55"];
const half = ["am","pm"];
export default {
  data(){
    return{
      ourid: session.user._id,
      p_user: { schedule: session.user.schedule },
      day: "",
      from: "",
      to: "",
      notes: "",
      list,
      index,
      index2,
      isActive: false,
      isActive2: false,
      isActive3: false,
      hours,
      minutes,
      half,
      Type_label: "Endurance",
      ar_type,
      session,
      Update,
    }
  },
  methods: {
    Submit(){
      if(this.day && this.from && this.to){
        this.p_user.schedule.push({type: this.index, exercise: this.index2, day: this.day, from: this.from, to: this.to, notes: this.notes});
        Update(session.user._id, this.p_user);
        this.isActive=false;
      } else {
        console.log("error");
      }
    }
  }
}
</script>

<style>

</style>