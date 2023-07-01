import React, { useContext } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup';
import jwtDecode from "jwt-decode";

import AppInputText from "../AppInputText";
import AppButton from "../AppButton";
import AppText from "../AppText";
import colors from "../../config/colors";
import Screen from "./Screen";
import authApi from "../../api/auth";
import AuthContext from "../../auth/context";
import AuthStorage from "../../auth/storage";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen({ navigation }) {
    const authContext = useContext(AuthContext);
    
    const handleLogin = async ({ email, password }) => {
      const result = await authApi.login(email, password);
      if (result.ok) {
        const decoded = jwtDecode(result.data.token);
        authContext.setUser(decoded.user);
        
        AuthStorage.storeToken(result.data.token);
      }
    }

  return (
    <Screen>
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo_2.jpg")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => handleLogin(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, setFieldTouched, touched, errors }) => (
          <View style={styles.formContainer}>
            <AppInputText
              placeholder="Email"
              iconName={"email"}
              autoCorrect={false}
              autoCapitalize="none"
              onBlur={() => setFieldTouched('email')}
              keyboardType="email-address"
              onChangeText={ handleChange("email") }
            />
            {touched.email && <AppText color={colors.DANGER}>{ errors.email }</AppText>}
            <AppInputText
              placeholder="Password"
              iconName={"lock"}
              autoCorrect={false}
              autoCapitalize="none"
              onBlur={() => setFieldTouched('password')}
              secureTextEntry={true}
              onChangeText={ handleChange('password') }
            />
            {touched.password && <AppText color={colors.DANGER}>{ errors.password }</AppText>}
            <AppButton title={"Login"} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginVertical: 40,
    borderRadius: 20,
  },
  formContainer: {
    padding: 10,
  },
});
export default LoginScreen;
