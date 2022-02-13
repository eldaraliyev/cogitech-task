<template>
  <button :class="remove">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: lighten($color: #0000ff, $amount: 20);
  &:hover,
  &:active {
    color: lighten($color: #0000ff, $amount: 30);
  }
}
</style>