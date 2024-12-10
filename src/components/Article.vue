<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  let articleId = computed(() => route.params.articleId)

</script>

<template>
{{ articleId }}
</template>

<style scoped>

</style>