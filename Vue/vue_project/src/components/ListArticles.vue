<template>
  <div>
    <b-card title="Titre de l'article" sub-title="Auteur">
      <router-link class="card-link" to="/detail-article">Voir l'article</router-link>
    </b-card>
</div>
</template>

<script>
export default {
  name: "ListArticles",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>


