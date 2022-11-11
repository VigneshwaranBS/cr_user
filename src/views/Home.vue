<template>
  <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-card ref="form">
        <v-card-title>Complaint Crime</v-card-title>
        <v-card-text>
          <v-text-field
            label="First Name *"
            filled
            dense
            v-model="firstname"
            required
          ></v-text-field>
          <v-text-field
            label="Last Name * "
            filled
            dense
            v-model="lastname"
            required
          ></v-text-field>
          <v-text-field
            label="Aadhar No *"
            filled
            dense
            v-model="aadharno"
            required
          ></v-text-field>
          <v-text-field
            label="Address *"
            filled
            dense
            v-model="address"
            required
          ></v-text-field>
          <v-text-field
            label="Crime Place *"
            filled
            dense
            v-model="crimeplace"
            required
          ></v-text-field>
          <v-text-field
            label="Crime Type *"
            filled
            dense
            v-model="crimetype"
            required
          ></v-text-field>
          <v-text-field
            label="Crime Time *"
            filled
            dense
            v-model="crimetime"
            required
          ></v-text-field>
          <v-text-field
            label="Crime Evidance *"
            filled
            dense
            v-model="crimeevidance"
            required
          ></v-text-field>
          <v-btn
            depressed
             color="primary"
             @click="submit"
            >
            Submit
             </v-btn>
        </v-card-text>
        <!-- <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn text>
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              left
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn
            color="primary"
            text
            @click="submit"
          >
            Submit
          </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-col>
  </v-row>
</template>


<script>
// import firebase from "firebase/app"
import {addDatas } from "../service"
  export default {
    name:'Home',
    data: () => ({
      firstname:null,
      lastname:null,
      aadharno:null,
      address:null,
      crimeplace:null,
      crimetype:null,
      crimetime:null,
      crimeevidance:null,
    }),
    methods:{
    async submit() {
      console.log("details added");
        const datas = {
          firstname: this.firstname,
          lastname: this.lastname,
          aadharno: this.aadharno,
          address: this.address,
          crimeplace: this.crimeplace,
          crimetype: this.crimetype,
          crimetime: this.crimetime,
          crimeevidance: this.crimeevidance,

        };
        console.log("data added", datas);

      await addDatas.addData(datas);
      alert("Complaint Registered Successfully !")
    },
  }
   
  }
</script>

<style>

</style>