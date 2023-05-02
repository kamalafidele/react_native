import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup';

import AppInputText from "../AppInputText";
import AppButton from "../AppButton";
import AppText from "../AppText";
import colors from "../../config/colors";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen() {
    const handleLogin = (data) => {
        console.log(data);
    }

  return (
    <View>
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
  );
}

const styles = StyleSheet.create({
  container: {},
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
