<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>{{count}}</h3>
    <h3>{{isEven}}</h3>
    <button @click="increment">increment</button>
    <button @click="add">add</button>
    <button @click="actionA">actionA</button>
    <button @click="incrementByNum({amount:2})">incrementByNum</button>
    <button @click="global">global</button>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      url: process.env.VUE_APP_URL,
      string: process.env.VUE_APP_STRING,
      number: process.env.VUE_APP_NUMBER
    }
  },
  computed: {
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState(['count']),
    ...mapGetters([
      'isEven'
      // ...
    ])
  },
  methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      'incrementByNum'
    ]),
    ...mapActions({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    }),
    // ...mapActions(['actionA']),
    actionA () {
      this.$store.dispatch('actionA').then(() => {
        console.log('success')
      }).catch(err => {
        console.log(err.message)
      })
    },
    global () {
      console.log(this.number)
      this.number++
    }
  },
  created () {
    // 在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
    }

    // 在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  }
}
</script>
