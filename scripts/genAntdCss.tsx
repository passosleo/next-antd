import fs from "fs";
import { extractStyle } from "@ant-design/static-style-extract";
import React from "react";
import { ConfigProvider } from "antd";
import { theme } from "../src/theme";

const outputPath = "./public/antd.min.css";

const css = extractStyle((node: React.ReactNode) => (
  <>
    <ConfigProvider theme={theme}>{node}</ConfigProvider>
  </>
));

fs.writeFileSync(outputPath, css);
