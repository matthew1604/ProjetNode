<template>
  <div>
    <div v-for="article in articles" :key="article._id">
      <b-card :title="article.title" :sub-title="article.author_id">
        <p @click="setId(article.id)"><router-link class="card-link" to="/detail-article" >Voir l'article</router-link></p>
      </b-card>
    </div>
</div>
</template>

<script>
export default {
  name: "ListArticles",
  data() {
    return {
      articles: []
    };
  },
  created() {
   this.articles = this.$store.state.articles;
  },
  methods: {
    setId(id){
      this.$store.commit("setId",id)
      console.log(this.$store.state.id)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>


