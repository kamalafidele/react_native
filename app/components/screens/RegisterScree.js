import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup';

import AppInputText from "../AppInputText";
import AppButton from "../AppButton";
import AppText from "../AppText";
import colors from "../../config/colors";
import Screen from "./Screen";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
});

function RegisterScreen() {
    const handleRegister = (data) => {
        console.log(data);
    }

  return (
    <Screen>
    <View>
      <Image style={styles.logo} source={require("../../assets/logo_2.jpg")} />
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => handleRegister(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, setFieldTouched, touched, errors }) => (
          <View style={styles.formContainer}>
            <AppInputText
              placeholder="Name"
              iconName={"human"}
              autoCorrect={false}
              autoCapitalize="none"
              onBlur={() => setFieldTouched('name')}
              keyboardType="email-address"
              onChangeText={ handleChange("name") }
            />
            {touched.name && <AppText color={colors.DANGER}>{ errors.name }</AppText>}

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

            <AppButton title={"Register"} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
    </Screen>
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
export default RegisterScreen;
