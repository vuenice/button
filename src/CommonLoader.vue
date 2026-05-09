<template>
  <div class="inline-block animate-spin rounded-full border-2 border-current border-t-transparent" :style="{ width: size + 'px', height: size + 'px' }">
    <span class="sr-only">Loading...</span>
  </div>
</template>

<script setup>
defineProps({
  size: { type: [Number, String], default: 20 },
  color: { type: String, default: '#ffffff' }
})
</script>