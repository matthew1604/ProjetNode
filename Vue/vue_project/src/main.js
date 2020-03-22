// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router";
import Home from "./components/Home";
import ListArticles from "./components/ListArticles";
import CreateArticle from "./components/CreateArticle";
import DeleteArticle from "./components/DeleteArticle";
import ModifyArticle from "./components/ModifyArticle";
import Inscription from "./components/Inscription";
import DetailArticle from "./components/DetailArticle";
import Login from "./components/Login";
import { BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)
Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/"
  },
  {
    name: "ListArticles",
    component: ListArticles,
    path: "/articles"
  },
  {
    name: "CreateArticle",
    component: CreateArticle,
    path: "/create-article"
  },
  {
    name: "DeleteArticle",
    component: DeleteArticle,
    path: "/delete-article"
  },
  {
    name: "ModifyArticle",
    component: ModifyArticle,
    path: "/modify-article"
  },
  {
    name: "Inscription",
    component: Inscription,
    path: "/inscription"
  },
  {
    name: "DetailArticle",
    component: DetailArticle,
    path: "/detail-article"
  },
  {
    name: "Login",
    component: Login,
    path: "/login"
  }
];

const router = new VueRouter({
  routes
});

const store = new Vuex.Store({
  state: {
    articles: [],
    id: 0
  },
  mutations: {
    loadArticles(state) {
      axios
      .post("https://projet-js-nasi-vergely.herokuapp.com/articles")
      .then(response => {
        state.articles = [];
        for (let i=0; i<response.data.length; i++){
          state.articles.push(response.data[i])
        }
      })
      .catch(error => console.log(error));
    },
    setId(state, id){
      state.id = id;
    }
  }
});

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
