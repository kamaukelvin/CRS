<template>
  <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
       <v-flex xs6>
       <v-text-field
        v-model="motherData.firstName"
        label="First Name"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="motherData.middleName"
        label="Middle Name"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="motherData.fatherName"
        label="Father Name"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="motherData.dob"
        label="Date of Birth"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="motherData.others"
        label="Others (specify)"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="motherData.nature_of_birth"
        label="Nature of birth"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="motherData.sex"
        label="Sex"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="motherData.type_of_birth"
        label="Type of birth"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="motherData.weight"
        label="Weight at birth"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="motherData.place_of_birth"
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
    name: 'MotherData',
    data:()=>({
      motherData:{
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