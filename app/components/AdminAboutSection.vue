<template>
  <div class="section">
    <h2>About Section</h2>
    <div class="form-group">
      <label>Tentang Diri</label>
      <textarea rows="8" v-model="localValue.text" />
    </div>
    <div class="form-group">
      <label>Foto Profil Path</label>
      <input type="text" v-model="localValue.image" />
      <small>Upload foto ke folder public/ lalu masukkan path (contoh: /profil.jpg)</small>
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
