<template>
  <div id="form">
    <h2>Créer un article</h2>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="Titre de l'article :" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="title"
          type="text"
          required
          placeholder="Entrez un titre"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Contenu :" label-for="input-2">
          <b-form-textarea
            id="input-2"
            v-model="description"
            placeholder="Entrez votre texte"
            rows="3"
            max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">Créer</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
  export default {
    name: "CreateArticle",
    data() {
      return {
        title: '',
        description: ''
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        axios
        .post("https://projet-js-nasi-vergely.herokuapp.com/add-article", {
          title: this.title,
          body: this.description,
          author_id: 1
        })
        .then(response => {
          console.log(response.data)
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
h2 {
  text-align: center;
}
</style>