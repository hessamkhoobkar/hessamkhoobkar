<template>
  <Layout>
    <div class="page-title content-box">
      <h1 class="page-title__title"># {{ $page.buildTag.title }}</h1>
    </div>

    <div class="postsList">
      <PostCardSimple v-for="edge in $page.buildTag.belongsTo.edges" :key="edge.node.id" :post="edge.node"/>
    </div>

  </Layout>
</template>

<page-query>
query BuildTag ($id: ID!) {
  buildTag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D. MMMM YYYY")
            timeToRead
            description
            content
          }
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
  metaInfo () {
    return {
      title: this.$page.buildTag.title,
    }
  }
}
</script>

<style lang="scss">

.postsList {
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

