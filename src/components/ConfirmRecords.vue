<template>
<div class="row">
    <div class="col-md-7">
        <p>SERIAL NO. <span class="font-weight-bold">4567878</span></p>
  <v-stepper v-model="curr" color="green">
                <v-stepper-header class="elevation-0">
                    <v-stepper-step 
                        v-for="(step,n) in steps"
                        :key="n"
                        :complete="stepComplete(n+1)"
                        :step="n+1"
                        :color="stepStatus(n+1)">
                        {{ step.name }}
                    </v-stepper-step>
                </v-stepper-header>
                <v-stepper-content v-for="(component,n) in components" :step="n+1" :key="n" class="component">
               
                    <component v-bind:is="component"></component>

                    <v-btn  class="float-right btn-primary btn-sm" v-if="n+1 < lastStep"  @click="curr = n+2">Next</v-btn>
                    <v-btn class="float-right btn-sm" v-else color="success" @click="done()">Acivate Record</v-btn>
                    <v-btn  class="float-right btn-sm btn-secondary mr-2" text @click="curr = n">Back</v-btn>
                </v-stepper-content>
            </v-stepper>
            </div>
            <div class="col-md-5 preview d-flex justify-content-center align-content-center" v-viewer="{movable: false}" @click="show">

      <img v-for="src in images" :src="src" :key="src" class="preview__img">
   
    
            </div>
            </div>
</template>

<script>
import ChildData from './steppers/confirmRecords/ChildData'
import FatherData from './steppers/confirmRecords/FatherData'
import MotherData from './steppers/confirmRecords/MotherData'
import Informant from './steppers/confirmRecords/Informant'
import Birth from '../assets/images/birth.png'
  import 'viewerjs/dist/viewer.css'
  import Viewer from 'v-viewer'
  import Vue from 'vue'
Vue.use(Viewer)
export default {
    name:'ConfirmRecords',
       data: () => ({
        curr: 1,
        lastStep: 4,
        steps: [
            {name: "CHILD",},
            {name: "MOTHER"},
            {name: "FATHER"},
            {name: "INFORMANT"},
        ],
        images: [Birth]
    }),
        methods: {
        stepComplete(step) {
            return this.curr > step
        },
        stepStatus(step) {
            return this.curr > step ? 'green' : '#35A19E'
        },
        done() {
            this.curr = 5
        },
         show () {
        const viewer = this.$el.querySelector('.preview').$viewer
        viewer.show()
      }
    },
    computed:{
components(){
       return [
         ChildData,
         MotherData,
         FatherData,
         Informant
       ];
}
}

}
</script>

<style>
.preview__img{
    width: 80%;
    height:80%
}
</style>