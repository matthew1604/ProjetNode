<template>
    <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand id="title"><router-link to="/">{{title}}</router-link></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item><router-link to="/articles">Liste des articles</router-link></b-nav-item>
            <b-nav-item><router-link to="/create-article">Créer un article</router-link></b-nav-item>
            <b-nav-item><router-link to="/modify-article">Modifier un article</router-link></b-nav-item>
            <b-nav-item><router-link to="/delete-article">Supprimer un article</router-link></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-button  size="sm" class="my-2 my-sm-0"><router-link to="/inscription">Inscription</router-link></b-button>
          <b-button size="sm" class="my-2 my-sm-0" id="btninscription">Se connecter</b-button>
        </b-nav-form>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: "Header",
  props: {
    title: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#title a{
    size: 30px;
    font-weight: bold;
    color: white;
}
a {
    text-decoration: none;
    color:rgba(255, 255, 255, 0.5);
}

a:hover {
    color:rgba(255, 255, 255, 0.9);
}

</style>
