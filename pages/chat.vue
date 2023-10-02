<template>
  <div class="c-wrap">
    <div class="c-chat" ref="block">
      <message v-for="message in messages" :key="message.id" :name="message.name" :text="message.text" :owner="message.id === user.id"/>
    </div>
    <div class="c-form">
      <chat-form/>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import message from "~/components/message";
import chatForm from "~/components/chatForm";

export default {
  layout:'chatLayout',
  name: "chat",
  components: {
    message,
    chatForm,
  },
  head() {
    return {
      title: `Room ${this.user.room}`
    }
  },
  middleware: ['chat'],
  computed: mapState(['user', 'messages']),
  watch: {
    messages() {
      setTimeout(() => {
        this.$refs.block.scrollTop = this.$refs.block.scrollHeight
      }, 0)

    }
  },
}
</script>

<style scoped>
  .c-wrap{
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  .c-form{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    height: 80px;
    background: #212121;
  }
  .c-chat{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 80px;
    padding: 1rem;
    overflow-y: auto;
  }
</style>
