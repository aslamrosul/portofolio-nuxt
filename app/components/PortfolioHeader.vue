<template>
  <header class="navbar">
    <div class="nav-logo">
      <a href="#">ARA</a>
    </div>
    <nav>
      <ul class="nav-links">
        <li><a href="#about"><span>01.</span> Tentang</a></li>
        <li><a href="#experience"><span>02.</span> Pengalaman</a></li>
        <li><a href="#projects"><span>03.</span> Proyek</a></li>
        <li><a href="#contact"><span>04.</span> Kontak</a></li>
      </ul>
    </nav>
    <a href="cv.pdf" class="btn" target="_blank">Download CV</a>
  </header>
</template>

<script setup>
onMounted(() => {
  let lastScrollTop = 0
  const navbar = document.querySelector('.navbar')
  const navHeight = 80

  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    
    if (scrollTop > lastScrollTop && scrollTop > navHeight) {
      navbar.style.top = `-${navHeight}px`
    } else {
      navbar.style.top = '0'
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
  }, false)
})
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  height: var(--nav-height);
  position: sticky;
  top: 0;
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  z-index: 100;
  width: 100%;
  transition: top 0.3s ease;
}
.nav-logo a {
  font-family: var(--font-mono);
  color: var(--accent);
  font-size: 1.8rem;
  font-weight: 500;
  text-decoration: none;
}
.nav-links {
  display: flex;
  list-style: none;
  align-items: center;
}
.nav-links li {
  margin: 0 15px;
}
.nav-links a {
  color: var(--text-lightest);
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: 16px;
  padding: 12px 14px;
  font-weight: 600;
  transition: color 0.3s ease;
}
.nav-links a span {
  color: var(--accent);
  font-size: 0.95em;
}
.nav-links a.active,
.nav-links a:hover {
  color: var(--accent);
}
.btn {
  display: inline-block;
  padding: 14px 28px;
  border: 1px solid var(--accent);
  color: var(--accent);
  background-color: transparent;
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: 16px;
  border-radius: 6px;
  font-weight: 600;
  letter-spacing: 0.2px;
  transition: all 0.3s ease;
}
.btn:hover {
  background-color: var(--accent-dark);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  .btn {
    padding: 10px 18px;
    font-size: 14px;
  }
}
</style>
