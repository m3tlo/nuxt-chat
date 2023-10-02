<template>
  <v-flex
   xs12
  >
    <v-text-field
      label="Input message"
      solo
      v-model="text"
      @keydown.enter="send"
    ></v-text-field>
  </v-flex>
</template>

<script>
export default {
name: "chatForm",
  data: () => ({
    text: '',
  }),
  methods: {
  send() {
    this.$socket.emit('createMessage', {
      text: this.text,
      id: this.$store.state.user.id
    },
      data => {
        if (typeof  data === 'string') {
          console.error(data)
        } else {
          this.text =''
        }
      })
    },
  },
}
</script>

<style scoped>

</style>
