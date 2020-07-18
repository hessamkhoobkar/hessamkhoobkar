<template>
  <div>
    <SiteHeader />
    <transition name="fade" appear>
      <slot />
    </transition>
    <SiteFooter />
  </div>
</template>

<script>
import config from "~/.temp/config.js";

import SiteHeader from "@/components/layout/Header";
import SiteFooter from "@/components/layout/Footer";

export default {
  components: {
    SiteHeader,
    SiteFooter
  },

  computed: {
    config() {
      return config;
    }
  }
};
</script>

<style src="~/assets/css/main.css"></style>
