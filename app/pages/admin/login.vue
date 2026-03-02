<template>
  <div class="login-container">
    <div class="login-box">
      <h1>Admin Login</h1>
      <p class="login-subtitle">Masuk untuk mengelola portfolio</p>
      
      <form @submit.prevent="handleSubmit" class="login-form">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
            placeholder="Masukkan username"
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Masukkan password"
          />
        </div>

        <div v-if="error" class="error">{{ error }}</div>

        <button type="submit" class="login-button" :disabled="loading">
          {{ loading ? 'Loading...' : 'Login' }}
        </button>
      </form>

      <div class="login-info">
        <p class="warning">⚠️ Ganti password di <code>server/api/auth.post.ts</code></p>
      </div>
    </div>
  </div>
</template>

<script setup>
const username = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)
const router = useRouter()

useHead({
  title: 'Admin Login - Portfolio'
})

const handleSubmit = async () => {
  error.value = ''
  loading.value = true

  try {
    const data = await $fetch('/api/auth', {
      method: 'POST',
      body: { username: username.value, password: password.value }
    })

    if (data.success) {
      localStorage.setItem('adminToken', data.token)
      router.push('/admin/dashboard')
    }
  } catch (err) {
    error.value = 'Username atau password salah'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--bg-dark) 0%, var(--bg-light) 100%);
  padding: 20px;
}

.login-box {
  background: var(--bg-light);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;
}

.login-box h1 {
  color: var(--text-lightest);
  margin-bottom: 10px;
  text-align: center;
}

.login-subtitle {
  color: var(--text-dark);
  text-align: center;
  margin-bottom: 30px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  margin-bottom: 0;
}

.form-group label {
  display: block;
  color: var(--text-lightest);
  margin-bottom: 8px;
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 12px;
  background: var(--bg-dark);
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 6px;
  color: var(--text-lightest);
  font-family: inherit;
  font-size: 14px;
}

.form-group input:focus {
  outline: none;
  border-color: var(--accent);
}

.login-button {
  background: var(--accent);
  color: var(--bg-dark);
  border: none;
  padding: 14px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s;
}

.login-button:hover {
  opacity: 0.9;
}

.login-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.login-info {
  margin-top: 30px;
  padding: 20px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 8px;
  font-size: 14px;
  color: var(--text-light);
}

.login-info code {
  background: rgba(0, 0, 0, 0.3);
  padding: 2px 6px;
  border-radius: 4px;
  color: var(--accent);
}

.warning {
  color: #fb923c !important;
  margin-top: 10px;
}

.error {
  background: rgba(248, 113, 113, 0.1);
  color: #f87171;
  padding: 12px;
  border-radius: 6px;
  text-align: center;
}
</style>
