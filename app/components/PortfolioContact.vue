<template>
  <section class="section-container contact-section" id="contact">
    <h2 class="section-title text-center" data-fade>
      <span>04.</span> Hubungi Saya
    </h2>
    <div class="contact-content" data-fade>
      <p class="contact-text">
        Saat ini saya sedang aktif mencari peluang magang (Internship) di
        bidang Web Development atau Cyber Security. Jika Anda memiliki
        pertanyaan atau penawaran, jangan ragu untuk menghubungi saya!
      </p>
      <a
        href="mailto:nvrsrndrmrx@gmail.com"
        class="btn btn-primary contact-btn"
        >Kirim Email</a
      >
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
.text-center {
  text-align: center;
  justify-content: center;
}
.text-center::after {
  display: none;
}

.contact-section {
  padding-bottom: var(--section-padding);
}
.contact-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}
.contact-text {
  font-size: 1.15rem;
  margin-bottom: 40px;
}
.contact-btn {
  font-size: 1rem;
  padding: 18px 30px;
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
</style>
