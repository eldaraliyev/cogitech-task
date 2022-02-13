<template>
  <base-card>
    <div>
      <ul>
        <li>
          <router-link v-show="link != 1" :to="prev">Previous</router-link>
        </li>
        <li>
          <router-link to="/1">1</router-link>
        </li>
        <li v-if="link < 4">
          <router-link to="/2">2</router-link>
        </li>
        <li v-if="link ==4">...</li>
        <li v-if="link < 5">
          <router-link to="/3">3</router-link>
        </li>
        <li v-if="link ==2 || link ==1 || link ==5">...</li>
        <li v-if="link > 2 && link < 6">
          <router-link to="/4">4</router-link>
        </li>
        <li v-if="link==3 || link==6">...</li>
        <li v-if="link > 3 && link < 7">
          <router-link to="/5">5</router-link>
        </li>
        <li v-if="link==4 || link==7">...</li>
        <li v-if="link > 4 && link < 8">
          <router-link to="/6">6</router-link>
        </li>
        <li v-if="link==5 || link==8">...</li>
        <li v-if="link > 5 && link < 9">
          <router-link to="/7">7</router-link>
        </li>
        <li v-if="link==6 || link>=9">...</li>
        <li v-if="link > 6">
          <router-link to="/8">8</router-link>
        </li>
        <li v-if="link==7">...</li>
        <li v-if="link > 7">
          <router-link to="/9">9</router-link>
        </li>

        <li>
          <router-link to="/10">10</router-link>
        </li>
        <li>
          <router-link v-show="link != 10" :to="next">Next</router-link>
        </li>
      </ul>
    </div>
  </base-card>
</template>
<script>
export default {
  computed: {
    link() {
      return this.$route.params.id;
    },
    prev() {
      return "/" + (Number(this.link) - 1);
    },
    next() {
      return "/" + (Number(this.link) + 1);
    },
  },
};
</script>
<style lang="scss" scoped>
div {
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    li {
      margin: 0 4px;
      a {
        text-decoration: none;
        color: lighten($color: #000000, $amount: 50);
        border: solid 1px transparent;
        padding: 4px 8px;
        font-weight: 600;
        transition: all 0.3s ease-in-out;
      }
      a:hover,
      a:active,
      .router-link-active {
        //color: lighten($color: #000000, $amount: 10);
        //border: solid 1px lighten($color: #000000, $amount: 20);
        background-color: lighten($color: #000000, $amount: 50);
        color: #fff;
      }
    }
  }
}
</style>