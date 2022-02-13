<template>
  <div>
    <span class="post title">{{ post.title }}</span>
    <div class="post-body">
      <span class="post body">{{ post.body.slice(0, 20) }}</span>
      <span v-if="show" class="post body">{{ post.body.slice(21, -1) }}</span>
      <base-button @click="showBody">
        Show {{ show ? "less" : "more" }}
      </base-button>
    </div>
    <div class="post-footer">
      <span class="post author">{{ author(post.id) }}</span>
      <base-button class="remove" @click="removePost(post.id)"
        ><img src="@/assets/img/trash.svg"
      /></base-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post", "author"],
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showBody() {
      this.show = !this.show;
    },
    removePost(idx) {
      this.$store.dispatch("removePost", idx);
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  .post {
    display: block;
    margin-bottom: 0.5em;

    &.author {
      color: lighten($color: #000000, $amount: 10);
      font-weight: 800;
      margin-bottom: 0;
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
      margin-right: 0.5em;
    }
    &-footer {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
  }
  
}
</style>