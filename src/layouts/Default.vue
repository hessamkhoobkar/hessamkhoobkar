<template>
  <div id="app">

    <Header />

    <transition name="fade" appear>
      <main class="main">
        <slot/>
      </main>
    </transition>

    <transition name="fade" appear>
    <footer class="footer">
      <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}. </span>
      <span class="footer__links">Powered by <a href="//gridsome.org"> Gridsome </a></span>
    </footer>
    </transition>

  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {

  components: {
    Header
  }
}
</script>

<style lang="scss">
  .main {
    margin-bottom: 10rem;
  }
  .main.post-list {
    margin-top: 6rem;
  }
</style>