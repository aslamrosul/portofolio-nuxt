<template>
  <div class="section">
    <h2>Social Media Links</h2>
    <div class="form-group">
      <label>GitHub</label>
      <input type="text" v-model="localValue.github" />
    </div>
    <div class="form-group">
      <label>LinkedIn</label>
      <input type="text" v-model="localValue.linkedin" />
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
