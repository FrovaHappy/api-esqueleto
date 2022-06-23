(async () => {
  try {
    await import('./utils/mongoose')
    await import('./api/app')
  } catch (e) {
    console.error(e)
  }
})()
