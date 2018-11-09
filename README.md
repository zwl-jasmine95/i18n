

## 项目结构

```
[i18n]
|    |- [{lang}]
|    |      `- *.json
|    `- ...

或者

[i18n]
|    |- [**]
|    |   `- *.{lang}.json
|    `- ...
```

本案例采用第二种方式，一般将 **i18n** 文件夹放在static文件夹中（**不管放哪，只需要配置好路径即可**）

------





## 配置
**i18n js文件在该项目lib文件夹下（i18n.min.js），在使用前记得引用。**

### 中英文切换按钮

> ```html
> <div i18n-lang-btn='en'>English</div>
> <div i18n-lang-btn='cn'>中文</div>
> ```
>
> ```i18n-lang-btn```  属性是必须的，其他根据需要自己定义。



### 页面head配置

> 配置翻译文件夹 i18n 所在的位置。
>
> ```html
> <meta i18n-path='{lang}/**/* | **/*.{lang}'>
> ```



例如当项目结构使用第二种方式时：

```html
<!-- 首页 -->
<meta i18n-path='./i18n/index.{lang}'>

<!-- 其他页 -->
<meta i18n-path='./i18n/hello/hello.{lang}'>

<!-- 如果i18n放在static目录下 -->
<meta i18n-path='./static/i18n/index.{lang}'>
```

------





## 页面结构中英文设置

 HTML标签属性设置规则：

| 类型        | 属性                  | 描述                   | 使用方法                    |
| ----------- | --------------------- | ---------------------- | --------------------------- |
| common      | i18n-c                | 公共文案               | i18n-c='key_name'           |
| keywords    | i18n-k                | 关键字                 | i18n-k='key_name'           |
| page        | i18n-p                | 当前页面               | i18n-p='key_name'           |
| style       | i18n-s                | i18n-s                 |                             |
| image       | i18n-(c \| p)-i       | 公共/当前页面 图片路径 | i18n-c-i='key_name'         |
| pleceholder | i18n-(c \| k \| p)-ph | pleceholder值          | i18n-c-ph='key_name' \| ... |

\* key_name: `i18n key name`



举个例子：

```json
//index.cn.json
{
    "1":"中文"
}
//index.en.json
{
    "2":"Chinese"
}

//index.html
<p i18n-p="1">中文</p>
```



> 注意：当给标签设置`i18n-s`属性的时候，在英文环境下该标签会新增class名： `i18n-en`  ，在中文环境下会新增class名：`i18n-cn` 。（两个class不同时出现）

------





## demo运行

```
yarn
yarn dev
```

