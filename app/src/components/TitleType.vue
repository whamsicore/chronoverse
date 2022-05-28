
<template>
  <div class="greetings w-full text-center pt-20">
    <p class="title">{{ msg }}</p>
    
    <p class="subtitle">
      A sci-fi world built on crypto
    </p >
    <!-- <VueTyper text='Hello World! I was registered locally!'></VueTyper> -->
  </div>
</template>

<script setup lang="ts">
  import { VueTyper } from 'vue-typer';
  console.log(VueTyper)
  defineProps<{
    msg: string
  }>()


</script>

<style scoped>

  .title {
    @apply text-black w-full text-8xl;
    font-family: ubuntu-bold;
  }

  .subtitle {
    @apply text-lg
  }

  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
  }

  h3 {
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
</style>
