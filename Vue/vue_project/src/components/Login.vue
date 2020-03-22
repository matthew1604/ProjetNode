<template>
  <div id="form">
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-2" label="Email :" label-for="input-2">
        <b-form-input
          id="input-3"
          v-model="email"
          type="text"
          required
          placeholder="Entrez votre email"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Mot de passe :" label-for="input-3">
         <b-form-input
          id="input-3"
          v-model="password"
          type="text"
          required
          placeholder="Entrez votre mot de passe"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Se connecter</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
  export default {
    name: "Inscription",
    data() {
      return {
          email: '',
          password: ''
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        axios
        .post("https://projet-js-nasi-vergely.herokuapp.com/login", {
          email: this.email,
          password: this.password
          })
        .then(response => {
          console.log(response.data)
          this.$router.push("/")
        })
        .catch(error => console.log(error));
      }
    } 
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#form {
    margin: 5%;
}
</style>