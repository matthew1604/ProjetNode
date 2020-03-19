<template>
  <div id="form">
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="input-group-1" label="Titre de l'article :" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.title"
          type="text"
          required
          placeholder="Entrez un titre"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Contenu :" label-for="input-2">
          <b-form-textarea
            id="input-2"
            v-model="form.description"
            placeholder="Entrez votre texte"
            rows="3"
            max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    name: "CreateArticle",
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