<template>
  <div class="container recommend">
    <img class="recommend-banner" src="../../../static/img/recommend-collection-58f8968955ecbeb8f8f3b4cd95ec76be.png"/>
    <a class="help" href="#">
      如何创建并玩转专题
    </a>
    <div class="row">
      <div class="col-md-4" v-for="collection in collections">
        <div class="collection-wrap">
          <a target="_blank" :href="collection.collectionUrl">
            <img class="avatar-collection"
                 :src="collection.imgSrc"
                 alt="180">
            <h4 class="name">{{collection.name}}</h4>
            <p class="collection-description">{{collection.description}}</p>
          </a>
          <a class="btn btn-success follow">
            <i class="iconfont ic-follow"></i>
            <span>+ 关注</span>
          </a>
          <hr>
          <div class="count"><a target="_blank" href="#">{{collection.articleNumber}}篇文章</a> · {{collection.likeNumber}}人关注</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Collections",
    data() {

      return{
        collections:[
          {
            "imgSrc":"//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "name":"手绘",
            "description":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
            "articleNumber":13545,
            "likeNumber":465545,
            "collectionUrl":"#"
          },
          {
            "imgSrc":"//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "name":"手绘",
            "description":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
            "articleNumber":13545,
            "likeNumber":465545,
            "collectionUrl":"#"
          },
          {
            "imgSrc":"//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "name":"手绘",
            "description":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
            "articleNumber":13545,
            "likeNumber":465545,
            "collectionUrl":"#"
          },
          {
            "imgSrc":"//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "name":"手绘",
            "description":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
            "articleNumber":13545,
            "likeNumber":465545,
            "collectionUrl":"#"
          },
          {
            "imgSrc":"//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "name":"手绘",
            "description":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
            "articleNumber":13545,
            "likeNumber":465545,
            "collectionUrl":"#"
          }
          ,
          {
            "imgSrc":"//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "name":"手绘",
            "description":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
            "articleNumber":13545,
            "likeNumber":465545,
            "collectionUrl":"#"
          }
          ,
          {
            "imgSrc":"//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "name":"手绘",
            "description":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
            "articleNumber":13545,
            "likeNumber":465545,
            "collectionUrl":"#"
          }
          ,
          {
            "imgSrc":"//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "name":"手绘",
            "description":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
            "articleNumber":13545,
            "likeNumber":465545,
            "collectionUrl":"#"
          }


        ]
      }
    },
    activated() {

    }
  }
</script>

<style scoped>

  .recommend {
    position: relative;
    padding: 30px 0 50px;
    text-align: center;
  }

  .recommend-banner {
    min-height: 78px;
    border-radius: 4px;
    width: 100%;
    vertical-align: middle;
    border: 0;
  }

  .recommend .help {
    top: 56px;
    position: absolute;
    right: 30px;
    color: #fff;
  }
  .recommend .collection-wrap {
    height: 300px;
    margin-top: 80px;
    padding: 0 20px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    background-color: hsla(0,0%,71%,.1);
    -webkit-transition: .2s ease;
  }
  .avatar-collection{
    border-radius: 8px;
    width: 80px;
    height: 80px;
    margin: -40px 0 10px;
    display: inline-block;
    border: 1px solid #ddd;
    background-color: #fff;
  }
  .recommend .wrap h4 {
    font-size: 21px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 1.1;
    color: inherit;
    font-family: inherit;
  }
  .collection-description {
    min-height: 75px;
  }
  .recommend .collection-wrap .btn {
    width: 100px;
    padding: 8px 0;
    border-radius: 25px;
  }
  .recommend .collection-wrap .btn span{
    white-space: nowrap;
    color: white;
  }
.recommend .row a{
  color: #333;
  text-decoration: none;
}
</style>
