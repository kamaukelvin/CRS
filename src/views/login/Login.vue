<template>
  <div>
    <div class="row">
      <div class="col-md-6 login__background">
        <div class="container">
          <h1>CRS</h1>
          <h5>Sub-County Registra</h5>
          <p>Adjudicates B1 Form</p>
        </div>
      </div>
      <div class="col-md-6 position-relative">
        <v-form ref="form" class="login__form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="form.email"
            prepend-icon="mdi-account"
            :rules="emailRules"
            label="Email"
            required
          ></v-text-field>

          <v-text-field
            v-model="form.password"
            :rules="passwordRules"
            prepend-icon="mdi-lock"
            type="password"
            label="Password"
            required
          ></v-text-field>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4 mt-3 float-right"
            @click="validate"
          >
            Login
          </v-btn>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",

  data: () => ({
    valid: true,
    form: {
        email: "",
        password: "",
      },
      
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [],
  }),
  methods: {
    ...mapActions(["LogIn"]),

    async validate() {
      //  run validation first
      this.$refs.form.validate();

      // make api call
      let user = new FormData();
      user.append("email", this.form.email);
      user.append("password", this.form.password);
      try {
        console.log("the user in login comp", user)
        await this.LogIn(user);
        this.$router.push({ name: "dashboard" });
      } catch (err) {
        console.log("The Login error here", err);
      }
    },
  },
};
</script>

<style scoped>
.login__background {
  display: flex;
  justify-content: start;
  align-items: start;
  background: linear-gradient(180deg, #0e24ed 0%, #35a167 100%);
  height: 100vh;
}
.login__background h1 {
  color: #fff;
  font-size: 70px;
}
.login__background p,
.login__background h5 {
  color: #fff;
}
.login__form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 70px;
}
</style>
