<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">
        {{ $page.build.title }}
      </h1>

      <PostMeta :post="$page.build" />

    </div>

    <div class="post content-box">
      <div class="post__header">
        <g-image alt="Cover image" v-if="$page.build.cover_image" :src="$page.build.cover_image" />
      </div>

      <div class="post__content" v-html="$page.build.content" />

      <div class="post__footer">
        <PostTags :post="$page.build" />
      </div>
    </div>

  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  metaInfo () {
    return {
      title: this.$page.build.title,
      meta: [
        {
          name: 'description',
          content: this.$page.build.description
        }
      ]
    }
  }
}
</script>

<page-query>
query Build ($id: ID!) {
  build: build (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>
