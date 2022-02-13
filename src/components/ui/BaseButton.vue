<template>
  <button>
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: lighten($color: #000000, $amount: 40);
  &:hover,
  &:active {
    color: lighten($color: #000000, $amount: 70);
  }
}
</style>