import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

const myTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.PRIMARY,
        background: colors.WHITE,
    }
}

export default myTheme;