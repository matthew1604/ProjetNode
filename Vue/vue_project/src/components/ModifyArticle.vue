<template>
  <div>
    <h2>Modifier un article</h2>
    <div id="content" v-if="!show">
       <p>Sélectionnez l'article à modifier</p>
       <b-form-select v-model="selected" :options="options"></b-form-select>
        <b-button type="submit" @click="modify" variant="primary">Modifier l'article</b-button>
    </div>
    <div id="content" v-else>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="Titre de l'article :" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="title"
          type="text"
          required
          :placeholder="selected"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Contenu :" label-for="input-2">
          <b-form-textarea
            id="input-2"
            v-model="description"
            :placeholder="selectedDescription"
            rows="3"
            max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">Modifier</b-button>
      <b-button type="submit" @click="modify" variant="danger">Annuler</b-button> 
    </b-form>
  </div>
  </div>
</template>

<script>
import axios from "axios";
  export default {
    name: "ModifyArticle",
    data() {
      return {
        articles: [],
        options: [],
        selected: null,
        selectedDescription: null,
        title: '',
        description: '',
        show: false
      }
    },
    created() {
        this.articles = this.$store.state.articles;
        for (let i=0; i<this.articles.length;i++){
            this.options.push(this.articles[i].title)
        }
    },
    methods: {
        modify() {
            for (let i=0; i<this.articles.length;i++){
                if(this.articles[i].title === this.selected){
                    this.selectedDescription = this.articles[i].body;
                }
            }
            if(!this.show){
              this.show = true;  
            }
            else {
              this.show = false;  
            }
        },
        onSubmit(evt) {
            evt.preventDefault()
            axios
            .post("https://projet-js-nasi-vergely.herokuapp.com/update-article", {
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
h2 {
    margin-top: 5%;
    text-align: center;
}
#content {
    margin: 2%;
}

#content button {
    display: block;
    margin : 2% auto;
}
</style>