<template>
  <div>
    <base-pagination></base-pagination>
    <base-card v-for="post in posts" :key="post.id">
      <!-- <base-card v-for="post in posts" :key="post.id"> -->
      <span class="post author">{{ author(post.id) }}</span>
      <!-- <span class="post author">{{ authors[post.userId] }}</span> -->
      <span class="post title">{{ post.title }}</span>
      <div class="post-body">
        <span class="post body" ref="body">{{ post.body }}</span>
        <base-button @click="test">
          Show {{ post.body.length >20 ? "less" : "more" }}
        </base-button>
      </div>
      <!-- <span class="post author">{{ post.id }}</span> -->
      <base-button @click="removePost(post.id)">Remove post</base-button>
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
    /* author() {
      const path = this.$route.params.id - 1;
      return this.authors[path];
    }, */
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
    loadMore() {
      let body = this.$refs.body;
      body.forEach(item => {
        this.$refs.body = item.innerText.slice(0,12)
        console.log(item.innerText.slice(0,12));
        
      })
    },
    author(idx) {
      let authors = this.authors
      console.log(authors);
      return authors[idx%10]
    },
    test() {
      this.loadMore()
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