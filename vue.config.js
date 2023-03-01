const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "./src/assets/styles/main.scss";
          @import 'vue3-carousel/dist/carousel.css';`,
      },
    },
  },
})
