const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

//MARK::Add Web Blocks
const appIncludes = [
resolveApp('../blocks/social-media-account-registration/src/'),
resolveApp('../blocks/core/src/'),
resolveApp('../blocks/social-media-account/src/'),
resolveApp('../blocks/email-account-login/src/'),
resolveApp('../blocks/email-account-registration/src/'),
resolveApp('../blocks/country-code-selector/src/'),
resolveApp('../blocks/forgot-password/src/'),
resolveApp('../blocks/otp-input-confirmation/src/'),
resolveApp('../blocks/social-media-account-login/src/'),
resolveApp('../blocks/events/src/'),
resolveApp('../blocks/scheduling/src/'),
resolveApp('../blocks/ordermanagement/src/'),
resolveApp('../blocks/catalogue/src/'),
resolveApp('../blocks/dashboard/src/'),
resolveApp('../blocks/contactus/src/'),
resolveApp('../blocks/utilities/src/'),
resolveApp('../blocks/analytics/src/'),
resolveApp('../blocks/interactivefaqs/src/'),
resolveApp('../blocks/videos/src/'),
resolveApp('../blocks/categoriessubcategories/src/'),
resolveApp('../blocks/onboardingguide/src/'),
resolveApp('../blocks/maps/src/'),
resolveApp('../blocks/customisableusersubscriptions/src/'),
resolveApp('../blocks/visualanalytics/src/'),
resolveApp('../blocks/shoppingcart/src/'),
resolveApp('../blocks/customform/src/'),
resolveApp('../blocks/Payments/src/'),
resolveApp('../blocks/ProjecttaskTracking2/src/'),
resolveApp('../blocks/InstantGiftCards/src/'),
resolveApp('../blocks/InvoiceBilling/src/'),
resolveApp('../blocks/AdminConsole3/src/'),
resolveApp('../blocks/RolesPermissions2/src/'),
resolveApp('../blocks/Settings5/src/'),
resolveApp('../blocks/UploadMedia2/src/'),
resolveApp('../blocks/PaytmWalletIntegration/src/'),
resolveApp('../blocks/EmailNotifications/src/'),
resolveApp('../blocks/GooglePayIntegration/src/'),
resolveApp('../blocks/ContentManagement/src/'),
resolveApp('../blocks/LinkShare/src/'),
resolveApp('../blocks/Download/src/'),
resolveApp('../blocks/Calculator3/src/'),
resolveApp('../blocks/CustomisableUserProfiles/src/'),
resolveApp('../blocks/ProjectManagement2/src/'),
resolveApp('../blocks/Gallery/src/'),
resolveApp('../blocks/AutomaticCheckoutCalculation2/src/'),
resolveApp('../blocks/VideoEmbeddingYoutube/src/'),

  resolveApp('src'),
  resolveApp('../components/src'),
  resolveApp('../framework/src'),
  resolveApp('../../node_modules/radar_sdk_js'),
  resolveApp('../../node_modules/react-native-elements'),
  resolveApp('../../node_modules/react-native-vector-icons'),
  resolveApp('../../node_modules/react-native-ratings'),
  resolveApp('../../node_modules/react-native-image-picker'),
  resolveApp('../../node_modules/react-native-check-box'),
  resolveApp('../../node_modules/react-native-calendars'),
  resolveApp('../../node_modules/react-native-swipe-gestures'),
  resolveApp('../../node_modules/react-native-password-strength-meter'),
  resolveApp('../blocks/restClient/src'),
  resolveApp('../blocks/alert/src'),
  resolveApp('../blocks/adapters/src'),
  resolveApp('../blocks/info-page/src')
]

module.exports = function override(config, env) {
  // allow importing from outside of src folder
  config.resolve.plugins = config.resolve.plugins.filter(
    plugin => plugin.constructor.name !== 'ModuleScopePlugin'
  )
  config.module.rules[0].include = appIncludes
  config.module.rules[1] = null
  config.module.rules[2].oneOf[1].include = appIncludes
  config.module.rules[2].oneOf[1].options.plugins = [
    require.resolve('babel-plugin-react-native-web'),
  ].concat(config.module.rules[2].oneOf[1].options.plugins)
  config.module.rules = config.module.rules.filter(Boolean)
  config.plugins.push(
    new webpack.DefinePlugin({ __DEV__: env !== 'production' })
  )
  config.resolve.alias = {'react-native-maps': 'react-native-web-maps', 'react-native': 'react-native-web'};
  return config
}