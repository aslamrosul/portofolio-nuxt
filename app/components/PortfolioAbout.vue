<template>
  <section class="section-container" id="about">
    <h2 class="section-title" data-fade><span>01.</span> Tentang Saya</h2>
    <div class="about-grid" data-fade>
      <div class="about-text">
        <p class="justify">
          {{ about?.text || 'Saya Aslam Rosul Ahmad, seorang Mahasiswa Politeknik Negeri Malang jurusan Teknik Informatika. Saya memiliki ketertarikan dalam pengembangan web dan mobile, analisis data, serta keamanan siber (pentesting). Bagi saya, teknologi bukan hanya tentang membuat sesuatu berfungsi, tetapi juga memastikan sistem tersebut efisien, aman, dan bermanfaat bagi pengguna. Saya terus belajar dan mengerjakan proyek nyata untuk mengasah kemampuan dalam pemrograman, pengelolaan data, serta pemecahan masalah di dunia IT.' }}
        </p>
      </div>
      <div class="about-photo-container">
        <img
          class="about-photo"
          :src="about?.image || '/profil.jpg'"
          alt="Foto Profil"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const { data } = usePortfolio()
const about = computed(() => data.value?.about)
</script>

<style scoped>
.section-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: var(--section-padding);
}

.section-title {
  font-family: var(--font-mono);
  font-size: clamp(28px, 5vw, 34px);
  color: var(--text-lightest);
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  white-space: nowrap;
}
.section-title::after {
  content: '';
  display: block;
  width: 200px;
  height: 1px;
  background-color: var(--bg-light);
  margin-left: 20px;
}
.section-title span {
  color: var(--accent);
  font-size: clamp(18px, 3vw, 22px);
  margin-right: 10px;
  font-weight: 400;
}

.about-grid {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 40px;
  align-items: start;
  margin-bottom: 80px;
}
.about-text {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: justify;
  text-justify: inter-word;
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-light);
}
.about-text p {
  margin-bottom: 18px;
  padding-right: 24px;
  font-size: 1.05rem;
}
.about-text strong {
  color: var(--accent);
  font-weight: 500;
}
.about-photo-container {
  max-width: 360px;
  position: relative;
  border-radius: 8px;
  background-color: transparent;
  margin-top: 0;
  transition: transform 0.25s ease;
  border: 1px solid rgba(255,255,255,0.06);
}
.about-photo-container:hover {
  transform: translate(-6px, -6px);
}
.about-photo {
  width: 100%;
  height: auto;
  filter: grayscale(100%) contrast(1.05) brightness(0.95);
  transition: filter 0.25s ease, transform 0.25s ease;
}
.about-photo-container:hover .about-photo {
  filter: grayscale(0%) contrast(1.05) brightness(1);
  transform: translate(-6px, -6px) scale(1.02);
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
  .about-photo-container {
    margin: 0 auto;
  }
}
</style>
