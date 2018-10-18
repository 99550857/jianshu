<template>
  <div class="container recommend">
  <img class="recommend-banner" src="//cdn2.jianshu.io/assets/web/recommend-author-03cc8798d5cc3f986e49cbcb2eb63079.png"/>
  <a class="help" href="#">
    <i class="iconfont glyphicon glyphicon-question-sign">

    </i>

    如何成为签约作者
  </a>

    <b-row>
      <b-col cols="8" v-for="author in authors" :key="author.id">
        <b-media vertical-align="center" class="article-box" >
          <img :src="author.avatar" class="article-thumbnail"/>
          <h6 class="mt-0 mb-1 title">{{author.authorName}}</h6>
          <p>{{author.recommendation}}</p>
          <p class="abstract">
            <span>{{author.fans.articleNumber}}篇文章,{{author.fans.fansNumber}}关注</span>
          </p>
        </b-media>
      </b-col>
    </b-row>


  </div>
</template>

<script>
    export default {
        name: "Users",
      data(){
          return{
            "authors":[
              {
                "id":1,
                "avatar":"//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "authorName":"手绘",
                "recommendation":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",

                "fans":{
                  "articleNumber":"123213",
                  "fansNumber":"1222.2k"
                }
              },
              {
                "id":2,
                "avatar":"//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "authorName":"读书",
                "recommendation":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",

                "fans":{
                  "articleNumber":"12423",
                  "fansNumber":"1222.2k"
                }
              }
              ,
              {
                "id":3,
                "avatar":"//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "authorName":"@IT·互联网",
                "recommendation":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",

                "fans":{
                  "articleNumber":"123442",
                  "fansNumber":"1222.2k"
                }
              }
              ,
              {
                "id":4,
                "avatar":"//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "authorName":"摄影",
                "recommendation":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",

                "fans":{
                  "articleNumber":"6324",
                  "fansNumber":"1222.2k"
                }
              }
              ,
              {
                "id":5,
                "avatar":"//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "authorName":"故事",
                "recommendation":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",

                "fans":{
                  "articleNumber":"344333",
                  "fansNumber":"1222.2k"
                }
              }
              ,
              {
                "id":6,
                "avatar":"//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "authorName":"简书电影",
                "recommendation":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",

                "fans":{
                  "articleNumber":"43223",
                  "fansNumber":"1222.2k"
                }
              }
              ,
              {
                "id":7,
                "avatar":"//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "authorName":"旅行",
                "recommendation":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",

                "fans":{
                  "articleNumber":"22432",
                  "fansNumber":"1222.2k"
                }
              }
              ,
              {
                "id":8,
                "avatar":"//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "authorName":"自然科普",

                "articleNumber":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
                "fans":{
                  "articleNumber":"4434212",
                  "fansNumber":"1222.2k"
                }
              }
              ,
              {
                "id":9,
                "avatar":"//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "authorName":"国学",
                "recommendation":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",

                "fans":{
                  "articleNumber":"12224",
                  "fansNumber":"1222.2k"
                }
              }

            ]
          }
      }
    }
</script>

<style scoped>

</style>
