<template>
  <aside class="social-sidebar">
    <ul>
      <li>
        <a :href="social?.github || 'https://github.com/aslamrosul'" target="_blank" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </li>
      <li>
        <a :href="social?.linkedin || 'https://www.linkedin.com/in/aslamrosul/'" target="_blank" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </li>
      <li>
        <a :href="`mailto:${social?.email || 'nvrsrndrmrx@gmail.com'}`" target="_blank" aria-label="Email">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script setup>
const { data } = usePortfolio()
const social = computed(() => data.value?.social)
</script>

<style scoped>
.social-sidebar {
  position: fixed;
  bottom: 0;
  width: 60px;
  z-index: 50;
  color: var(--text-light);
  right: 40px;
}
.social-sidebar ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.social-sidebar li {
  padding: 12px 0;
}
.social-sidebar a {
  color: var(--text-light);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  transition: transform 0.2s ease, background-color 0.2s ease;
}
.social-sidebar a svg {
  width: 28px;
  height: 28px;
  transition: all 0.3s ease;
}
.social-sidebar a:hover {
  background-color: rgba(100,255,218,0.06);
  transform: translateY(-4px) scale(1.05);
}
.social-sidebar a:hover svg {
  color: var(--accent);
  transform: translateY(-3px);
}
.social-sidebar::after {
  content: '';
  display: block;
  width: 1px;
  height: 110px;
  background-color: var(--text-dark);
  margin: 20px auto 0;
}

@media (max-width: 768px) {
  .social-sidebar {
    right: 16px;
    width: 44px;
  }
  .social-sidebar a {
    width: 40px;
    height: 40px;
  }
  .social-sidebar a svg {
    width: 22px;
    height: 22px;
  }
  .social-sidebar::after {
    height: 80px;
  }
}
</style>
