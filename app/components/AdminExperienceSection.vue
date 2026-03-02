<template>
  <div class="section">
    <div class="section-header">
      <h2>Experience</h2>
      <button @click="addExperience" class="add-button">
        ➕ Tambah Experience
      </button>
    </div>
    <div v-for="(exp, index) in localValue" :key="exp.id" class="card">
      <div class="card-header">
        <h3>Experience #{{ index + 1 }}</h3>
        <button @click="removeExperience(index)" class="delete-button">
          🗑️ Hapus
        </button>
      </div>
      <div class="form-group">
        <label>Periode</label>
        <input type="text" v-model="exp.period" />
      </div>
      <div class="form-group">
        <label>Institusi</label>
        <input type="text" v-model="exp.institution" />
      </div>
      <div class="form-group">
        <label>Posisi</label>
        <input type="text" v-model="exp.position" />
      </div>
      <div class="form-group">
        <label>Deskripsi</label>
        <textarea rows="3" v-model="exp.description" />
      </div>
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

const addExperience = () => {
  const newExp = [...localValue.value, {
    id: Date.now(),
    period: '',
    institution: '',
    position: '',
    description: ''
  }]
  emit('update:modelValue', newExp)
}

const removeExperience = (index) => {
  const newExp = localValue.value.filter((_, i) => i !== index)
  emit('update:modelValue', newExp)
}
</script>
