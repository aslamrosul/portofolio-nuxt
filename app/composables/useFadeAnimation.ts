export const useFadeAnimation = () => {
  onMounted(() => {
    const fadeElements = document.querySelectorAll('[data-fade]')
    
    if ('IntersectionObserver' in window) {
      const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            fadeObserver.unobserve(entry.target)
          }
        })
      }, { threshold: 0.1 })

      fadeElements.forEach(el => fadeObserver.observe(el))
    } else {
      fadeElements.forEach(el => el.classList.add('is-visible'))
    }

    // Scroll spy untuk navbar
    const sections = document.querySelectorAll('section[id]')
    const navLinks = document.querySelectorAll('.nav-links a')

    if ('IntersectionObserver' in window && navLinks.length > 0 && sections.length > 0) {
      const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id')
            navLinks.forEach(link => {
              link.classList.remove('active')
              if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active')
              }
            })
          }
        })
      }, { 
        rootMargin: '-50% 0px -50% 0px'
      })

      sections.forEach(section => spyObserver.observe(section))
    }
  })
}
