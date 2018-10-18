<template>
  <div>
    <h4>专题{{id}}详情</h4>
    <b-row>
      <b-col cols="8">
        <b-media vertical-align="center" class="article-box">
          <img :src="topic.topicUrl" class="article-thumbnail"/>
          <h6 class="mt-0 mb-1 title">{{topic.topicName}}</h6>
          <p class="abstract">
            <span>收藏了{{topic.articleCount}}篇文章,{{topic.fans}}关注</span>
          </p>
        </b-media>
      </b-col>
    </b-row>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
        topic: {},
        articleList: [],
        fansList:[]
      }
    },
    activated() {
      this.id = this.$route.params.id;
      console.log(this.id);
      if (this.id == 1) {
        var t = {
          "id": 1,
          "topicName": "读书",
          "topicUrl": "https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
          "summary": "读书读书读书读书读书读书读书读书",
          "articleCount": 49535,
          "fans": 1601,
          "description":"fdfdf",
          "creator":"简书",
          "articleList":[
            {
              "id":1,
              "title":"测试文章",
              "summary":"测试文章测试文章测试文章测试文章测试文章...",
              "thumbnail":"1.png",
              "authorId":2,
              "nickname":"作者",
              "comments":1234,
              "likes":12
            }
          ],
          "fansList":[
            {
              "authorId":3,
              "avatar":"11.png"
            }
          ]
        };
        this.topic = t;
      } else {
        this.topic = {};
      }
    },
    computed: function () {
      return this.topic;
    }
  }
</script>

<style scoped>

</style>
