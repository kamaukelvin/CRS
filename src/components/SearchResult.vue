<template>
  <v-data-table :headers="headers" :items="results" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Search Result</v-toolbar-title>
        <v-dialog v-model="dialog">
          <v-card>
            <v-card-title class="bg-light card__header">
              Confirm Records
                <v-btn
            icon
            color="red"
            class="ml-auto"
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
            </v-card-title>
            <v-card-text class="p-5">
              <ConfirmRecords />
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-3" color="green" @click="verifyItem(item)">
        mdi-check-decagram
      </v-icon>
      <v-icon small @click="editItem(item)">
        mdi-pencil
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import ConfirmRecords from "../components/ConfirmRecords";
export default {
  data: () => ({
    dialog: false,
    headers: [
      { text: "Entry Number", value: "entry_number", sortable: false },
      { text: "Entry Date", value: "entry_date", sortable: false },
      { text: "Child Name", value: "child_name", sortable: false },
      { text: "Date of Birth", value: "dob", sortable: false },
      { text: "Mother ID", value: "mother_id", sortable: false },
      { text: "Mother Name", value: "mother_name", sortable: false },
      { text: "Father ID", value: "father_id", sortable: false },
      { text: "Father Name", value: "father_name", sortable: false },
      { text: "Registra Name", value: "registra", sortable: false },
      { text: "Actions", value: "actions", sortable: false },
    ],
    results: [],
  }),
  components: {
    ConfirmRecords,
  },

  computed: {},

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.results = [
        {
          entry_number: 23456777,
          entry_date: "24/12/2020",
          child_name: "Regina Omondi",
          dob: "24/12/2020",
          mother_id: 1234567,
          mother_name: "Janet Omondi",
          father_name: "Victor Omondi",
          father_id: 34567833,
          registra: "Kinuthia",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.results.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    verifyItem(item) {
      this.editedIndex = this.results.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style>
.card__header{
    position: sticky;
    top: 0;
    z-index: 2345;
}
</style>
