<template>
  <Layout>
    <div class="page-title">
      <h1 class="page-title__title">Blog Posts</h1>
      <p class="page-title__description">My experiences, opinions, and journal</p>
    </div>
    <!-- List posts -->
    <div class="postsList">
      <PostCardSimple v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>

  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
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
import PostCardSimple from '~/components/PostCardSimple.vue'
import Layout from '~/layouts/ArchiveList.vue'

export default {
  components: {
    Layout,
    PostCardSimple
  },
  metaInfo: {
    title: 'hessam khoobkar Blog'
  }
}
</script>

<style lang="scss">

  .postsList {
    padding-top: 3em;
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
