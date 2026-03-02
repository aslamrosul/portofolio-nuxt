<template>
  <div>
    <PortfolioHeader />
    <PortfolioSidebar />
    
    <main>
      <PortfolioHero />
      <PortfolioAbout />
      <PortfolioExperience />
      <PortfolioProjects />
      <PortfolioOtherProjects />
      <PortfolioContact />
    </main>

    <PortfolioFooter />
  </div>
</template>

<script setup>
const { fetchPortfolio } = usePortfolio()

// Fetch portfolio data on page load
await fetchPortfolio()

useHead({
  title: 'Aslam Rosul Ahmad - Web Developer & Security Enthusiast',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inter:wght@400;600;700&display=swap'
    }
  ],
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12',
      defer: true
    }
  ]
})

useFadeAnimation()
</script>

<style scoped>
main {
  padding: 0 100px;
  max-width: 1600px;
  margin: 0 auto;
}

[data-fade] {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
[data-fade].is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 1080px) {
  main {
    padding: 0 80px;
  }
}

@media (max-width: 768px) {
  main {
    padding: 0 25px;
  }
}
</style>
