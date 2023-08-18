import { ThemeConfig } from "antd";
import { colors } from "./colors";

export const theme: ThemeConfig = {
  token: {
    colorPrimary: colors.primary.normal,
    colorInfo: colors.primary.normal,
    controlOutline: "none",
    screenXS: 480,
    screenXSMin: 480,
    screenXSMax: 767,
    screenSM: 768,
    screenSMMin: 768,
    screenSMMax: 991,
    screenMD: 992,
    screenMDMin: 992,
    screenMDMax: 1199,
    screenLG: 1200,
    screenLGMin: 1200,
    screenLGMax: 1599,
    screenXL: 1600,
    screenXLMin: 1600,
    screenXLMax: 1919,
    screenXXL: 1920,
    screenXXLMin: 1920,
  },
  // components: {
  //   Menu: {
  //     itemSelectedColor: "#fbfbfb",
  //     itemColor: "#222222",
  //     itemHoverBg: "#ccc",
  //     colorText: "#fbfbfb",
  //   },
  // },
};
