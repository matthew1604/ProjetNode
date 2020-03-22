<template>
  <div id="article">
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
        <b-col md="6">
            <b-card-body :title="article.title" :sub-title="article.author_id">
            <b-card-text>
                {{article.body}}
            </b-card-text>
            </b-card-body>
        </b-col>
        </b-row>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DetailArticle",
  data() {
    return {
      article: []
    };
  },
  methods: {
    load(){
      axios
      .post("https://projet-js-nasi-vergely.herokuapp.com/article/"+this.$store.state.id)
      .then(response => {
        this.article = response.data
      })
      .catch(error => console.log(error));
    }
  },
  created() {
      this.load()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#article{
    margin: 5% 5%;
}
</style>


