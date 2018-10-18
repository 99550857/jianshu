<template>
    <div class="aside">
      <div class="border">
        <a href="#" v-for="border in borders" :key="border.id">
          <img :src="border.imgSrc"/>
        </a>
      </div>
      <div class="recommended-authors">
        <ul class="list">
          <li v-for="recommendAuthor in recommendAuthors" :key="recommendAuthor.id">
            <a href="#" class="avatar">
              <img :src="recommendAuthor.avatar"/>
            </a>
            <a class="follow">
              <i class="icon-font glyphicon glyphicon-plus">
              </i>
              关注
            </a>
            <a href="#" class="name" >
              {{recommendAuthor.name}}
            </a>
            <p >
              {{recommendAuthor.content}}
            </p>
          </li>
        </ul>

        <a href="#" class="find-more">
          查看全部
          <i class="glyphicon glyphicon-chevron-right"></i>
        </a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "RightIndex",
      data(){
          return {
              "borders":[
                {
                  "id":1,
                  "imgSrc":"//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"
                },

                {
                  "id":2,
                  "imgSrc":"//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"
                },

                {
                  "id":3,
                  "imgSrc":"//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
                },

                {
                  "id":4,
                  "imgSrc":"//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
                },

                {
                  "id":5,
                  "imgSrc":"//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
                },
                ],
            "recommendAuthors":[

              {
                "id":1,
                "avatar":"//upload.jianshu.io/users/upload_avatars/10849033/a3e12f47-c81c-4659-9c80-117f8b337408.jpg",
                "name":"lostdays",
                "content":"写了162.7k字 · 1.2k喜欢"
              },
              {
                "id":2,
                "avatar":"//upload.jianshu.io/users/upload_avatars/3730494/4a86a2a7-d5b9-47f1-969a-d8ef4711488b.jpg",
                "name":"格列柯南",
                "content":"写了599.6k字 · 14.7k喜欢"
              },
              {
                "id":3,
                "avatar":"//upload.jianshu.io/users/upload_avatars/3884693/b425c707-d998-46a6-98b1-9b1e241513c3.jpg",
                "name":"王诗翔",
                "content":"写了434.5k字 · 1.7k喜欢"
              },
              {
                "id":4,
                "avatar":"//upload.jianshu.io/users/upload_avatars/5796592/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg",
                "name":"乔汉童",
                "content":"写了504.8k字 · 1.3k喜欢"
              },
              {
                "id":5,
                "avatar":"//upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg",
                "name":"胡七筒",
                "content":"写了219.7k字 · 8.7k喜欢"
              },

            ]

          }
      }
    }
</script>

<style scoped>
 .aside .border{
   min-height: 184px;
   margin-top: -4px;
   padding-bottom: 4px;

 }
.border{
  border: none;
}

  .aside{
    padding: 30px 0 0;
  }
.aside .border a{
  background-color: transparent;
  text-decoration: none;
}

 .aside .border a img{
   min-height: 39px;
   width: 100%;
   margin-bottom: 6px;
   border-radius: 4px;
 }

  .recommended-authors{
    margin-top: 30px;
    margin-bottom: 20px;
    padding-top: 0;
    font-size: 13px;
    text-align: center;
  }

 .recommended-authors .list{
   margin:  0 0 20px;
   text-align: left;
   list-style: none;
   padding-left: 0;
 }
 .recommended-authors .list .avatar{
   float: left;
   width: 48px;
   height: 48px;
   margin-right: 10px;
   display: block;
   cursor: pointer;
 }
 .recommended-authors .list .avatar img{
   width: 100%;
   height: 100%;
   border: 1px solid #ddd;
   border-radius: 50%;
 }
  .follow{
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
    line-height: normal;
  }
  .follow .icon-font{
    font-family: icon-font!important;
    font-size: inherit;
    font-style: normal;
    font-weight: 400!important;
    -webkit-font-smoothing: antialiased;
  }

 .recommended-authors .list p{
   margin-top: 2px;
   font-size: 12px;
   color: #969696;
 }
 .recommended-authors .find-more {
   position: absolute;
   padding: 7px 7px 7px 12px;
   left: 0;
   width: 100%;
   font-size: 13px;
   color: #787878;
   background-color: #f7f7f7;
   border: 1px solid #dcdcdc;
   border-radius: 4px;
 }
  .recommended-authors .list li .name{
    color: #333;
  }

</style>
