<template>
  <base-card>
    <div>
      <ul>
        <li>
          <router-link v-if="link != 1" :to="prev">Previous</router-link>
        </li>
        <li v-for="item in 10" :key="item">
          <div>
            <router-link :to="'/' + item">{{ item }}</router-link>
          </div>
        </li>
         <li>
          <router-link v-if="link != 10" :to="next">Next</router-link>
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
      return '/' + (Number(this.link) - 1)
    },
    next() {
      return '/' + (Number(this.link) + 1)
    }
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