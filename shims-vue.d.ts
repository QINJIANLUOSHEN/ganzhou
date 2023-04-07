/*
 * @Author: yushuang
 * @Date: 2021-12-28 18:18:13
 * @LastEditors: yushuang
 * @LastEditTime: 2022-07-08 15:54:21
 * @Description:
 */
/* eslint-disable */
declare module "*.vue" {
  import type, { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.svg";

declare module "lodash/cloneDeep";
declare module "lodash/merge";
declare module "lodash/set";
declare module "lodash/get";
declare module "lodash/unset";
declare module "element-plus/lib/locale/lang/zh-cn";
declare module "element-plus/lib/locale/lang/en";
declare module "pinyin-pro";
declare module "@p-base/x-data-spreadsheet";
declare module "@p-base/x-data-spreadsheet/src/locale/zh-cn";
declare module "@p-base/color-gradient-picker";

declare let appConfig: {
  jdpAppCode: string;
  jdpOuApiContext: string;
  ouApiContext: string;
  demoApiContext: string;
  jdpDemoApiContext: string;
  jdpBpmApiContext: string;
  lego: string;
  legoApi: string;
  lowCodeApi: string;
  lowCodeCdn: string;
  legoPreview: string;
  legoPreviewImg: string;
  themes: any[];
  needMountedOnBodyComponentNames: string[];
  useManualUrl: string;
  feedbackUrl: string;
  socketIp: string;
};

interface MyWindow extends Window {
  monaco: any;
}

declare var window: MyWindow;
