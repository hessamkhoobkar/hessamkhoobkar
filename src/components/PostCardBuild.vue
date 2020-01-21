<template>
  <div class="post-card-build">

    <figure class="post-card-build__figure">
      <g-image alt="Cover image" v-if="build.cover_image" class="post-card-build__image" :src="build.cover_image" />
      <figcaption class="post-card-build__figcaption">
        <div class="post-card-build__info">
          <h2 class="post-card-build__title h3" v-html="build.title" />
          <p class="post-card-build__description" v-html="build.description" />
        </div>
        <g-link class="post-card-build__link" :to="build.path">Link</g-link>
      </figcaption>			
    </figure>

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
  props: ['build'],
}
</script>

<style lang="scss">

  .post-card-build {
    position: relative;
    margin-bottom: 2rem;

    &__link {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.0;
      overflow: hidden;
      text-indent: -9999px;
      z-index: 5;
    }
    &__figure {
      margin: 0;
      padding: 0;
    }
    &__info {
      position: absolute;
      top: 10%;
      left: 0;
      width: 100%;
      margin: 0;
      padding: 0 60px;
      color: #ffffff;
      z-index: 4;
    }
    &__title {
      margin: 0;
      // transition: transform 0.35s, color 0.35s;
      // transform: translate3d(0,-50%,0);
    }
    &__description {
      transform: translate3d(0,50%,0);
      transition: all .35s ease;
      opacity: 0;
      // transition: transform 0.35s, color 0.35s;
    }

    &__figure::after{ 
      content: '';
      position: absolute;
      background: rgb(0,92,105);
      background: linear-gradient(180deg, rgba(0,92,105,1) 0%, rgba(0,92,105,0) 100%);
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 3;
      opacity: 0;
      transition: all .35s ease;
    }
    &:hover .post-card-build__figure::after{ 
      opacity: 1;
    }
    &:hover .post-card-build__description {
      transform: translate3d(0,0,0);
      opacity: 1;
      // transition: transform 0.35s, color 0.35s;
    }
  }
</style>
