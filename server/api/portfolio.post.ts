export default defineEventHandler(async (event) => {
  try {
    const newData = await readBody(event)

    // Update Hero
    const existingHero = await prisma.hero.findFirst()
    if (existingHero) {
      await prisma.hero.update({
        where: { id: existingHero.id },
        data: {
          intro: newData.hero.intro,
          name: newData.hero.name,
          description: newData.hero.description
        }
      })

      // Delete old roles and create new ones
      await prisma.role.deleteMany({ where: { heroId: existingHero.id } })
      await prisma.role.createMany({
        data: newData.hero.roles.map((role: string, index: number) => ({
          text: role,
          order: index,
          heroId: existingHero.id
        }))
      })
    }

    // Update About
    const existingAbout = await prisma.about.findFirst()
    if (existingAbout) {
      await prisma.about.update({
        where: { id: existingAbout.id },
        data: {
          text: newData.about.text,
          image: newData.about.image
        }
      })
    }

    // Update Experience - delete all and recreate
    await prisma.experience.deleteMany()
    await prisma.experience.createMany({
      data: newData.experience.map((exp: any, index: number) => ({
        period: exp.period,
        institution: exp.institution,
        position: exp.position,
        description: exp.description,
        order: index
      }))
    })

    // Update Featured Projects - delete all and recreate
    await prisma.featuredProject.deleteMany()
    await prisma.featuredProject.createMany({
      data: newData.projects.featured.map((proj: any, index: number) => ({
        label: proj.label,
        title: proj.title,
        description: proj.description,
        technologies: proj.technologies,
        github: proj.github,
        demo: proj.demo || null,
        image: proj.image,
        order: index
      }))
    })

    // Update Other Projects - delete all and recreate
    await prisma.otherProject.deleteMany()
    await prisma.otherProject.createMany({
      data: newData.projects.other.map((proj: any, index: number) => ({
        title: proj.title,
        description: proj.description,
        technologies: proj.technologies,
        github: proj.github,
        order: index
      }))
    })

    // Update Contact
    const existingContact = await prisma.contact.findFirst()
    if (existingContact) {
      await prisma.contact.update({
        where: { id: existingContact.id },
        data: {
          text: newData.contact.text,
          email: newData.contact.email
        }
      })
    }

    // Update Social
    const existingSocial = await prisma.social.findFirst()
    if (existingSocial) {
      await prisma.social.update({
        where: { id: existingSocial.id },
        data: {
          github: newData.social.github,
          linkedin: newData.social.linkedin,
          email: newData.social.email
        }
      })
    }

    // Update Settings
    const existingSettings = await prisma.settings.findFirst()
    if (existingSettings) {
      await prisma.settings.update({
        where: { id: existingSettings.id },
        data: {
          cvUrl: newData.settings.cvUrl,
          accentColor: newData.settings.theme.accentColor
        }
      })
    }

    return { message: 'Data updated successfully' }
  } catch (error) {
    console.error('Error updating data:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to update data'
    })
  }
})
