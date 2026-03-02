<template>
  <div class="section">
    <!-- Featured Projects -->
    <div class="section-header">
      <h2>Featured Projects</h2>
      <button @click="addFeaturedProject" class="add-button">
        ➕ Tambah Featured Project
      </button>
    </div>
    <div v-for="(project, index) in localValue.featured" :key="project.id" class="card">
      <div class="card-header">
        <h3>{{ project.title || `Featured Project #${index + 1}` }}</h3>
        <button @click="removeFeaturedProject(index)" class="delete-button">
          🗑️ Hapus
        </button>
      </div>
      <div class="form-group">
        <label>Label</label>
        <input type="text" v-model="project.label" />
      </div>
      <div class="form-group">
        <label>Title</label>
        <input type="text" v-model="project.title" />
      </div>
      <div class="form-group">
        <label>Deskripsi</label>
        <textarea rows="4" v-model="project.description" />
      </div>
      <div class="form-group">
        <label>Technologies (pisahkan dengan koma)</label>
        <input type="text" :value="project.technologies.join(', ')" 
          @input="updateTechnologies(project, $event.target.value)" />
      </div>
      <div class="form-group">
        <label>GitHub URL</label>
        <input type="text" v-model="project.github" />
      </div>
      <div class="form-group">
        <label>Demo URL</label>
        <input type="text" v-model="project.demo" />
      </div>
      <div class="form-group">
        <label>Image Path</label>
        <input type="text" v-model="project.image" />
      </div>
    </div>

    <!-- Other Projects -->
    <div class="section-header" style="margin-top: 40px">
      <h2>Other Projects</h2>
      <button @click="addOtherProject" class="add-button">
        ➕ Tambah Other Project
      </button>
    </div>
    <div v-for="(project, index) in localValue.other" :key="project.id" class="card">
      <div class="card-header">
        <h3>{{ project.title || `Other Project #${index + 1}` }}</h3>
        <button @click="removeOtherProject(index)" class="delete-button">
          🗑️ Hapus
        </button>
      </div>
      <div class="form-group">
        <label>Title</label>
        <input type="text" v-model="project.title" />
      </div>
      <div class="form-group">
        <label>Deskripsi</label>
        <textarea rows="3" v-model="project.description" />
      </div>
      <div class="form-group">
        <label>Technologies (pisahkan dengan koma)</label>
        <input type="text" :value="project.technologies.join(', ')" 
          @input="updateTechnologies(project, $event.target.value)" />
      </div>
      <div class="form-group">
        <label>GitHub URL</label>
        <input type="text" v-model="project.github" />
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

const updateTechnologies = (project, value) => {
  project.technologies = value.split(',').map(t => t.trim())
}

const addFeaturedProject = () => {
  const newProjects = { ...localValue.value }
  newProjects.featured.push({
    id: Date.now(),
    label: '',
    title: '',
    description: '',
    technologies: [],
    github: '',
    demo: '',
    image: '/project1.jpg'
  })
  emit('update:modelValue', newProjects)
}

const removeFeaturedProject = (index) => {
  const newProjects = { ...localValue.value }
  newProjects.featured = newProjects.featured.filter((_, i) => i !== index)
  emit('update:modelValue', newProjects)
}

const addOtherProject = () => {
  const newProjects = { ...localValue.value }
  newProjects.other.push({
    id: Date.now(),
    title: '',
    description: '',
    technologies: [],
    github: ''
  })
  emit('update:modelValue', newProjects)
}

const removeOtherProject = (index) => {
  const newProjects = { ...localValue.value }
  newProjects.other = newProjects.other.filter((_, i) => i !== index)
  emit('update:modelValue', newProjects)
}
</script>
