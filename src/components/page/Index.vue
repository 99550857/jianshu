<template>
  <b-row>
    <b-col cols="8">
      <v-carousel></v-carousel>
      <v-hot-special></v-hot-special>
      <v-article-list></v-article-list>
    </b-col>
    <b-col>
      <v-right-index></v-right-index>
    </b-col>
  </b-row>
</template>

<script>
  import vCarousel from '../common/Carousel';
  import vHotSpecial from '../common/HotSpecial';
  import vRightIndex from '../common/RightIndex';
  import vArticleList from '../common/ArticleList';
  export default {
    name: "Index",
    components: {
      vCarousel,
      vHotSpecial,
      vRightIndex,
      vArticleList
    }
  }
</script>

<style scoped>
  img{
    vertical-align: middle;
    border: 0;
  }
  a{
    cursor: pointer;
    text-decoration: none;
  }

</style>
