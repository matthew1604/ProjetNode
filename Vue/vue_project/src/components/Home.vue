<template>
  <div>
    <b-jumbotron header="Blog" lead="Bienvenue sur le blog" id="description">
      <p>Pour voir la liste des articles <router-link to="/articles">cliquez ici</router-link></p>
    </b-jumbotron>
</div>
</template>

<script>
export default {
  name: 'Home',
  created() {
    this.$store.commit("loadArticles");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#description {
  margin-top: 5%;
}
</style>
