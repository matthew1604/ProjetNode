<template>
  <div id="form">
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="input-group-1" label="Nom :" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.title"
          type="text"
          required
          placeholder="Entrez votre nom"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Email :" label-for="input-2">
          <b-form-input
          id="input-3"
          v-model="form.title"
          type="text"
          required
          placeholder="Entrez votre email"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Mot de passe :" label-for="input-3">
         <b-form-input
          id="input-3"
          v-model="form.title"
          type="text"
          required
          placeholder="Entrez un mot de passe"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">S'inscrire</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    name: "Inscription",
    data() {
      return {
        form: {
          title: '',
          description: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
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