import {LockOutlined, UserOutlined,} from '@ant-design/icons';
import {message, Tabs} from 'antd';
import React, {useState} from 'react';
import {LoginForm, ProFormText} from '@ant-design/pro-form';
import {history, Link} from 'umi';
import Footer from '@/components/Footer';
import styles from './index.less';
import {SYSTEM_LOGO} from "@/constants";
import {userLoginUsingPOST, userRegisterUsingPOST} from "@/services/api-backend/userController";


const Register: React.FC = () => {
  const [type, setType] = useState<string>('account');


  //表单提交

  const handleSubmit = async (values: API.RegisterParams) => {
    const {userPassword, checkPassword} = values;
    if (userPassword !== checkPassword) {
      message.error('两次输入密码不一致');
      return;
    }
    try {
      // 注册
      const res = await userRegisterUsingPOST({
        ...values,
      });
      console.log(res.data)
      if (res.data) {
        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/');
        return;
      }
    } catch (error) {
      const defaultLoginFailureMessage = '注册失败，请重试！';
      console.log(error);
      message.error(defaultLoginFailureMessage);
    }
  };
  // const handleSubmit = async (values: API.RegisterParams) => {
  //   //校验
  //   const {userPassword, checkPassword} = values;
  //   if (userPassword !== checkPassword) {
  //     message.error('两次输入密码不一致');
  //     return;
  //   }
  //   try {
  //     // 注册
  //     const id = await userRegisterUsingPOST(values);
  //
  //     if (id) {
  //       const defaultLoginSuccessMessage = '注册成功！';
  //       message.success(defaultLoginSuccessMessage);
  //       /** 此方法会跳转到 redirect 参数所在的位置 */
  //
  //       if (!history) return;
  //       const {query} = history.location;
  //       history.push({
  //         pathname: '/user/login',
  //         query
  //       });
  //       return;
  //     }
  //   } catch (error: any) {
  //     const defaultLoginFailureMessage = '注册失败，请重试！';
  //     message.error(defaultLoginFailureMessage);
  //   }
  // };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginForm
          submitter={{
            searchConfig: {
              submitText: '注册'
            }
          }}
          // logo={<img alt="logo" src="/logo.svg" />}
          logo={<img alt="logo" src={SYSTEM_LOGO}/>}
          title="API接口调用平台"
          subTitle={'为调用而生'}
          initialValues={{
            autoLogin: true,
          }}

          onFinish={async (values) => {
            await handleSubmit(values as API.RegisterParams);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: '用户注册',
              },

            ]}
          />


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
              <ProFormText.Password
                name="checkPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon}/>,
                }}
                placeholder={'请再次输入密码'}
                rules={[
                  {
                    required: true,
                    message: '确认密码是必填项！',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: '密码不能小于8位！'
                  },
                ]}

              />
              <ProFormText
                name="planetCode"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon}/>,
                }}
                placeholder={'请输入邮箱'}
                rules={[
                  {
                    required: true,
                    message: '邮箱是必填项！',
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
            <Link to="/user/login"> ←返回登录页面 </Link>
          </div>

        </LoginForm>
      </div>
      <Footer/>
    </div>
  );
};

export default Register;
