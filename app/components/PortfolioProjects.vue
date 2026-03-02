<template>
  <section class="section-container" id="projects">
    <h2 class="section-title" data-fade>
      <span>03.</span> Proyek Unggulan
    </h2>

    <div class="project-grid featured" data-fade>
      <div class="project-content">
        <span class="project-label">Proyek Laravel</span>
        <h3 class="project-title">
          <a href="https://github.com/aslamrosul/PBL_KEL1_FASILITAS">Sistem Pelaporan Kerusakan Fasilitas - FixIT</a>
        </h3>
        <div class="project-desc">
          <p>
            Bekerja sama dengan beberapa mahasiswa saat semester 5, membangun sistem pelaporan dan perbaikan fasilitas kampus
            berbasis web untuk Jurusan Teknologi Informasi Polinema
            menggunakan Laravel 10 dan MySQL. Fitur utama mencakup
            multi-role login, pelaporan kerusakan dengan foto, prioritas
            perbaikan berbasis DSS, serta laporan dan statistik fasilitas.
          </p>
        </div>
        <ul class="project-tech">
          <li>Laravel</li>
          <li>PHP</li>
          <li>MySQL</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
        </ul>
        <div class="project-links">
          <a href="https://github.com/aslamrosul/PBL_KEL1_FASILITAS" target="_blank" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="project-image">
        <a href="#" target="_blank">
          <img src="/project1.jpg" alt="Screenshot Proyek 1" />
        </a>
      </div>
    </div>

    <div class="project-grid featured reversed" data-fade>
      <div class="project-content">
        <span class="project-label">Proyek Keamanan & Data</span>
        <h3 class="project-title">
          <a href="https://github.com/dedybayu/Project_MongoDB_Basdat/">Sistem Informasi Portal Berita - <br> KataData</a>
        </h3>
        <div class="project-desc">
          <p>
            Bekerja sama dengan beberapa mahasiswa saat semester 3, membangun web portal berita berbasis MongoDB dengan PHP, HTML,
            CSS, dan JavaScript. Fitur utama: CRUD berita, kategori,
            pencarian, notifikasi, berita trending, serta dashboard admin
            dan halaman utama pengguna.
          </p>
        </div>
        <ul class="project-tech">
          <li>PHP</li>
          <li>MongoDB</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <div class="project-links">
          <a href="https://github.com/dedybayu/Project_MongoDB_Basdat/" target="_blank" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="project-image">
        <a href="#" target="_blank">
          <img src="/project2.jpg" alt="Screenshot Proyek 2" />
        </a>
      </div>
    </div>
  </section>
</template>

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

.project-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  align-items: center;
  margin-bottom: 80px;
}

.project-content {
  grid-column: 1 / 8;
  grid-row: 1 / 1;
  z-index: 2;
  text-align: left;
}
.project-grid.reversed .project-content {
  grid-column: 6 / 13;
  text-align: right;
}

.project-label {
  font-family: var(--font-mono);
  color: var(--accent);
  font-size: 0.9rem;
}
.project-title {
  font-size: clamp(22px, 5vw, 30px);
  margin: 5px 0 20px;
}
.project-title a {
  color: var(--text-lightest);
  text-decoration: none;
  transition: color 0.3s ease;
}
.project-title a:hover {
  color: var(--accent);
}
.project-desc {
  background-color: var(--bg-light);
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 10px 30px -15px rgba(2,12,27,0.7);
  font-size: 1rem;
  color: var(--text-light);
}
.project-tech {
  display: flex;
  justify-content: flex-start;
  list-style: none;
  margin: 20px 0 0 0;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  flex-wrap: wrap;
}
.project-grid.reversed .project-tech {
  justify-content: flex-end;
}
.project-tech li {
  margin-right: 15px;
  margin-bottom: 5px;
}
.project-grid.reversed .project-tech li {
  margin-right: 0;
  margin-left: 15px;
}

.project-links {
  margin-top: 15px;
  display: flex;
  justify-content: flex-start;
}
.project-grid.reversed .project-links {
  justify-content: flex-end;
}
.project-links a {
  color: var(--text-light);
  margin-right: 15px;
}
.project-grid.reversed .project-links a {
  margin-right: 0;
  margin-left: 15px;
}
.project-links a svg {
  width: 22px;
  height: 22px;
  transition: all 0.3s ease;
}
.project-links a:hover svg {
  color: var(--accent);
  transform: translateY(-2px);
}

.project-image {
  grid-column: 6 / 13;
  grid-row: 1 / 1;
  position: relative;
}
.project-grid.reversed .project-image {
  grid-column: 1 / 8;
}
.project-image img {
  width: 100%;
  display: block;
  border-radius: 8px;
  filter: brightness(0.7) grayscale(0.5);
  transition: all 0.3s ease;
}
.project-image a:hover img {
  filter: none;
}

@media (max-width: 768px) {
  .project-grid, .project-grid.reversed {
    grid-template-columns: 1fr;
  }
  .project-content, .project-grid.reversed .project-content {
    grid-column: 1 / 1;
    text-align: left;
  }
  .project-image, .project-grid.reversed .project-image {
    grid-column: 1 / 1;
    margin-top: 30px;
    grid-row: 2;
  }
  .project-desc {
    background-color: transparent;
    padding: 0;
    box-shadow: none;
  }
  .project-tech, .project-grid.reversed .project-tech {
    justify-content: flex-start;
  }
  .project-tech li, .project-grid.reversed .project-tech li {
    margin-left: 0;
    margin-right: 15px;
  }
  .project-links, .project-grid.reversed .project-links {
    justify-content: flex-start;
  }
}
</style>
