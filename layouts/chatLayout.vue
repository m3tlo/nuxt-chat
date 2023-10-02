<template>
  <v-app app dark>
    <v-navigation-drawer v-model="drawer" app mobile-break-point="650px">

      <v-list subheader>
        <v-subheader>User list</v-subheader>
        <v-list-tile
          v-for="usr in users"
          :key="usr.id"
          @click.prevent
        >
          <v-list-tile-content>
            <v-list-tile-title >{{usr.name}}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon >
              <i class="fa-regular fa-message" :style="{color: usr.id === user.id ? 'primary' : 'grey'}"></i>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>

    <v-toolbar app>
      <v-toolbar-side-icon @click="drawer = !drawer">
        <v-btn icon>
          <i class="fa-solid fa-bars fa-lg"></i>
        </v-btn>
      </v-toolbar-side-icon>
      <v-btn icon @click="exit">
        <i class="fa-solid fa-arrow-left fa-lg"></i>
      </v-btn>
      <v-toolbar-title>Chat room {{ user.room }}</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <div style="height: 100%">
        <nuxt/>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  computed: mapState(["user", "users"]),
  data: () => ({
    drawer: true,
  }),
  methods: {
    ...mapMutations(["clearData"]),
    exit() {
      this.$socket.emit('userLeft', this.user.id, () => {
        this.$router.push('/?message=leftChat')
        this.clearData()
      })
    },
  },
}
</script>
<style src="assets/fontawesome-free-6.4.2-web/css/all.css"></style>
<style scoped>
/*.fa-bars {*/
/*  cursor: pointer;*/
/*}*/

</style>
