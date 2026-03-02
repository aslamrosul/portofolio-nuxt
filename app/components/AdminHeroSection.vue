<template>
  <div class="section">
    <h2>Hero Section</h2>
    <div class="form-group">
      <label>Intro Text</label>
      <input type="text" v-model="localValue.intro" />
    </div>
    <div class="form-group">
      <label>Nama</label>
      <input type="text" v-model="localValue.name" />
    </div>
    <div class="form-group">
      <label>Roles (satu per baris)</label>
      <textarea rows="4" v-model="rolesText" />
    </div>
    <div class="form-group">
      <label>Deskripsi</label>
      <textarea rows="4" v-model="localValue.description" />
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

const rolesText = computed({
  get: () => localValue.value.roles.join('\n'),
  set: (val) => {
    localValue.value = { ...localValue.value, roles: val.split('\n') }
  }
})
</script>
