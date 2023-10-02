import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'

export default function ({store}) {
  Vue.use(new VueSocketIO({
    debug: false,
    connection: 'http://localhost:3000',
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
    },
  }))
}



// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
