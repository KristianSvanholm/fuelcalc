const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: "/fuelcalc/",
  transpileDependencies: [
    'vuetify'
  ]
})
