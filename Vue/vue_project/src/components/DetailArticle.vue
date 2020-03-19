<template>
  <div id="article">
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
        <b-col md="6">
            <b-card-body title="Titre de l'article" sub-title="Auteur">
            <b-card-text>
                This is a wider card with supporting text as a natural lead-in to additional content.
                This content is a little bit longer.
            </b-card-text>
            </b-card-body>
        </b-col>
        </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "DetailArticle",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#article{
    margin: 5% 5%;
}
</style>


