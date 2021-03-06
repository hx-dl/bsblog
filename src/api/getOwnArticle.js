export default () => {
  //  获取当前登录用户的文章列表
  return new Promise((resolve) => {
    const query = new AV.Query('Article')
    query.include('image')
    query.descending('createdAt')
    var articleList = []
    query.find().then( (articles) => {
      articles.forEach( article => {
        let id = article.get('objectId')
        let title = article.get('title')
        let tag = article.get('tag')
        let time = article.get('releaseTime')
        let description = article.get('description')
        let articleImage = article.get('image');
        let coverImg = require('../assets/imgs/banner.jpg')
        if(articleImage) {
          coverImg = articleImage.get('url');
        }
        articleList.push({
          id,
          title,
          tag,
          time,
          description,
          coverImg
        });
      })
      resolve(articleList)
    })
  })
}