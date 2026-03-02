<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
/* Global styles */
:root {
  --bg-dark: #0a192f;
  --bg-light: #112240;
  --text-lightest: #ccd6f6;
  --text-light: #a8b2d1;
  --text-dark: #8892b0;
  --accent: #64ffda;
  --accent-dark: #64ffda2a;
  --font-sans: 'Inter', -apple-system, system-ui, sans-serif;
  --font-mono: 'Fira Code', 'Roboto Mono', monospace;
  --section-padding: 40px 0;
  --nav-height: 80px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: var(--text-dark) var(--bg-dark);
}

body {
  background-color: var(--bg-dark);
  color: var(--text-dark);
  font-family: var(--font-sans);
  line-height: 1.6;
  font-size: 17px;
  -webkit-font-smoothing: antialiased;
}
</style>
