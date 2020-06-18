module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true
    },
    i18n: {
      locale: 'pt_BR',
      fallbackLocale: 'pt_BR',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
