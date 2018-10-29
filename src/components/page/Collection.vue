<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="main-top">
          <div class="main-top">
            <a class="avatar-collection" href="#">
              <img
                src="//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
                alt="240">
            </a>
            <a class="btn btn-success follow">
              <i class="iconfont ic-follow"></i>
              <span>+ 关注</span>
            </a>
            <div class="btn btn-hollow js-contribute-button">
              投稿
            </div>
            <div class="title">
              <a class="name" href="#">{{user.name}}</a>
            </div>
            <div class="info">
              收录了49943篇文章 · 1615535人关注
            </div>
          </div>
        </div>
        <ul class="trigger-menu" data-pjax-container="#list-container">
          <li class=""><a href="/"><i class="iconfont ic-latestcomments"></i> 最新评论</a>
          </li>
          <li class="active"><a href="/"><i class="iconfont ic-articles"></i> 最新收录</a>
          </li>
          <li class=""><a href="/"><i class="iconfont ic-hot"></i> 热门</a></li>
        </ul>
        <v-article-list></v-article-list>
      </div>
      <div class="col-md-4 aside">
        <p class="title">专题公告</p>
        <div class="description js-description" v-html="topic.content">
          <!--<p>{{topic.content}}</p>-->
        </div>
        <div class="share">
          <span>分享到</span>
          <a class="option"><i class="fab fa-weibo"></i></a>
          <a class="option"><i class="fab fa-weixin"></i> </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import vArticleList from '../common/ArticleList';

  export default {
    name: "User",
    data() {
      return {
        user: {"name":"@IT·互联网"},
        //localStorage.getItem("loginUser"),
        topic: {
          "content": " 投稿须知:" +
          "          读书专题仅收录与读书有关的书评、读书笔记、阅读方法、读书清单等文章。" +
          "          文中不得出现非简书的链接;包括但不限于公众号、二维码、头条号、微博、一点资源等带有广告性质的信息; 配图不能带有水印。" +
          "          文章收录字数1000字起( 大神请忽略此限制)，请不要直接摘抄原文的话就来投稿。请注意排版美观、请不要密集投稿。" +
          "          投稿请查看投稿须知：<a href=\"https://www.jianshu.com/p/2a4cc9232f37\" class=\"blue-link\">https://www.jianshu.com/p/2a4cc9232f37</a>" +
          "          进群请添加主编微信: MYH5619175, 记得备注I简书昵称+读书]。" +
          "          欢迎关注公众号茶点故事（Jianshu_teahouse）每周一篇编委精心推荐精彩书评"
        }
      }
    }, components: {
      vArticleList,
    }
  }
</script>

<style scoped>
  .row {
    padding-top: 30px;
    margin-left: -15px;
    margin-right: -15px;

  }

  .main-top {
    margin-bottom: 36px;
  }

  .main-top .avatar-collection {
    float: left;
    width: 80px;
    height: 80px;
  }

  .main-top .avatar-collection img {
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 10%;
  }
.title .name{
  text-decoration: none;
  color: #333;
}

  .main-top .btn {
    float: right;
    margin: 23px 0 23px 16px;
    font-size: 15px;
    width: 100px;
    padding: 8px 0;

    border-radius: 25px;
  }
  .main-top .btn span{
    white-space: nowrap;
    color: white;
  }

  .main-top .btn-hollow {
    padding: 8px 0;
    width: 90px;
    float: right;
    margin: 23px 0 23px 16px;
    font-size: 15px;
  }

  .main-top .title {
    padding: 10px 0 0 100px;
  }

  .main-top .title .name {
    display: inline;
    font-size: 21px;
    font-weight: 700;
    vertical-align: middle;
  }

  .main-top .info {
    margin-top: 10px;
    padding-left: 100px;
    font-size: 14px;
    color: #969696;
  }

  .trigger-menu {
    margin-bottom: 20px;
    border-bottom: 1px solid #f0f0f0;
    font-size: 0;
    list-style: none;
  }

  ul {
    padding-left: 0;
  }

  .trigger-menu li {
    position: relative;
    display: inline-block;
    padding: 8px 0;
    margin-bottom: -1px;
  }

  li {
    line-height: 20px;
  }

  .container.aside {
    margin-left: 7%;
  }

  .collection .aside .title {
    float: left;
    margin-bottom: 10px;
    font-size: 14px;
    color: #969696;
  }

  .container .aside .description {
    position: relative;
    margin-bottom: 20px;
    padding: 0 0 16px;
    text-align: left;
    font-size: 14px;
    border-bottom: 1px solid #f0f0f0;
    clear: both;
    word-break: break-word !important;

  }

  .container .aside .share .option {
    margin-left: 10px;
    color: #333;
    font-size: 20px;
  }

  .btn-hollow {
    border: 1px solid rgba(59,194,29,.7);
    color: #42c02e!important;
  }
  .btn-hollow {
    padding: 4px 12px;
    font-size: 12px;
    font-weight: 400;
    line-height: normal;
    border-radius: 40px;
    background: none;
  }
  p {
    margin: 0 0 10px;
  }
</style>
