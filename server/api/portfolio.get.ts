export default defineEventHandler(async (event) => {
  try {
    // Fetch all data from database
    const [hero, about, experience, featuredProjects, otherProjects, contact, social, settings] = await Promise.all([
      prisma.hero.findFirst({ include: { roles: { orderBy: { order: 'asc' } } } }),
      prisma.about.findFirst(),
      prisma.experience.findMany({ orderBy: { order: 'asc' } }),
      prisma.featuredProject.findMany({ orderBy: { order: 'asc' } }),
      prisma.otherProject.findMany({ orderBy: { order: 'asc' } }),
      prisma.contact.findFirst(),
      prisma.social.findFirst(),
      prisma.settings.findFirst()
    ])

    // Format data to match frontend structure
    const data = {
      hero: {
        intro: hero?.intro || '',
        name: hero?.name || '',
        roles: hero?.roles?.map((r) => r.text) || [],
        description: hero?.description || ''
      },
      about: {
        text: about?.text || '',
        image: about?.image || '/profil.jpg'
      },
      experience: experience.map((exp) => ({
        id: exp.id,
        period: exp.period,
        institution: exp.institution,
        position: exp.position,
        description: exp.description
      })),
      projects: {
        featured: featuredProjects.map((proj) => ({
          id: proj.id,
          label: proj.label,
          title: proj.title,
          description: proj.description,
          technologies: proj.technologies,
          github: proj.github,
          demo: proj.demo,
          image: proj.image
        })),
        other: otherProjects.map((proj) => ({
          id: proj.id,
          title: proj.title,
          description: proj.description,
          technologies: proj.technologies,
          github: proj.github
        }))
      },
      contact: {
        text: contact?.text || '',
        email: contact?.email || ''
      },
      social: {
        github: social?.github || '',
        linkedin: social?.linkedin || '',
        email: social?.email || ''
      },
      settings: {
        cvUrl: settings?.cvUrl || '/cv.pdf',
        theme: {
          accentColor: settings?.accentColor || '#64ffda'
        }
      }
    }

    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch data'
    })
  }
})
