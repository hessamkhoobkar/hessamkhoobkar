<template>
  <header class="bg-gray-800 text-white">
    <div class="container mx-auto flex justify-between items-center">
      <g-link to="/">
        <h1 class="text-4xl font-bold tracking-tighter">Khoobkar</h1>
      </g-link>
      <button
        class="p-3 cursor-pointer hover:bg-gray-700 transition duration-300 ease-in-out"
        @click="menuAdd"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="-5 -7 24 24"
          width="48"
          height="48"
          preserveAspectRatio="xMinYMin"
        >
          <path
            d="M1 0h5a1 1 0 110 2H1a1 1 0 110-2zm7 8h5a1 1 0 010 2H8a1 1 0 110-2zM1 4h12a1 1 0 010 2H1a1 1 0 110-2z"
          />
        </svg>
      </button>
    </div>
    <SiteMenu />
  </header>
</template>

<script>
import SiteMenu from "@/components/layout/Menu";

export default {
  components: {
    SiteMenu
  },
  data: function() {
    return {
      name: "Vue.js"
    };
  },
  methods: {
    menuAdd: function(event) {
      document.getElementById("main-menu").classList.remove("aside");
    }
  }
};
</script>

<style></style>
