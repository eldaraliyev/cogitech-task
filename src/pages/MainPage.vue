<template>
  <div>
    <base-card v-for="post in posts" :key="post.id" >
      <the-post :post='post' :author="author" ></the-post>
    </base-card>
    <base-pagination></base-pagination>
  </div>
</template>
<script>
import ThePost from "../components/posts/ThePost.vue";
export default {
  name: "App",
  components: { ThePost },
  computed: {
    posts() {
      const posts = this.$store.getters.handlePosts;
      return this.paginate(posts);
    },
    authors() {
      return this.$store.getters.handleAuthors;
    },
  },
  methods: {
    getPosts() {
      this.$store.dispatch("fetchPosts");
      this.$store.dispatch("fetchAuthors");
    },
    
    paginate(posts) {
      let page = this.$route.params.id;
      let perPage = 10;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return posts.slice(from, to);
    },
    author(idx) {
      let authors = this.authors;
      return authors[idx % 10];
    },
  },
  created() {
    this.getPosts();
  },
};
</script>
<style lang="scss" scoped>
div {
  width: 100%;
  margin: 0px auto;
  border-radius: 8px;
}
</style>