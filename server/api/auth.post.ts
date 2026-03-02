// Simple authentication - GANTI dengan sistem yang lebih aman untuk production
const ADMIN_USERNAME = 'admin'
const ADMIN_PASSWORD = 'admin123' // GANTI PASSWORD INI!

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event)

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    return { 
      success: true, 
      token: Buffer.from(`${username}:${password}`).toString('base64')
    }
  } else {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid credentials'
    })
  }
})
