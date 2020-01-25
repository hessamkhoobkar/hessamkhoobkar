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
    font-size: var(--text-0-75);
    color: var(--natural-50);

    & strong {
      color: var(--natural-90);
    }
  }
</style>
