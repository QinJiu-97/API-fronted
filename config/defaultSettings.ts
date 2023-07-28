import { Settings as LayoutSettings } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  colorPrimary: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'API接口',
  pwa: false,
  logo: 'https://qinjiu-class-1311121186.cos.ap-beijing.myqcloud.com/com/qinjiu/logo/api-logo.png?q-sign-algorithm=sha1&q-ak=AKIDkUifmESYusg2hkJkGh_tDhB_2JbcnavZjssYntvIfRorhofAUG_Rxel9SSw4m516&q-sign-time=1690272478;1690276078&q-key-time=1690272478;1690276078&q-header-list=host&q-url-param-list=ci-process&q-signature=7eec74b9edd29698f6e36cd4ce6922401b215596&x-cos-security-token=IwNpp3Yv5Lpv1CglSS6UlWOIB3yXySfa45b5d68e468196b0a8b69eef21b3200bl5BCdTqziagqzjkgbn3LXNOA3RSd0_w-evpw_hHVtgNmP_B-dyA_ivPSdis4vYv22JNo6GiH5hV7r6GGsDwIvJxMysnFHljkROBLGg5z1GnlSWbGUDzjzRDG667sqXxfw6Jc4w92yQ-UMbZQeffOR1xWIMEjtXank8SQWLquPFQNDznBxIGOeQQfyc9BbN8G&ci-process=originImage',
  iconfontUrl: '',
};

export default Settings;
