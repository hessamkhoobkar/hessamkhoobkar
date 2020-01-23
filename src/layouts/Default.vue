<template>
  <div id="app">

    <Header />

    <transition name="fade" appear>
      <main class="container default">
        <slot/>
      </main>
    </transition>

    <transition name="fade" appear>
      <Footer />
    </transition>

  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {

  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">

  .container.default {
    background: var(--natural-10);
  }

  // .main {
  //   margin-bottom: 10rem;
  // }
  // .main.post-list {
  //   margin-top: 6rem;
  // }
</style>
