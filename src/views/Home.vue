<template>
  <main>
  <v-row justify="center">
    <v-col
      cols="10"
      sm="8"
      md="6"
      lg="4"
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
            type="time"
          ></v-text-field>

          <v-text-field
            label="Crime Date *"
            filled
            dense
            v-model="crimedate"
            required
            type="date"
          ></v-text-field>
          <v-text-field
            label="Crime Evidance *"
            filled
            dense
            v-model="crimeevidance"
            required
          ></v-text-field>
          <v-file-input
            label="Upload Evidance *"
            filled
            v-model="evidancefile"
          ></v-file-input>
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
  </main>

</template>


<script>
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
      crimedate:null,
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
          crimedate:this.crimedate,
          crimeevidance: this.crimeevidance,

        };
        console.log("data added", datas);

      await addDatas.addData(datas);
      // alert("Complaint Registered Successfully !")
    },
  }
   
  }
</script >

<style lang="scss" scoped>
main{
  background: rgb(174,214,238);
background: linear-gradient(90deg, rgba(174,214,238,1) 72%, rgba(148,231,233,1) 100%);
}

</style>