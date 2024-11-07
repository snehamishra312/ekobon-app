# **React Native** | _**CarbonOffsetApp**_ | _**120578**_ | _**studio_pro**_

## **Catalog ProjectId: 93491** | **Catalog BuildId: 5353**

## NOTE FOR DEVELOPERS:
Clone the code-engine branch into your working branch. The contents of the branch may get overwritten.
## Author:
Code-Engine
## Keywords:
 - CarbonOffsetApp
 - web
## Assembled Features To Block Status

| **Feature-Name**        | **Block-Name**        | **Path**  | **Status**  |
|:-------------|:-------------|:-------------|:-------------|
| SignuploginModule2      | social-media-account-registration<br>core<br>social-media-account<br>email-account-login<br>email-account-registration<br>country-code-selector<br>forgot-password<br>otp-input-confirmation<br>social-media-account-login<br>      | {+packages/blocks/social-media-account-registration+}<br>{+packages/blocks/core+}<br>{+packages/blocks/social-media-account+}<br>{+packages/blocks/email-account-login+}<br>{+packages/blocks/email-account-registration+}<br>{+packages/blocks/country-code-selector+}<br>{+packages/blocks/forgot-password+}<br>{+packages/blocks/otp-input-confirmation+}<br>{+packages/blocks/social-media-account-login+}<br> | {+Non-Empty+} |
| Events3      | events<br>      | {+packages/blocks/events+}<br> | {+Non-Empty+} |
| Calendar3      | scheduling<br>      | {+packages/blocks/scheduling+}<br> | {+Non-Empty+} |
| OrderManagement2      | ordermanagement<br>catalogue<br>      | {+packages/blocks/ordermanagement+}<br>{+packages/blocks/catalogue+}<br> | {+Non-Empty+} |
| Dashboard4      | dashboard<br>      | {+packages/blocks/dashboard+}<br> | {+Non-Empty+} |
| ContactUs2      | contactus<br>utilities<br>      | {+packages/blocks/contactus+}<br>{+packages/blocks/utilities+}<br> | {+Non-Empty+} |
| Analytics9      | analytics<br>      | {+packages/blocks/analytics+}<br> | {+Non-Empty+} |
| InteractiveFaqs      | interactivefaqs<br>      | {+packages/blocks/interactivefaqs+}<br> | {+Non-Empty+} |
| Videos8      | videos<br>      | {+packages/blocks/videos+}<br> | {+Non-Empty+} |
| CategoriessubCategories      | categoriessubcategories<br>      | {+packages/blocks/categoriessubcategories+}<br> | {+Non-Empty+} |
| Tutorials2      | onboardingguide<br>      | {+packages/blocks/onboardingguide+}<br> | {+Non-Empty+} |
| Maps4      | maps<br>      | {+packages/blocks/maps+}<br> | {+Non-Empty+} |
| CustomisableUserSubscriptions2      | customisableusersubscriptions<br>      | {+packages/blocks/customisableusersubscriptions+}<br> | {+Non-Empty+} |
| GraphicalCharts2      | visualanalytics<br>      | {+packages/blocks/visualanalytics+}<br> | {+Non-Empty+} |
| ShoppingCart2      | shoppingcart<br>      | {+packages/blocks/shoppingcart+}<br> | {+Non-Empty+} |
| CustomForm3      | customform<br>      | {+packages/blocks/customform+}<br> | {+Non-Empty+} |
| Payments      | Payments      | {-packages/blocks/Payments-} | {-Empty-} |
| ProjecttaskTracking2      | ProjecttaskTracking2      | {-packages/blocks/ProjecttaskTracking2-} | {-Empty-} |
| InstantGiftCards      | InstantGiftCards      | {-packages/blocks/InstantGiftCards-} | {-Empty-} |
| InvoiceBilling      | InvoiceBilling      | {-packages/blocks/InvoiceBilling-} | {-Empty-} |
| AdminConsole3      | AdminConsole3      | {-packages/blocks/AdminConsole3-} | {-Empty-} |
| RolesPermissions2      | RolesPermissions2      | {-packages/blocks/RolesPermissions2-} | {-Empty-} |
| Settings5      | Settings5      | {-packages/blocks/Settings5-} | {-Empty-} |
| UploadMedia2      | UploadMedia2      | {-packages/blocks/UploadMedia2-} | {-Empty-} |
| PaytmWalletIntegration      | PaytmWalletIntegration      | {-packages/blocks/PaytmWalletIntegration-} | {-Empty-} |
| EmailNotifications      | EmailNotifications      | {-packages/blocks/EmailNotifications-} | {-Empty-} |
| GooglePayIntegration      | GooglePayIntegration      | {-packages/blocks/GooglePayIntegration-} | {-Empty-} |
| ContentManagement      | ContentManagement      | {-packages/blocks/ContentManagement-} | {-Empty-} |
| LinkShare      | LinkShare      | {-packages/blocks/LinkShare-} | {-Empty-} |
| Download      | Download      | {-packages/blocks/Download-} | {-Empty-} |
| Calculator3      | Calculator3      | {-packages/blocks/Calculator3-} | {-Empty-} |
| CustomisableUserProfiles      | CustomisableUserProfiles      | {-packages/blocks/CustomisableUserProfiles-} | {-Empty-} |
| ProjectManagement2      | ProjectManagement2      | {-packages/blocks/ProjectManagement2-} | {-Empty-} |
| Gallery      | Gallery      | {-packages/blocks/Gallery-} | {-Empty-} |
| AutomaticCheckoutCalculation2      | AutomaticCheckoutCalculation2      | {-packages/blocks/AutomaticCheckoutCalculation2-} | {-Empty-} |
| VideoEmbeddingYoutube      | VideoEmbeddingYoutube      | {-packages/blocks/VideoEmbeddingYoutube-} | {-Empty-} |

