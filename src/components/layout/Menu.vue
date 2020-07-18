<template>
  <aside id="main-menu" class="bg-gray-800 text-white h-screen w-screen fixed inset-0 aside z-50">
    <div class="container mx-auto flex justify-between items-center">
      <g-link to="/">
        <h1 class="text-4xl font-bold tracking-tighter">Khoobkar</h1>
      </g-link>
      <button
        class="p-3 cursor-pointer hover:bg-gray-700 transition duration-300 ease-in-out"
        @click="menuRemove"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="-6 -6 24 24"
          width="48"
          height="48"
          preserveAspectRatio="xMinYMin"
        >
          <path
            d="M7.314 5.9l3.535-3.536A1 1 0 109.435.95L5.899 4.485 2.364.95A1 1 0 10.95 2.364l3.535 3.535L.95 9.435a1 1 0 101.414 1.414l3.535-3.535 3.536 3.535a1 1 0 101.414-1.414L7.314 5.899z"
          />
        </svg>
      </button>
    </div>
    <div class="container mx-auto flex justify-between items-center">
      <p>HI</p>
    </div>
  </aside>
</template>

<script>
export default {
  methods: {
    menuRemove: function(event) {
      document.getElementById("main-menu").classList.add("aside");
    }
  }
};
</script>

<style>
#main-menu {
  transition: all 0.9s cubic-bezier(0, 0.86, 0.09, 1);
}
.aside {
  transform: translateY(-100%);
}
</style>
