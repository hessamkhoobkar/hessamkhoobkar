<template>
  <Layout>
    <div class="page-title content-box">
      <h1 class="page-title__title">Blog Posts</h1>
      <p class="page-title__description">My experiences, opinions, and journal</p>
    </div>

    <div class="posts-list">
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
    title: 'Blog'
  }
}
</script>

<style lang="scss">

.posts-list {
	padding-top: var(--spacing-3x);
}

.page-title {
	margin-top: -5em;

	&__title {
		color: var(--primary);
		font-size: var(--text-5x-5);
	}
	&__description {
		color: var(--primary-light);
	}
}
</style>
