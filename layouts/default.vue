<template>
  <div>
    <AppHeader />
    <div class="container base-height position-top-md">
        <slot />
    </div>
    <AppFooter />
  </div>
</template>

<style>
.base-height{
    height: 80vh;
    padding-top: 70px;
}
.container {
    width: 80%;
    margin: auto;
}
</style>
