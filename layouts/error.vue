<template>
<v-app app dark>
  <v-content c>
    <v-container >
      <v-flex >
        <h1>404</h1>
        <h2 center>Page not found</h2>
      </v-flex>
    </v-container>
  </v-content>
</v-app>
</template>

<script>
export default {
name: "error"
}
</script>

<style scoped>
.v-content{
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.flex {
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
