<template>
  <v-layout
    align-center
    column
    justify-center
  >
    <v-flex
      sm8
      xs12
    >
      <v-card min-width="400px">
        <v-card-title>
          <h1>Nuxt chat</h1>
        </v-card-title>
        <v-card-text>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="name"
              :counter="16"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="room"
              :rules="roomRules"
              label="Room"
              required
            ></v-text-field>
            <v-btn
              :disabled="!valid"
              class="mr-4"
              color="primary"
              @click="submit"
            >
              Enter room
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
      <v-snackbar
        v-model="snackbar"
        right
        top
        :timeout="6000"

      >
        {{ text }}

          <v-btn
            color="white"
            flat
            @click="snackbar = false"
          >
            Close
          </v-btn>
      </v-snackbar>
    </v-flex>
  </v-layout>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  layout: "empty",

  head: {
    title: 'Welcome Nuxt chat'
  },

  data: () => ({
    snackbar: false,
    text: ``,
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 16) || `Name must be less than 16 characters`,
    ],
    room: '',
    roomRules: [
      v => !!v || 'Text is required',
    ],
  }),

  sockets: {
    connect() {
      console.log('Client IO connected')
    }
  },

  methods: {
    ...mapMutations(['setUser']),
    submit() {
      if (this.$refs.form.validate()) {
        const user = {
          name: this.name,
          room: this.room,
        }

        this.$socket.emit('userJoined', user, data => {
          if(typeof data === "string") {
            console.error(data)
          } else {
            user.id = data.userId
            this.setUser(user)
            this.$router.push('/chat')
          }
        })
      }
    },
  },
  mounted() {
    const {message} = this.$route.query
    if (message === 'noUser') {
      this.text = 'Data required'
    } else if (message === 'leftChat') {
      this.text = 'Chat left'
    }
    this.snackbar = !!this.text
  },
}
</script>
<style >

</style>
