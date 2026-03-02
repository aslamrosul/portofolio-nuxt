<template>
  <div v-if="loading" class="loading">Loading...</div>
  <div v-else-if="!data" class="error-page">Failed to load data</div>
  <div v-else class="dashboard">
    <header class="dashboard-header">
      <h1>Portfolio Admin Dashboard</h1>
      <div class="header-actions">
        <a href="/" target="_blank" class="preview-button">
          👁️ Preview Site
        </a>
        <button @click="handleLogout" class="logout-button">
          Logout
        </button>
      </div>
    </header>

    <div class="dashboard-content">
      <nav class="sidebar">
        <button :class="{ active: activeTab === 'hero' }" @click="activeTab = 'hero'">
          🏠 Hero Section
        </button>
        <button :class="{ active: activeTab === 'about' }" @click="activeTab = 'about'">
          👤 About
        </button>
        <button :class="{ active: activeTab === 'experience' }" @click="activeTab = 'experience'">
          🎓 Experience
        </button>
        <button :class="{ active: activeTab === 'projects' }" @click="activeTab = 'projects'">
          💼 Projects
        </button>
        <button :class="{ active: activeTab === 'contact' }" @click="activeTab = 'contact'">
          📧 Contact
        </button>
        <button :class="{ active: activeTab === 'social' }" @click="activeTab = 'social'">
          🔗 Social Media
        </button>
        <button :class="{ active: activeTab === 'settings' }" @click="activeTab = 'settings'">
          ⚙️ Settings
        </button>
      </nav>

      <main class="main-content">
        <div v-if="message" class="message">{{ message }}</div>

        <!-- Hero Section -->
        <AdminHeroSection v-if="activeTab === 'hero'" v-model="data.hero" />

        <!-- About Section -->
        <AdminAboutSection v-if="activeTab === 'about'" v-model="data.about" />

        <!-- Experience Section -->
        <AdminExperienceSection v-if="activeTab === 'experience'" v-model="data.experience" />

        <!-- Projects Section -->
        <AdminProjectsSection v-if="activeTab === 'projects'" v-model="data.projects" />

        <!-- Contact Section -->
        <AdminContactSection v-if="activeTab === 'contact'" v-model="data.contact" />

        <!-- Social Section -->
        <AdminSocialSection v-if="activeTab === 'social'" v-model="data.social" />

        <!-- Settings Section -->
        <AdminSettingsSection v-if="activeTab === 'settings'" v-model="data.settings" />

        <div class="save-section">
          <button @click="handleSave" class="save-button" :disabled="saving">
            {{ saving ? 'Menyimpan...' : '💾 Simpan Perubahan' }}
          </button>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
const data = ref(null)
const loading = ref(true)
const saving = ref(false)
const message = ref('')
const activeTab = ref('hero')
const router = useRouter()

useHead({
  title: 'Admin Dashboard - Portfolio'
})

onMounted(() => {
  const token = localStorage.getItem('adminToken')
  if (!token) {
    router.push('/admin/login')
    return
  }
  fetchData()
})

const fetchData = async () => {
  try {
    const portfolioData = await $fetch('/api/portfolio')
    data.value = portfolioData
  } catch (error) {
    console.error('Failed to fetch data:', error)
  } finally {
    loading.value = false
  }
}

const handleSave = async () => {
  saving.value = true
  message.value = ''

  try {
    await $fetch('/api/portfolio', {
      method: 'POST',
      body: data.value
    })

    message.value = '✅ Data berhasil disimpan!'
    setTimeout(() => message.value = '', 3000)
  } catch (error) {
    message.value = '❌ Gagal menyimpan data'
  } finally {
    saving.value = false
  }
}

const handleLogout = () => {
  localStorage.removeItem('adminToken')
  router.push('/admin/login')
}
</script>


<style scoped>
.dashboard {
  min-height: 100vh;
  background: var(--bg-dark);
}

.dashboard-header {
  background: var(--bg-light);
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.dashboard-header h1 {
  color: var(--text-lightest);
  font-size: 24px;
  margin: 0;
}

.header-actions {
  display: flex;
  gap: 15px;
}

.preview-button {
  background: var(--bg-dark);
  color: var(--text-lightest);
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.3s;
}

.preview-button:hover {
  background: rgba(100, 255, 218, 0.1);
}

.logout-button {
  background: #f87171;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: opacity 0.3s;
}

.logout-button:hover {
  opacity: 0.9;
}

.dashboard-content {
  display: grid;
  grid-template-columns: 250px 1fr;
  min-height: calc(100vh - 80px);
}

.sidebar {
  background: var(--bg-light);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sidebar button {
  background: transparent;
  color: var(--text-light);
  border: none;
  padding: 12px 16px;
  text-align: left;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 15px;
}

.sidebar button:hover {
  background: rgba(100, 255, 218, 0.1);
  color: var(--accent);
}

.sidebar button.active {
  background: var(--accent);
  color: var(--bg-dark);
  font-weight: 600;
}

.main-content {
  padding: 40px;
  max-width: 900px;
}

.message {
  background: rgba(100, 255, 218, 0.1);
  color: var(--accent);
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 500;
}

.save-section {
  position: sticky;
  bottom: 20px;
  background: var(--bg-light);
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.3);
}

.save-button {
  background: var(--accent);
  color: var(--bg-dark);
  border: none;
  padding: 16px 40px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.save-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(100, 255, 218, 0.3);
}

.save-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: var(--text-lightest);
  font-size: 20px;
  background: var(--bg-dark);
}

.error-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #f87171;
  font-size: 20px;
  background: var(--bg-dark);
}

@media (max-width: 768px) {
  .dashboard-content {
    grid-template-columns: 1fr;
  }

  .sidebar {
    flex-direction: row;
    overflow-x: auto;
    padding: 10px;
  }

  .sidebar button {
    white-space: nowrap;
    padding: 10px 15px;
    font-size: 14px;
  }

  .main-content {
    padding: 20px;
  }

  .dashboard-header {
    padding: 15px 20px;
    flex-direction: column;
    gap: 15px;
  }

  .dashboard-header h1 {
    font-size: 20px;
  }
}
</style>

<style>
/* Global styles untuk admin components */
.section {
  background: var(--bg-light);
  padding: 30px;
  border-radius: 12px;
  margin-bottom: 30px;
}

.section h2 {
  color: var(--text-lightest);
  margin-bottom: 25px;
  font-size: 24px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.section-header h2 {
  margin-bottom: 0;
}

.add-button {
  background: var(--accent);
  color: var(--bg-dark);
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s;
}

.add-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(100, 255, 218, 0.3);
}

.delete-button {
  background: #f87171;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  transition: all 0.3s;
}

.delete-button:hover {
  background: #ef4444;
  transform: translateY(-1px);
}

.card {
  background: var(--bg-dark);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px solid rgba(100, 255, 218, 0.1);
}

.card h3 {
  color: var(--accent);
  margin-bottom: 15px;
  font-size: 18px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.card-header h3 {
  margin: 0;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  color: var(--text-lightest);
  margin-bottom: 8px;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  background: var(--bg-dark);
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 6px;
  color: var(--text-lightest);
  font-family: inherit;
  font-size: 14px;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent);
}

.form-group small {
  display: block;
  color: var(--text-dark);
  margin-top: 5px;
  font-size: 12px;
}
</style>
