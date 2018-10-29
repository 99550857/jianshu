<template>
    <div class="recommend-collection">
      <a class="collection" href="/" v-for="data in dataList" :key="data.id">
        <router-link :to="'/c/'+data.id">
          <img :src="data.url"/>
          <div class="name" v-text="data.content">
              <!--{{data.content}}-->
          </div>
        </router-link>
      </a>
      <a class="more-hot-collection">
        <router-link to="/collections">
          <span style="color: #333">更多热门专题 <i class="fas fa-angle-right" style="color: #333"></i></span>

        </router-link>
      </a>
    </div>
</template>

<script>
    export default {
        name: "HotSpecial",
        data(){
          return{
            dataList:[
              {
                "id":1,
                "url":"//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64 ",
                "content":"电影"
              },
              {
                "id":2,
                "url":"//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64 ",
                "content":"手绘"
              },
              {
                "id":3,
                "url":" //upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
                "content":"摄影"
              },
              {
                "id":4,
                "url":"//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64 ",
                "content":"自然科普"
              },
              {
                "id":5,
                "url":"//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64 ",
                "content":"互联网"
              },
              {
                "id":6,
                "url":"//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64 ",
                "content":"读书"
              },
            ]
          }
        }
    }
</script>

<style scoped>

  .recommend-collection{
    margin-top: 30px;
    margin-bottom: 20px;
  }
    .recommend-collection .collection{
      display: inline-block;
      margin: 0 18px 18px 0;
      min-height: 32px;
      background-color: #f7f7f7;
      border: 1px solid #dcdcdc;
      border-radius: 4px;
      vertical-align: top;
      overflow: hidden;
    }
  .recommend-collection .collection .name{
    display: inline-block;
    padding: 0 11px 0 6px;
    font-size: 14px;
    color: #333;
  }
  .recommend-collection .collection img{
    width: 32px;
    height: 32px;
    vertical-align: middle;
  }
  .recommend-collection .more-hot-collection {
    display: inline-block;
    margin-top: 7px;
    font-size: 14px;
    color: #787878;
  }
  .router-link-active {
    text-decoration: none;
  }

</style>
