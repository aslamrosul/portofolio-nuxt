<template>
  <div class="section">
    <h2>Contact Section</h2>
    <div class="form-group">
      <label>Contact Text</label>
      <textarea rows="4" v-model="localValue.text" />
    </div>
    <div class="form-group">
      <label>Email</label>
      <input type="email" v-model="localValue.email" />
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
