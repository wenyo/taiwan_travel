module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/taiwan_travel/" : "/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/variables.scss"; @import "~@/assets/scss/mixin.scss";`,
      },
    },
  },
};
