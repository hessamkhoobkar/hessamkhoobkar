<template>
   <div class="post-meta">
      Posted {{ post.date }}.
      <template v-if="post.timeToRead">
        <strong>{{ post.timeToRead }} min read.</strong>
      </template>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
  .post-meta {
    font-size: .75em;
    color: #6E7884;

    & strong {
      color: #071232;
    }
  }
</style>
