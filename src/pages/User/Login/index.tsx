import Footer from '@/components/Footer';
import {LockOutlined, UserOutlined,} from '@ant-design/icons';
import {LoginForm, ProFormCheckbox, ProFormText,} from '@ant-design/pro-components';
import {history, useModel} from '@umijs/max';
import {Alert, Divider, message, Tabs} from 'antd';
import React, {useState} from 'react';
import styles from './index.less';
import {userLoginUsingPOST} from "@/services/api-backend/userController";
import {MY_WECHAT, SYSTEM_LOGO} from "@/constants";
import {Link} from "@@/exports";

const LoginMessage: React.FC<{
  content: string;
}> = ({content}) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};
const Login: React.FC = () => {
  const [userLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('account');
  const {setInitialState} = useModel('@@initialState');

  const handleSubmit = async (values: API.UserLoginRequest) => {
    try {
      // 登录
      const res = await userLoginUsingPOST({
        ...values,
      });
      console.log(res.data)
      if (res.data) {
        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/');
        setInitialState({
          loginUser: res.data,
        });

        return;
      }
    } catch (error) {
      const defaultLoginFailureMessage = '登录失败，请重试！';
      console.log(error);
      message.error(defaultLoginFailureMessage);
    }
  };
  const {status, type: loginType} = userLoginState;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginForm
          // logo={<img alt="logo" src="/logo.svg"/>
          logo={<img alt="logo" src={SYSTEM_LOGO}/>}
          title="API接口调用平台"
          subTitle={'为调用而生'}
          initialValues={{
            autoLogin: true,
          }}

          onFinish={async (values) => {
            await handleSubmit(values as API.UserLoginRequest);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: '账户密码登录',
              },

            ]}
          />

          {status === 'error' && loginType === 'account' && (
            <LoginMessage content={'错误的用户名和密码(admin/ant.design)'}/>
          )}
          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon}/>,
                }}
                placeholder={'请输入账号'}
                rules={[
                  {
                    required: true,
                    message: '账号是必填项！',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon}/>,
                }}
                placeholder={'请输入密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: '密码不能小于8位！'
                  },
                ]}

              />
            </>
          )}


          <div
            style={{
              marginBottom: 24,
            }}
          >
            <a
              style={{
                float: 'left',
              }}
              href={MY_WECHAT}
              target={'_blank'} rel="noreferrer"
            >
              忘记密码联系琴酒
            </a>

            <Link to="/user/register" style={{
              float: 'right'
            }}> 新用户注册→ </Link>

            <Divider type={"horizontal"}/>

            <ProFormCheckbox noStyle name="autoLogin">
              自动登录
            </ProFormCheckbox>
          </div>


        </LoginForm>
      </div>
      <Footer/>
    </div>
  );
};
export default Login;
