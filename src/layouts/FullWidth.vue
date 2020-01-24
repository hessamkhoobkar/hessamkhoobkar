<template>
  <div id="app">

    <Header />

    <transition name="fade" appear>
      <main>
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

</style>
