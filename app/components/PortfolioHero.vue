<template>
  <section class="hero" id="hero">
    <div class="hero-content" data-fade>
      <p class="hero-intro">{{ hero?.intro || 'Halo, nama saya' }}</p>
      <h1 class="hero-name glitch" :data-text="hero?.name || 'Aslam Rosul Ahmad.'">
        {{ hero?.name || 'Aslam Rosul Ahmad.' }}
      </h1>
      <h2 class="hero-subtitle">
        Saya <span class="typing-effect"></span>
      </h2>
      <p class="hero-desc">
        {{ hero?.description || 'Saya seorang mahasiswa Teknik Informatika di Politeknik Negeri Malang dengan fokus pada Web Development, Analisis Data, dan Keamanan Siber. Saya membangun (dan mengamankan) aplikasi web.' }}
      </p>
      <a href="#contact" class="btn btn-primary">Hubungi Saya</a>
    </div>
    <div class="scanline-effect"></div>
  </section>
</template>

<script setup>
const { data } = usePortfolio()
const hero = computed(() => data.value?.hero)

onMounted(() => {
  if (typeof window.Typed !== 'undefined') {
    const roles = hero.value?.roles || [
      'Web Developer.',
      'Security Enthusiast.',
      'Data Analyst.',
      'Mobile Developer.'
    ]
    
    const typed = new window.Typed('.typing-effect', {
      strings: roles,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
      showCursor: false
    })
  }
})
</script>

<style scoped>
main {
  padding: 0 100px;
  max-width: 1600px;
  margin: 0 auto;
}

.hero {
  min-height: calc(100vh - var(--nav-height));
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: var(--nav-height);
}
.hero-content {
  max-width: 1100px;
}
.hero-intro {
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 1.2rem;
  margin-bottom: 20px;
}
.hero-name {
  font-size: clamp(40px, 8vw, 72px);
  color: var(--text-lightest);
  font-weight: 700;
  margin: 0;
  line-height: 1.1;
  position: relative;
}
.hero-subtitle {
  font-size: clamp(30px, 6vw, 60px);
  color: var(--text-dark);
  font-weight: 700;
  margin: 0 0 25px 0;
  line-height: 1.1;
}
.hero-subtitle .typing-effect::after {
  content: '_';
  display: inline-block;
  color: var(--accent);
  margin-left: 8px;
  animation: blink 1s infinite;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.hero-desc {
  font-size: 1.15rem;
  max-width: 550px;
  margin-bottom: 40px;
}

.glitch {
  position: relative;
  cursor: pointer;
}
.glitch:hover::before,
.glitch:hover::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.glitch:hover::before {
  left: 2px;
  text-shadow: -1px 0 red;
  animation: glitch 1s infinite linear alternate-reverse;
}
.glitch:hover::after {
  left: -2px;
  text-shadow: -1px 0 blue;
  animation: glitch 1.5s infinite linear alternate-reverse;
}
@keyframes glitch {
  0% { clip: rect(42px, 9999px, 44px, 0); }
  5% { clip: rect(12px, 9999px, 59px, 0); }
  10% { clip: rect(38px, 9999px, 36px, 0); }
  100% { clip: rect(40px, 9999px, 42px, 0); }
}

.scanline-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), 
    linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  background-size: 100% 4px, 3px 100%;
  z-index: -1;
  pointer-events: none;
  animation: scan 10s linear infinite;
}
@keyframes scan {
  0% { background-position: 0 0; }
  100% { background-position: 0 100vh; }
}

.btn {
  display: inline-block;
  padding: 12px 20px;
  border: 1px solid var(--accent);
  color: var(--accent);
  background-color: transparent;
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: 14px;
  border-radius: 4px;
  transition: all 0.3s ease;
}
.btn:hover {
  background-color: var(--accent-dark);
}
.btn-primary {
  background-color: var(--accent);
  color: var(--bg-dark);
  font-weight: 500;
}
.btn-primary:hover {
  background-color: var(--accent);
  opacity: 0.8;
}

@media (max-width: 768px) {
  .hero-name { font-size: 2.5rem; }
  .hero-subtitle { font-size: 1.8rem; }
}
</style>
