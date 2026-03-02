export const usePortfolio = () => {
  const data = useState('portfolio', () => null)
  const loading = useState('portfolioLoading', () => false)
  const error = useState('portfolioError', () => null)

  const fetchPortfolio = async () => {
    if (data.value) return data.value // Return cached data if available
    
    loading.value = true
    error.value = null
    
    try {
      const response = await $fetch('/api/portfolio')
      data.value = response
      return response
    } catch (e) {
      error.value = e
      console.error('Error fetching portfolio:', e)
      throw e
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    loading,
    error,
    fetchPortfolio
  }
}
