<template>
  <Layout>
    <div class="page-title content-box">
      <h1 class="page-title__title">Builds &amp; experiments</h1>
      <p class="page-title__description">My experiments and builds</p>
    </div>

    <div class="builds-list">
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

.builds-list {
	padding-top: 3em;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;

	.post-card-build {
		width: 49%;
	}
}


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