## AWS BACKEND DEPLOYMENT URL
 - BaseURL exported as: "https://carbonoffsetapp-120578-ruby.b120578.stage.eastus.az.svc.builder.ai"
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

See docs folder for additional information.

### Prerequisites

What things you need to install the software and how to install them

* React Native (last tested on react-native0.61.3)
  - https://facebook.github.io/react-native/docs/getting-started

* IFF brew is installed and user doesn't have permisions.
```
  $ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"
  $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

* XCode 11 or greater

* XCode Command Line Tools
```
  $ xcode-select --install
```

* Android SDK
```
  $ brew cask install android-sdk
```

* JDK 11
```
  $ brew tap homebrew/cask-versions
  $ brew cask install java
  $ brew cask install java11
```

### Installing

A step by step series of examples that tell you how to get a development env running

Install yarn
```
  $ brew install yarn
```

Install node

```
  $ brew install node
```

Web
```
  $ yarn
  $ yarn workspace web start 
  (Note: After udpating depencies run again if no cocde erros. )
```

iOS
```
  $ yarn
  $ cd packages/mobile/ios && pod install && cd ../../../ && cp node-runners/RCTUIImageViewAnimated.m node_modules/react-native/Libraries/Image/RCTUIImageViewAnimated.m && npx react-native bundle --entry-file ./packages/mobile/index.js --platform ios --dev true --bundle-output ./packages/mobile/ios/main.jsbundle && yarn ios
```

Android - https://docs.expo.io/versions/latest/workflow/android-studio-emulator/
```
  $ yarn
  $ export JAVA_HOME=`/usr/libexec/java_home -v 11`; java -version; export ANDROID_HOME=${HOME}/Library/Android/sdk; export PATH=${PATH}:${ANDROID_HOME}/emulator && yarn android
```

## Running the tests

```
  $ yarn test
```


## CI/CD Details

We use GitlabCI for our deployment/Build pipelines

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).



