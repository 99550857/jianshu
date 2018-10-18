<template>
  <b-row>
    <b-col cols="8">
      <div class="main-top">
        <a class="avatar-collection" href="#">
          <img
            src="//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
            alt="240">
        </a>
        <a class="btn btn-success follow">
          <i class="iconfont ic-follow"></i>
          <span>关注</span>
        </a>
        <div class="btn btn-hollow js-contribute-button">
          投稿
        </div>

        <div class="title">
          <a class="name" href="#">摄影</a>
        </div>
        <div class="info">
          收录了69568篇文章 · 1951861人关注
        </div>
      </div>
    </b-col>
    <b-col>右边</b-col>
  </b-row>
</template>

<script>
  export default {
    name: "User"
  }
</script>

<style scoped>
  .main-top {
    margin-bottom: 35px;
  }

  .main-top .avatar-collection {
    float: left;
    width: 80px;
    height: 80px;
  }

  .avatar-collection img {
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 10%;
  }
  .main-top .follow{
    padding: 8px 0;
    width: 100px;
  }
  .main-top .btn{
    float: right;
    margin: 23px 0 23px 16px;
    font-size: 15px;
    text-align: center;
    border: 1px solid transparent;
  }

</style>
