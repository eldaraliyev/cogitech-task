<template>
  <div>
    <base-card v-for="post in posts" :key="post.id" >
      <the-post :post='post' :author="author" ></the-post>
    </base-card>
    <base-pagination></base-pagination>
    <!-- <base-card v-for="post in posts" :key="post.id">
      <span class="post title">{{ post.title }}</span>
      <div class="post-body">
        <span class="post body">{{ post.body.slice(0, 20) }}</span>
        <span v-if="!showBody(post.id)" class="post body">{{
          post.body.slice(21, -1)
        }}</span>
        <base-button @click="showBody(post.id)">
          Show {{ post.body.length > 19 ? "less" : "more" }}
        </base-button>
      </div>
      <span class="post author">{{ author(post.id) }}</span>
      <base-button class="remove" @click="removePost(post.id)"
        ><img src="@/assets/img/trash.svg"></base-button
      >
    </base-card> -->
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