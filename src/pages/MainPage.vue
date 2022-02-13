<template>
  <div>
    <base-pagination></base-pagination>
    <base-card v-for="post in posts" :key="post.id">
      <span class="post author">{{ author(post.id) }}</span>
      <span class="post title">{{ post.title }}</span>
      <div class="post-body">
        <span class="post body">{{ post.body.slice(0,20) }}</span>
        <span v-if="!showBody(post.id)" class="post body">{{ post.body.slice(21,-1) }}</span>
        <base-button @click="showBody(post.id)">
          Show {{ post.body.length > 19 ? "less" : "more" }}
        </base-button>
      </div>
      <base-button class="remove" @click="removePost(post.id)">Remove post</base-button>
    </base-card>
  </div>
</template>
<script>
export default {
  name: "App",
  
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
    removePost(idx) {
      this.$store.dispatch("removePost", idx);
    },
    paginate(posts) {
      let page = this.$route.params.id;
      let perPage = 10;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return posts.slice(from, to);
    },
    author(idx) {
      let authors = this.authors
      return authors[idx%10]
    },
    /* test(idx) {
      let posts  = this.posts
            console.log(posts[idx].body);
    if (condition) {
      
    } */
    showBody(idx) {
      
     return idx
    }
    
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

  .post {
    display: block;
    margin-bottom: 0.5em;

    &.author {
      color: lighten($color: #000000, $amount: 10);
      font-weight: 800;
      &::before {
        content: "Posted by: ";
        color: lighten($color: #000000, $amount: 70);
      }
    }
    &.title {
      font-weight: 600;
      color: lighten($color: #000000, $amount: 30);
    }
    &.body {
      display: inline;
      color: lighten($color: #000000, $amount: 50);
      margin-right: .5em;
    }
  }
}
</style>