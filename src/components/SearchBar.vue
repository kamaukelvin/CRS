<template>
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
              v-model="keyword"
            />
            <button
              class="btn btn-danger text-white"
              type="button"
              aria-expanded="false"
              @click="onSearch"
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
</template>

<script>
export default {
    name:'SearchBar',


}
</script>

<style>
.form-select{
  background-color:#35A19E !important;
  color: #fff;
  border:#35A19E
}
.form-control:focus {
    border-color: #35A19E;
    box-shadow: none;
}
</style>