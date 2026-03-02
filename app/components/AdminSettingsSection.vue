<template>
  <div class="section">
    <h2>Settings</h2>
    <div class="form-group">
      <label>CV URL</label>
      <input type="text" v-model="localValue.cvUrl" />
      <small>Upload CV ke folder public/ lalu masukkan path (contoh: /cv.pdf)</small>
    </div>
    <div class="form-group">
      <label>Accent Color</label>
      <input type="color" v-model="localValue.theme.accentColor" />
      <small>Warna aksen untuk tema portfolio</small>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const localValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})
</script>
