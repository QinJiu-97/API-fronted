# 项目简介

一个提供API接口供开发者调用的平台。

管理员可以接入并发布接口，统计分析各接口调用情况;用户可以注册登录并开通接口调用权限，然后可以浏览接口及在线调试，还能使用客户端SDK轻松在代码中调用接口。
项目的前端并不复杂，更侧重后端，包含丰富的编程技巧和架构设计层面的知识。

##### 架构
![](https://github.com/QinJiu-97/API-Interface/blob/master/doc/architecture.png)

##### 登录
![](https://github.com/QinJiu-97/API-Interface/blob/master/doc/login.png)

##### 主页（浏览接口）
![](https://github.com/QinJiu-97/API-Interface/blob/master/doc/index.png)

##### 接口管理

![](https://github.com/QinJiu-97/API-Interface/blob/master/doc/manage.png)

##### 在线调用

![](https://github.com/QinJiu-97/API-Interface/blob/master/doc/info.png)

使用自己开发的客户端SDK,一行代码调用接口:

![](https://github.com/QinJiu-97/API-Interface/blob/master/doc/resource.png)

它足够新颖，不同于大家在学校时做的管理系统、商城项目等，开放平台通常是知名企业(产品)才会建设和提供的。开放平台类的项目不要说现成的教程了，连相关的文章都少的可怜!如下图，有点儿人看的文章基本都是几年前的了:

![](https://github.com/QinJiu-97/API-Interface/blob/master/doc/search.png)

此外，开放平台项目涉及多个系统的交互(不止有一个后端)，包含了API签名认证、网关、RPC、分布式等必学知识，很适合帮助后端同学开拓眼界、提升系统设计和架构能力

![](https://github.com/QinJiu-97/API-Interface/blob/master/doc/5sys.png)

##### 本项目适合的同学


本项目更侧重后端，如果你学习过后端开发技术（比如Java Web)，希望做一个区别于管理系统的、有亮点的，并提升自己的编程和架构设计能力，那么非常欢迎来学习

##### 技术选型

###### 前端

- React 18
- Ant Design Pro 5.x脚手架
- Ant Design & Procomponents 组件库· Umi4前端框架
- OpenAPI前端代码生成

###### 后端

- 
  .Java Spring Boot
- MySQL数据库
- MyBatis-Plus 及 MyBatis X自动生成，API签名认证(Http 调用)
- Spring Boot Starter (SDK开发)，Dubbo分布式(RPC、Nacos).，Swagger + Knife4j接口文档生成. Spring Cloud Gateway微服务网关
- Hutool、Apache Common Utils、Gson等工具库





##### 项目扩展点

1. 用户申请更换签名
2. 其他用户上传接口
3. 网关校验是否有校验次数
4. 网关优化
   1. 限流
   2. 熔断
   3. 降级

​	4. 接口限流和防刷：通过设置接口访问频率限制、IP限制、验证码等方式，防止恶意用户对API接口进行滥用或攻击。

5. 接口监控和日志记录：记录API接口的访问日志，以便在出现问题时进行排查和解决，同时监控API接口的性能和可用性，及时发现和处理问题。
6. 接口版本管理：及时发布新版本的API接口，并对旧版本进行废弃或逐步淘汰，避免接口版本的混乱和维护的困难。
7. 接口测试：在发布API接口之前进行全面的测试，包括单元测试、集成测试和性能测试等，确保接口的正确性、稳定性和性能。
8. 接口文档和API接口的同步更新：当API接口发生变化时，及时更新接口文档，以便用户可以及时了解变更的内容。同时，在更新API接口时，也要及时更新文档，避免文档和接口的不一致。
9. 防止SQL注入攻击：对用户输入的参数进行有效性校验和转义，避免恶意用户利用SQL注入攻击获取数据或者篡改数据。
10. 防止跨站脚本攻击：对输入参数进行有效性校验和过滤，避免恶意用户利用XSS攻击获取用户的cookie信息或者执行脚本等。
    1. 数据类型校验：根据输入参数的数据类型进行校验，确保输入参数类型符合预期。
    2. 长度限制：根据实际需要，对输入参数的长度进行限制，避免输入参数超过设定范围。
    3. 格式检查：对输入参数进行格式检查，确保输入参数符合预期格式。例如，对手机号码进行格式检查，只允许输入11位数字。
    4. 数据范围检查：对输入参数进行数据范围检查，确保输入参数在合理的范围内。例如，对年龄进行检查，确保年龄在0-150岁之间。
    5. 过滤特殊字符：对输入参数进行特殊字符过滤，避免恶意用户利用特殊字符进行攻击。例如，对SQL语句中的关键字符进行过滤。
    6. 输入参数白名单：对输入参数进行白名单过滤，只允许输入预期的参数值。例如，对地区进行过滤，只允许输入固定的地区名称。
    7. 参数组合检查：对多个输入参数进行组合校验，确保参数之间的逻辑关系符合预期。例如，对起始日期和结束日期进行组合校验，确保起始日期小于结束日期。
    8. 除了上述提到的对输入参数进行有效性校验和过滤的方法之外，还需要注意以下细节：
       1. 参数顺序：在接口文档中应该明确规定输入参数的顺序，并且按照顺序进行传递。
       2. 参数编码：应该使用统一的编码方式，例如UTF-8，避免由于编码不一致导致输入参数解析错误。
       3. 参数命名：应该使用有意义的参数名，避免使用无意义的缩写或者简写。同时应该规范命名方式，例如使用驼峰命名法。
       4. 参数默认值：对于可选的输入参数，应该指定默认值。这样可以避免由于输入参数缺失导致程序错误。
       5. 参数描述：在接口文档中应该对每个输入参数进行详细的描述，包括数据类型、长度限制、数据范围等信息。这样可以帮助开发者更好地理解接口功能和使用方式。
       6. 参数安全性：对于敏感的输入参数，例如密码、秘钥等，应该使用加密方式进行传输，避免明文传输导致安全问题。
       7. 日志记录：在接口调用过程中，应该记录输入参数和输出结果，以便进行问题定位和排查。
11. 防止跨站请求伪造攻击：使用CSRF Token等方式对请求来源进行验证，避免恶意用户伪造请求，并利用授权用户的权限进行恶意操作。
12. 防止暴力破解攻击：设置合理的登录失败次数限制，并采用图片验证码等方式防止暴力破解攻击。
13. 加密传输数据：使用SSL/TLS协议加密API接口的传输数据，确保数据传输过程中的安全性。
14. 日志记录和监控：记录API接口的访问日志，对异常操作进行报警，及时发现和处理安全事件。
