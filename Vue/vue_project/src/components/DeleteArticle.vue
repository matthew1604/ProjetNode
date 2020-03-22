<template>
  <div>
    <h2>Supprimer un article</h2>
    <div id="content">
       <p>Sélectionnez l'article à supprimer</p>
       <b-form-select v-model="selected" :options="options"></b-form-select>
        <b-button type="submit" @click="onSubmit" variant="primary">Supprimer l'article</b-button> 
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
  export default {
    name: "DeleteArticle",
    data() {
      return {
        articles: [],
        options: [],
        selected: null,
        id: 0
      }
    },
    created() {
        this.articles = this.$store.state.articles;
        for (let i=0; i<this.articles.length;i++){
            this.options.push(this.articles[i].title)
        }
    },
    methods: {
        getId() {
            for (let i=0; i<this.articles.length;i++){
                if(this.articles[i].title === this.selected){
                    this.id = this.articles[i].id;
                }
            }
        },
        onSubmit(evt) {
            evt.preventDefault()
            this.getId()
            axios
            .post("https://projet-js-nasi-vergely.herokuapp.com/remove-article", {
            id: this.id
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