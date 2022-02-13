<template>
  <base-card>
    <div class="logo">
      <img src="@/assets/img/logo.svg"/>
      <h2>Posts</h2>
    </div>
  </base-card>
</template>

<style lang="scss" scoped>
.logo {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  img {
    border-right: solid 1px lighten($color: #000000, $amount: 40);
    width: 30%;
    margin-right: 1em;
    padding-right: 1em;
  }
}
</style>