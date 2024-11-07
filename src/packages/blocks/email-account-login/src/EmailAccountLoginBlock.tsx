import React from "react";

// Customizable Area Start
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Platform
} from "react-native";

//@ts-ignore
import CustomCheckBox from "../../../components/src/CustomCheckBox";
// Customizable Area End

import EmailAccountLoginController, {
  Props
} from "./EmailAccountLoginController";

export default class EmailAccountLoginBlock extends EmailAccountLoginController {
  
  // Customizable Area Start
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    return (
      // Required for all blocks
      <ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
        {/* Required for all blocks */}
        <TouchableWithoutFeedback
          testID={"Background"}
          onPress={() => {
            this.hideKeyboard();
          }}
        >
          {/* Customizable Area Start */}
          {/* Merge Engine UI Engine Code */}
          <View>
            {this.isPlatformWeb() ? (
              <Text style={styles.labelTitle}>{this.labelTitle}</Text>
            ) : null}

            <Text style={styles.titleWhySignUp}>{this.state.labelHeader}</Text>

            <TextInput
              testID="txtInputEmail" //Merge Engine::From BDS
              style={styles.bgMobileInput} //UI Engine::From Sketch
              placeholder="Email" //UI Engine::From Sketch
              {...this.txtInputEmailProps} //Merge Engine::From BDS - {...this.testIDProps}
            />

            <View style={styles.bgPasswordContainer}>
              <TextInput
                testID="txtInputPassword" //Merge Engine::From BDS
                style={styles.bgPasswordInput} //UI Engine::From Sketch
                placeholder={this.state.placeHolderPassword} //UI Engine::From Sketch
                {...this.txtInputPasswordProps} //Merge Engine::From BDS - {...this.testIDProps}
              />

              <TouchableOpacity
                testID={"btnPasswordShowHide"} //Merge Engine::From BDS
                style={styles.passwordShowHide} //UI Engine::From Sketch
                {...this.btnPasswordShowHideProps} //Merge Engine::From BDS - {...this.testIDProps}
              >
                <Image
                  testID={"btnPasswordShowHideImage"} //Merge Engine::From BDS - testIDImage
                  style={styles.imgPasswordShowhide} //UI Engine::From Sketch
                  {...this.btnPasswordShowHideImageProps} //Merge Engine::From BDS - {...this.testIDProps}
                />
              </TouchableOpacity>
            </View>
            <Text
              testID={"btnForgotPassword"} //Merge Engine::From BDS
              style={styles.forgotPassword} //UI Engine::From Sketch
              {...this.btnForgotPasswordProps} //Merge Engine::From BDS - {...this.testIDProps}
            >
              Forgot password?
            </Text>
            <View style={styles.checkBoxContainerView}>
              {/* Refactor for custom CheckBox   */}
              <CustomCheckBox
                testID={"CustomCheckBox"} //Merge Engine::From BDS
                {...this.CustomCheckBoxProps} //Merge Engine::From BDS - {...this.testIDProps}
              />

              <Text
                testID={"btnRememberMe"} //Merge Engine::From BDS
                style={styles.rememberMe} //UI Engine::From Sketch
                {...this.btnRememberMeProps} //Merge Engine::From BDS - {...this.testIDProps}
              >
                {this.state.labelRememberMe} {/*UI Engine::From Sketch*/}
              </Text>
            </View>
            <Button
              testID={"btnEmailLogIn"} //Merge Engine::From BDS
              title={this.state.btnTxtLogin} //UI Engine::From Sketch
              {...this.btnEmailLogInProps} //Merge Engine::From BDS - {...this.testIDProps}
            />
            <Text style={styles.orLabel}>{this.state.labelOr}</Text>
            <Text
              testID="btnSocialLogin" //Merge Engine::From BDS
              style={styles.bgOtherLoginButton} //UI Engine::From Sketch
              {...this.btnSocialLoginProps} //Merge Engine::From BDS - {...this.testIDProps}
            >
              {this.state.btnTxtSocialLogin}
            </Text>
          </View>
          {/* Merge Engine UI Engine Code */}
          {/* Customizable Area End */}
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
}

// Customizable Area Start
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginLeft: "auto",
    marginRight: "auto",
    width: Platform.OS === "web" ? "75%" : "100%",
    maxWidth: 650,
    backgroundColor: "#ffffffff"
  },
  titleWhySignUp: {
    marginBottom: 32,
    fontSize: 16,
    textAlign: "left",
    marginVertical: 8
  },
  titleOtpInfo: {
    marginBottom: 32,
    fontSize: 16,
    textAlign: "left",
    marginVertical: 8
  },

  bgOtherLoginButton: {
    flexDirection: "row",
    fontSize: 16,
    textAlign: "center",
    backgroundColor: "#00000000",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#767676",
    borderRadius: 2,
    padding: 10,
    color: "#6200EE",
    fontWeight: "bold"
  },

  bgMobileInput: {
    flexDirection: "row",
    fontSize: 16,
    textAlign: "left",
    backgroundColor: "#00000000",
    borderWidth: Platform.OS === "web" ? 0 : 1,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: "#767676",
    borderRadius: 2,
    padding: 10
  },

  bgPasswordInput: {
    flex: 1,
    fontSize: 16,
    textAlign: "left",
    backgroundColor: "#00000000",
    minHeight: 40,
  },
  passwordShowHide: {
    alignSelf: "center"
  },

  bgPasswordContainer: {
    flexDirection: "row",
    backgroundColor: "#00000000",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: "#767676",
    borderRadius: 2,
    paddingLeft: 5,
    borderWidth: Platform.OS === "web" ? 0 : 1
  },

  bgRectBorder: {
    borderWidth: 1,
    borderColor: "#767676",
    borderRadius: 2,
    marginBottom: 10,
    padding: 10
  },

  labelTitle: {
    marginTop: 24,
    marginBottom: 32,
    fontSize: 32,
    textAlign: "left",
    marginVertical: 8,
    color: "#6200EE"
  },
  imgPasswordShowhide: Platform.OS === "web" ? { height: 30, width: 30 } : {},

  forgotPassword: {
    color: "#6200EE",
    fontWeight: "bold",
    marginBottom: 10,
    zIndex: -1
  },
  checkBoxContainerView: {
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: -7,
    zIndex: -1
  },
  rememberMe: {
    color: "#6200EE",
    fontWeight: "bold",
    alignSelf: "center",
    zIndex: -1
  },
  orLabel: {
    color: "#00000000",
    fontWeight: "bold",
    alignSelf: "center",
    margin: 20
  }
});
// Customizable Area End