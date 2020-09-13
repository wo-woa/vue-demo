<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" v-on:emit="closed" ref="helloWorld">
      <!-- <template v-slot:second>
        <button @click="increment">incr</button>
      </template> -->
    </HelloWorld>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    closed () {
      console.log('test2')
    }
  },
  data: function () {
    return {
    }
  },
  mounted: function () {
    // eslint-disable-next-line no-unused-expressions
    // console.log(this.$refs.helloWorld)
    this.$refs.helloWorld = function () {
      console.log('父组件修改子组件change')
    }
  }
})
</script>
