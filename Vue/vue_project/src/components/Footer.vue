<template>
  <div id="footer">
    <p>Projet par NASI Bénédicte et VERGELY Matthew</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
  position: absolute;
  bottom: 0;
  background-color: whitesmoke;
  height: 10%;
  width: 100%;
}

p {
  margin-top: 1%;
  margin-left: 1%;
  color: gray;
}
</style>