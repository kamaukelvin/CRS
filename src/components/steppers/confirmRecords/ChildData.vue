<template>
  <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
       <v-flex xs6>
       <v-text-field
        v-model="childData.firstName"
        label="First Name"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="childData.middleName"
        label="Middle Name"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="childData.fatherName"
        label="Father Name"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="childData.dob"
        label="Date of Birth"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="childData.others"
        label="Others (specify)"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="childData.nature_of_birth"
        label="Nature of birth"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="childData.sex"
        label="Sex"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="childData.type_of_birth"
        label="Type of birth"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="childData.weight"
        label="Weight at birth"
        outlined
        dense
       background-color="#F3F4F9"
        disabled
      ></v-text-field>
       </v-flex>
       <v-flex xs6>
         <v-text-field
        v-model="childData.place_of_birth"
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
    name: 'ChildData',
    data:()=>({
      childData:{
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