---
title: 仓库、坐标以及依赖管理
isOriginal: true
order: 10
category:
  - Maven 入门手册
date: 2022-01-03
---

作者：村雨遥

博客：[JavaPark](https://cunyu1943.github.io/JavaPark)

>   吾生也有涯，而知也无涯。

## 前言

在我们创建使用 Maven 项目的过程中，当需要用到第三方的插件时，都是通过依赖管理来达成，也就是 Maven 项目中必有的 `pom.xml` 文件。POM（Project Object Model），即 **项目对象模型**，其中定义了 Maven 项目的形式。因此，`pom.xml` 可以看做是 Maven 项目中的导航。

## Maven 仓库

所谓仓库，就和我们平常说的粮仓啥的差不多，其实都是用来存放东西的。只不过在 Maven 项目中，仓库使用来存放我们项目所使用的 jar 包以及 Maven 所使用的各种 jar 包的。

而根据仓库存放位置的不同，我们可将其分为 **本地仓库** 和 **远程仓库**。

其中，本地仓库也就是我们个人 PC 中存放 jar 包的文件夹，用于存放 Maven 项目所需的 jar。

而远程仓库则指的是存放在互联网中的仓库，我们可以将其进一步细分为 **中央仓库**、**中央仓库镜像**、**私服**。

-   **中央仓库**：全世界最权威的一个仓库，我们所有的开发人员都可以共享使用，地址为：https://repo.maven.apache.org。
-   **中央仓库镜像**：顾名思义，它就是中央仓库的一个备份，它分散在各大洲的重要城市，方便各个地方的程序员使用起来更快捷。
-   **私服**：私服则是处于安全考虑，一般搭建在局域网中，仅提供给公司内部人员使用。

那我们如何使用仓库呢？或者说一个 Maven 项目从仓库中获取资源的顺序是怎样的呢？

通常来讲，当我们要使用 Maven 仓库中的资源时，是不需要我们去人为干预的。假设我们要使用某一个驱动，我们首先去 `pom.xml` 中进行配置，接着 Maven 将自动先去检查我们的本地仓库中是否存在该资源，如果没有，那么就到私服中午查找，如果还没有找到，那么就到中央仓库镜像中去查询，最后如果连镜像仓库中也没法找到，那就只有到中央仓库去进行搜索了。

## Maven 坐标

坐标，其实就相当于我们人的身份证，它是唯一的，用于标识一个项目。一个坐标的组成一般有如下几部分，前三者必须，`packaging` 可选，`classifier` 不能直接定义。

-   **groupId**：定义 Maven 项目隶属的实际组织，一般约定以创建该项目的组织名称的逆向域名开头。比如说公司的域名是：google.com，那么我们就可以将 `groupId` 设置为 `com.google`。
-   **artifactId**：定义实际项目中的一个 Maven 项目（模块），推荐使用实际项目名作为前缀。
-   **version**：定义 Maven 项目当前所处版本，一般使用三位数字进行标识，如 `1.1.1`。
-   **packaging**：项目打包方式，可以是 `jar`、`war`、`rar`、`ear`、`pom`，默认使用 `jar`。
-   **classifier**：帮助定义构建输出的一些附属构建，与主构件对应。
-   **dependencies**：添加项目所需的 `jar` 所对应的 Maven 坐标,，表示我们项目中所需的各种资源说明。
-   **dependency**：`dependencies` 的一个子标签，一个 `dependency` 对应一个坐标。
-   **properties**：用于设置属性。
-   **scope**：表示依赖的范围，通常有如下几种：

| 依赖范围   | 编译期有效 | 测试期有效 | 运行时有效 | 打包有效 |
| ---------- | ---------- | ---------- | ---------- | -------- |
| `compile`  | 😄          | 😄          | 😄          | 😄        |
| `test`     | 😡          | 😄          | 😡          | 😡        |
| `privided` | 😄          | 😄          | 😡          | 😡        |
| `runtime`  | 😡          | 😄          | 😄          | 😄        |
| `system`   | 😄          | 😄          | 😡          | 😡        |

以下就是一个最简单的 Maven 坐标实例：

```xml
<groupId>com.cunyu</groupId>
<artifactId>MavenDemo</artifactId>
<version>1.1.1</version>
```



## 依赖冲突

### 冲突产生原因

Maven 项目中，通常都会定义血多 `dependency`，每个 `dependency` 内部也会定义它的 `dependency`，而有时各个依赖之间会产生冲突，冲突的原因通常主要是 **由于 `jar` 包依赖的传递性**，如果在一个项目中同时引入了一个依赖的不同版本，就可能导致依赖冲突。

### 解决冲突的办法

当冲突产生时，需要如何解决呢？通常我们有两种处理策略：

-   **Maven 的默认处理策略**：

1.  **最短路径优先**：对于不同路径长度的 `jar` 包，优先选择路径更短的生效。
2.  **最先声明优先**：当路径一样时，如 `A -> B -> C` ，`E -> F -> C`，那么则谁先声明则先选择谁生效。

-   **移除依赖：用于排除某项依赖的依赖包**

除开上述策略外，我们也可以手动在 `pom.xml` 中使用 `<exclusion>` 标签来排除发生冲突的依赖包，如下面用于排除 `spring-core` 冲突的例子：

```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>5.1.9.RELEASE</version>
    <exclusions>
        <exclusion>
            <groupId>org.springframework</groupId>
            <artifactId>spring-core</artifactId>
        </exclusion>
    </exclusions>
</dependency>
```

## 总结

今天关于 Maven 的仓库和坐标的相关知识，以及 Maven 中依赖产生冲突的原因和如何解决冲突的内容就到此结束了。个人水平有限可能有些遗漏的方面，如果你有更多关于以上方面的知识，欢迎评论交流。既然差不多讲完了 Maven 中的核心知识点，那么下一次我们就来看看怎么使用 Maven 来进行实战吧。
