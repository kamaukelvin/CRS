<template>
  <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
       <v-flex xs6>
       <v-text-field
        v-model="fatherData.firstName"
        label="First Name"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="fatherData.middleName"
        label="Middle Name"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="fatherData.fatherName"
        label="Father Name"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="fatherData.dob"
        label="Date of Birth"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="fatherData.others"
        label="Others (specify)"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="fatherData.nature_of_birth"
        label="Nature of birth"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="fatherData.sex"
        label="Sex"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="fatherData.type_of_birth"
        label="Type of birth"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="fatherData.weight"
        label="Weight at birth"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="fatherData.place_of_birth"
        label="Place of birth"
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
    name: 'FatherData',
    data:()=>({
      fatherData:{
        firstName:'test',
        middleName:'Odhiambo',
        fatherName:'Bernard Otieno',
        dob:"12/01/2021",
        others:'none',
        nature_of_birth:'Born alive',
        sex:'Male',
        type_of_birth:'Single',
        weight:'13kg',
        place_of_birth:'Kilimani'

      }

      }),

    

}
</script>

<style>

</style>