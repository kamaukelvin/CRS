<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <Sidebar />
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer">
      </v-app-bar-nav-icon>
      <v-toolbar-title>Civil registration and vital statistics system</v-toolbar-title>
    </v-app-bar>

    <v-main class="p-0">
      <v-container>
           <h1 class="title">Birth Registrations</h1>
            <!-- <SearchResult/> -->
            <ConfirmRecords/>
        
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "../../components/Sidebar";
 //import SearchResult from "../../components/SearchResult";
 import ConfirmRecords from "../../components/ConfirmRecords";

export default {
  name: "Dashboard",
  components: {
    Sidebar,
     //SearchResult,
     ConfirmRecords,
  },
  data: () => ({
    loading: false,
    drawer: null,
  }),
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style scoped>
header{
    background: linear-gradient(90.28deg, #35A19E 0.24%, #35A19E 64.53%)  !important;
    height:75px !important;
    padding:20px;
    display:flex;
    justify-content:start;
    align-items:center;
    color: #fff !important
}
    
.title {
  color: #000;
  font-weight: bold;
  font-size: 24px;
  margin: 30px 0;
}


</style>
