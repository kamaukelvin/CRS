<template>
          <v-card :loading="loading" class="">
            <template slot="progress">
              <v-progress-linear
                color="#35A19E"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-card-title class="card-title">Search Record</v-card-title>

            <v-card-text>
                      <!-- search bar -->
        <div class="my-10">
          <div class="input-group">
            <select class="form-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <input
              type="text"
              class="form-control"
              aria-label="Text input with 2 dropdown buttons"
            />
            <button
              class="btn btn-danger text-white"
              type="button"
              aria-expanded="false"
              @click="reserve"
            >
              Search<span class="ml-2">
                <v-icon small color="white">
                  mdi-magnify
                </v-icon></span
              >
            </button>
          </div>
          </div>
          <!-- end of search bar -->
              
               </v-card-text>
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
    name:'SearchResult',
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