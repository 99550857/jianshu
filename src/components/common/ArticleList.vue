<template>
    <div id="list-container">
      <ul class="note-list">
        <li v-for="article in articleList" class="have-img">
          <a class="wrap-img" href="#">
            <img :src="article.img"/>
          </a>
          <div class="content">
            <a class="title" href="#">
              {{article.title}}
            </a>
            <p class="abstract">
              {{article.content}}
            </p>
            <div class="meta">
              <a class="nickname">
                {{article.author}}
              </a>
              <a href="/">
                <i class="fas fa-comments"></i>&nbsp;{{article.commentNumber}}
              </a>
              <span>
                <i class="fas fa-heart"> </i>&nbsp;{{article.likeNumber}}
              </span>

            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "ArticleList",
      data(){
          return{
            "articleList":[
              {
                "id":1,
                "img":"//upload-images.jianshu.io/upload_images/3973862-bf267d57db515d83.png?imageMogr2/auto-orient/strip|imageView2/1/w/125/h/100",
                "title":"30个极大提高开发效率的Visual Studio Code插件",
                "content":"译者按： 看完这篇文章，我打算从 Sublime Text 转到 Visual Studio Code 了！ 原文: Immensely upg...",
                "author":"Fundebug",
                "likeNumber":15,
                "commentNumber":8
              },
              {
                "id":1,
                "img":"//upload-images.jianshu.io/upload_images/3973862-bf267d57db515d83.png?imageMogr2/auto-orient/strip|imageView2/1/w/125/h/100",
                "title":"30个极大提高开发效率的Visual Studio Code插件",
                "content":"译者按： 看完这篇文章，我打算从 Sublime Text 转到 Visual Studio Code 了！ 原文: Immensely upg...",
                "author":"Fundebug",
                "likeNumber":15,
                "commentNumber":8
              },
              {
                "id":1,
                "img":"//upload-images.jianshu.io/upload_images/3973862-bf267d57db515d83.png?imageMogr2/auto-orient/strip|imageView2/1/w/125/h/100",
                "title":"30个极大提高开发效率的Visual Studio Code插件",
                "content":"译者按： 看完这篇文章，我打算从 Sublime Text 转到 Visual Studio Code 了！ 原文: Immensely upg...",
                "author":"Fundebug",
                "likeNumber":15,
                "commentNumber":8
              },
              {
                "id":1,
                "img":"//upload-images.jianshu.io/upload_images/3973862-bf267d57db515d83.png?imageMogr2/auto-orient/strip|imageView2/1/w/125/h/100",
                "title":"30个极大提高开发效率的Visual Studio Code插件",
                "content":"译者按： 看完这篇文章，我打算从 Sublime Text 转到 Visual Studio Code 了！ 原文: Immensely upg...",
                "author":"Fundebug",
                "likeNumber":15,
                "commentNumber":8
              },
              {
                "id":1,
                "img":"//upload-images.jianshu.io/upload_images/3973862-bf267d57db515d83.png?imageMogr2/auto-orient/strip|imageView2/1/w/125/h/100",
                "title":"30个极大提高开发效率的Visual Studio Code插件",
                "content":"译者按： 看完这篇文章，我打算从 Sublime Text 转到 Visual Studio Code 了！ 原文: Immensely upg...",
                "author":"Fundebug",
                "likeNumber":15,
                "commentNumber":8
              },
              {
                "id":1,
                "img":"//upload-images.jianshu.io/upload_images/3973862-bf267d57db515d83.png?imageMogr2/auto-orient/strip|imageView2/1/w/125/h/100",
                "title":"30个极大提高开发效率的Visual Studio Code插件",
                "content":"译者按： 看完这篇文章，我打算从 Sublime Text 转到 Visual Studio Code 了！ 原文: Immensely upg...",
                "author":"Fundebug",
                "likeNumber":15,
                "commentNumber":8
              }

            ]
          }
      }
    }
</script>

<style scoped>
  .note-list{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .note-list li{
    position: relative;
    min-width: 485px;
    width: 100%;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0 ;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
    line-height: 20px;
    display: list-item;
    text-align: -webkit-match-parent;
  }
  .note-list .title{
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    color: #333;
  }
  .note-list .have-img .wrap-img {
    margin-top: -58px;
    bottom: 40px;
    width: 125px;
    height: 100px;
  }
  .note-list .have-img .wrap-img {
    position: absolute;
    top: 50%;
    margin-top: -60px;
    right: 0;
    width: 125px;
    height: 100px;
  }
  .note-list .meta {
    padding-right: 0!important;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
  }
  .note-list .meta a {
    margin-right: 10px;
    color: #b4b4b4;
  }
  .note-list .meta span {
    color: #b4b4b4;
  }
  .note-list .abstract {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
    width: 70%;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
  }

</style>
