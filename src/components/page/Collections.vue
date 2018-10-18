<template>
    <div class="container recommend">
      <img class="recommend-banner" src="//cdn2.jianshu.io/assets/web/recommend-collection-58f8968955ecbeb8f8f3b4cd95ec76be.png"/>
      <a class="help" href="#">
        <i class="iconfont glyphicon glyphicon-question-sign">

        </i>

        如何创建并玩转专题
      </a>


    </div>
</template>

<script>
    export default {
        name: "Collections",
      data(){},
      activated(){

      }
    }
</script>

<style scoped>
  .recommend-banner{
    min-height: 78px;
    border-radius: 4px;
    width: 100%;
    vertical-align: middle;
    border: 0;
  }
  .recommend .help{
    top: 56px;
    position: absolute;
    right: 30px;
    color: #fff;
  }
  .recommend .iconfont{
    font-family: iconfont!important;
    font-style: normal;
  }

</style>
