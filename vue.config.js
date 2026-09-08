const repositoryName = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split('/').pop()
  : 'vue-product-showcase'

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? `/${repositoryName}/`
    : '/',
}