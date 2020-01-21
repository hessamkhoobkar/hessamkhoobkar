<template>
  <Layout>
    <div class="page-title">
      <h1 class="page-title__title">Builds &amp; experiments</h1>
      <p class="page-title__description">My HTML, CSS, JS experiments and builds</p>
    </div>
    <!-- List posts -->
    <div class="BuildsList">
      <PostCardBuild v-for="edge in $page.builds.edges" :key="edge.node.id" :build="edge.node"/>
    </div>

  </Layout>
</template>

<page-query>
query {
  builds: allBuild(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 513, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import PostCardBuild from '~/components/PostCardBuild.vue'
import Layout from '~/layouts/ArchiveList.vue'

export default {
  components: {
    Layout,
    PostCardBuild
  },
  metaInfo: {
    title: 'hessam khoobkar Builds'
  }
}
</script>

<style lang="scss">

  .BuildsList {
    padding-top: 3em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    .post-card-build {
      width: 49%;
    }
  }

  .page-title {
    // padding-top: 2em;
    width: 40rem;
    margin: 0 auto;
    margin-top: -5em;
  }
  
  .page-title {

    &__title {
      color: #005C69;
      font-size: 5.610rem;
    }
    &__description {
      color: #408E8F;
    }
  }
</style>