<template>
   <div class="post-tags">
   		<g-link class="post-tags__link" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
   			<span>#</span> {{ tag.title }}
   		</g-link>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
.post-tags {
  margin: 0;
  margin-top: var(--spacing-2x);
  margin-bottom: var(--spacing-3x);
  padding-top: var(--spacing-1x);
  border-top: 1px solid var(--natural-20);

  &__link {
  	text-decoration: none;
    font-size: 0.85rem;
  	color: var(--primary);
    margin-right: var(--spacing-0-5);
  	padding: var(--spacing-0-5);
  }
  &__link:hover {
    color: var(--primary-light);
  }
  &__link:first-child {
    padding-left: 0;
  }
}
</style>