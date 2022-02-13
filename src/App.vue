<template>
  <div>
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;800&display=swap");
* {
  box-sizing: border-box;
  font-family: "Nunito Sans", sans-serif;
  margin: 0;
  padding: 0;
}
body {
  background-color: #f3f3f3;
  width: 50%;
  margin: auto;
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
}
</style>
