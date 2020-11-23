export default ({ $axios }, inject) => {
  // 获取nav菜单 
  inject('getAll', websiteId => $axios.$get(`/wz/article/listByTypeRedis/${websiteId}`))

  // 获取置顶文章
  inject('getTop', data => $axios.$post('/wz/article/topOne', data))

  // 获取主页面文章列表
  inject('getIndexArticle', ids => $axios.$post('/wz/article/listByTypeRedis/batch', {
    menuIds: ids
  }))

  // 获取文章列表
  inject('getArticleList', data => $axios.$post('/wz/article/listByTypeRedis', data))

  // 根据关键字搜索文章
  inject('searchArticle', data => $axios.$post('/wz/article/search', data))

  // 获取文章信息
  inject('getArticleInfo', id => $axios.$get(`/wz/article/view/${id}`))

  // 访问量
  inject('addReadSum', id => {
    setTimeout(() => {
      $axios.$get(`/wz/article/updateReadsum/${id}`)
    }, 5000)
  })
}
