<template>
  <header>
    <nav class="topnav">
      <NuxtLink class="brand" to="/">Mini Netflix</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.topnav {
  overflow: hidden;
  background-color: #e9e9e9;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-shadow: -5px -5px 9px rgba(255, 255, 255, 0.45),
    5px 5px 9px rgba(94, 104, 121, 0.3);
  z-index: 99;
}

.topnav .brand {
  float: left;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  color: #2196f3;
}
</style>