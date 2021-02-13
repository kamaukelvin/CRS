<template>
  <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
       <v-flex xs6>
       <v-text-field
        v-model="informant.capacity"
        label="Capacity of Informant"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="informant.full_name"
        label="Full Name of Informant"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="informant.document_type"
        label="Document Type"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="informant.document_number"
        label="Document Number"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="informant.date_of_activation"
        label="Date of activation"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
     </v-layout>
</v-container>
</template>

<script>
export default {
    name: 'informant',
    data:()=>({
      informant:{
        capacity:'medical attendant',
        full_name:'Odhiambo',
        document_type:'ID Number',
        document_number:"67456738",
        date_of_activation:'12/01/2021'

      }

      }),

    

}
</script>

<style>

</style>