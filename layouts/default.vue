<template>
  <div>
    <AppHeader />
    <div class="container base-height margin-top-md">
        <slot />
    </div>
    <AppFooter />
  </div>
</template>

<style>
.base-height{
    height: 80vh;
}
.margin-top-md{
    margin-top: 70px;
}
.container {
    width: 80%;
    margin-right: auto;
}
</style>
