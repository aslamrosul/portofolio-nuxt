<template>
  <section class="section-container" id="experience">
    <h2 class="section-title" data-fade>
      <span>02.</span> Edukasi & Pengalaman
    </h2>
    <div class="timeline" data-fade>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">2023 - Sekarang</div>
        <div class="timeline-content">
          <h3>Politeknik Negeri Malang</h3>
          <h4>D4 - Teknik Informatika</h4>
          <p>
            Fokus pada Rekayasa Perangkat Lunak, Jaringan Komputer, dan
            Keamanan Sistem. Saat ini sedang menempuh semester [Isi Semester
            Anda].
          </p>
        </div>
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

.timeline {
  position: relative;
  max-width: 750px;
  margin: 0 auto;
}
.timeline::after {
  content: '';
  position: absolute;
  width: 2px;
  background-color: var(--bg-light);
  top: 0;
  bottom: 0;
  left: 20px;
}
.timeline-item {
  padding: 10px 40px 30px 60px;
  position: relative;
}
.timeline-dot {
  content: '';
  position: absolute;
  left: 10px;
  top: 15px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--bg-dark);
  border: 3px solid var(--accent);
  z-index: 1;
}
.timeline-date {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--text-dark);
  margin-bottom: 5px;
}
.timeline-content h3 {
  color: var(--text-lightest);
  font-size: 1.35rem;
  margin-bottom: 5px;
}
.timeline-content h4 {
  color: var(--text-light);
  font-weight: 400;
  margin-bottom: 10px;
}
.timeline-content p {
  font-size: 1rem;
}

@media (max-width: 768px) {
  .timeline::after {
    left: 10px;
  }
  .timeline-item {
    padding: 10px 20px 30px 40px;
  }
  .timeline-dot {
    left: 0;
  }
}
</style>
