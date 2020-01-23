<template>
  <div class="post-card-simple content-box">
    <div class="post-card-simple__content">
      <h2 class="post-card-simple__title h3 text-bg-fx" v-html="post.title" />
      <p class="post-card-simple__description" v-html="post.description" />

      <PostMeta class="post-card-simple__meta" :post="post" />
      <!-- <PostTags class="post-card-simple__tags" :post="post" /> -->

      <g-link class="post-card-simple__link" :to="post.path">Link</g-link>
    </div>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['post'],
}
</script>

<style lang="scss">
  .post-card-simple {
    margin-bottom: 3.157em;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #D0D2D8;
    position: relative;
    transition: all .1s ease;

    &__title {
      display: inline;
    }

    &__description {
      font-size: 0.85rem;
      color: #6E7884;
    }

    &:hover {
      // transform: translateY(-5px);
      border-bottom: 1px solid #005C69;


      .post-card-simple__title {
        color: #005C69;
        // text-decoration: underline;
      }
    }

    &__tags {
      z-index: 1;
      position: relative;
    }

    &__link {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.0;
      overflow: hidden;
      text-indent: -9999px;
      z-index: 0;
    }
  }

.text-bg-fx {
  text-decoration: none;
  background-image: linear-gradient(transparent calc(100% - 2px), currentColor 2px);
  background-size: 0% 100%;
  background-repeat: no-repeat;
  transition: background-size .3s;
  background-position: 0 -0.25rem;
}

.post-card-simple:hover .text-bg-fx {
      background-size: 100% 100%;
}

.post-card-simple:hover .post-meta strong {
  color: #005C69;
}

// #071232
// #6E7884
// #DEE1E6
// 
// #005C69
// #408E8F
// #80B4B3
// 
// #AF0F3B
// #D57670
// #F5B6B1
</style>