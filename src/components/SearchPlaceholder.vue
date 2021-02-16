<template>
          <v-card :loading="loading" class="">
            <template slot="progress">
              <v-progress-linear
                color="#35A19E"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-card-title class="card-title">Search Record</v-card-title>

            <div class="row card-body">
              <div class="col-md-3 d-flex flex-wrap justify-content-center align-items-center">
                <v-img max-height="150" max-width="150" :src="image"></v-img>
              </div>
              <div class="col-md-9">
               <p>You can search a record by: </p>
               <ul class="placeholder__list">
                 <li>ABN Serial Number</li>
                 <li>Name of the child (first name, middle name, surname)</li>
                 <li>Date of Birth</li>
                 <li>Name of the mother (first name, middle name, surname)</li>
                 <li>Name of the father (first name, middle name, surname)</li>
                 <li>District of birth</li>
                 </ul>
              </div>
            </div>
          </v-card>
</template>

<script>
import image from "../assets/images/Group.png";
export default {
    name:'SearchPlaceholder',
    data: () => ({
    image: image,
  }),
 

}
</script>

<style scoped>
.card-title {
  background: #3b5f85;
  color: #fff;
  font-size: 16px;
  letter-spacing: 0.1px;
  text-transform: uppercase;
}
.placeholder__list{
  list-style-type: none;
  margin: 0;
  padding: 0;

}
.placeholder__list li{
  font-weight: bold;
  
}
.placeholder__list li:before {
 content: '✓'; 
 color:#35A19E;
 margin-right: 10px;
}
</style>