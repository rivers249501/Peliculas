const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'cc88440930db9ae8ad6f9a288fce17be',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;