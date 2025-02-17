---
title: 开发环境搭建及入门程序
isOriginal: true
category:
  - Java 菜鸟入门
date: 2022-07-02
order: 5
---

作者：村雨遥

博客：[JavaPark](https://cunyu1943.github.io/JavaPark)

原文：https://mp.weixin.qq.com/s/geOWlAwVMhtmmIMvFvjSpQ

>   吾生也有涯，而知也无涯。

## 前言

作为一个入门的学习者，要进行 Java 开发，那怎么能少得了 JDK 呢，本文就先来看看如何安装并配置 JDK，为后续的学习做好铺垫。

## 下载并安装 JDK

什么是 JDK 呢？JDK（Java Development Kit）即 Java 开发者工具包，使我们学习 Java 语言必须安装的一个工具。

这里主要以 Windows 和 macOS 系统中 JDK 的安装为例，一来因为考虑到大家用的最多的还是 Windows 和 macOS 系统，二来则是因为手边没有安装 Linux 图形化系统。如果恰好你使用的是 Linux 系统，那么推荐你参考一下其他的资料，同样你也可以参考我的另一篇文章：[手把手带你玩转 Ubuntu](https://cunyu1943.blog.csdn.net/article/details/105648148)。

### Windows

#### 安装

1.  首先进入  [Oracle 官网](https://www.oracle.com/java/technologies/javase-downloads.html)，然后找到自己想要的 JDK 版本，这边以 JDK 11 为例；

![](https://img-blog.csdnimg.cn/3d1ee5e736e347eb88df32f6e91bbc1a.png)



2.  点击 JDK Download 后，它会跳转到具体下载页面，然后根据自己的系统来进行选择，此处以 Windows 10 64 位为例；

![](https://img-blog.csdnimg.cn/img_convert/e036791a65ff46b10ee2861da99dbd70.png)

3.  点击最后的连接后，它会让你同意协议，勾选同意，然后登陆你的 Oracle 账户即可开始下载，若是没有 Oracle 账户，点击下面的创建一个即可；

![](https://img-blog.csdnimg.cn/450fa1d965ce4f6289f1bd897d450d10.png)

![](https://img-blog.csdnimg.cn/c324acd70fce400ba9cdd030fa07b86f.png)



4.  下载完成后，进行安装即可，安装流程和我们平常安装软件的一样，就再赘述，需要注意的是要记住如下的安装路径，因为一般我们都不会安装到默认路径，所以一定要记住你所安装到的路径，这关系到后续的配置步骤；

![](https://img-blog.csdnimg.cn/7587c87912424d3f96b96f12c38b4d28.png)


#### 配置 JDK

好了，经过上面的配置，我们的 JDK 就已经安装好了，但是这个使用你是用不了的，我们还需要进一步的配置；

打开系统属性来进行环境变量配置，打开系统属性并进行配置的方式如下：

1.  **Windows + R**  快捷键组合唤醒 Windows 运行窗口，然后输入 `sysdm.cpl`，紧接着回车即可，一般会打开如下界面，然后点击最上方的 **高级**；

![](https://img-blog.csdnimg.cn/img_convert/40a42f563c55c4315cb6bb86094d4476.png)

2.  点击高级后，就会打开如下界面，然后打开环境变量；

![](https://img-blog.csdnimg.cn/b5c786ea8b44443dac0f85d99773f837.png)


3.  新建环境变量 **JAVA_HOME**，然后变量值填入刚才安装 JDK 的路径（刚才提醒过要记住！）；

![](https://img-blog.csdnimg.cn/img_convert/71a56ef3c5629150523d35b837a7c3c2.png)

![](https://img-blog.csdnimg.cn/img_convert/f00558a5ceff488941dbec19b135a358.png)

4.  编辑 **Path** 环境变量，然后新建一个变量值，填入如下内容：`%JAVA_HOME%\bin`；

![](https://img-blog.csdnimg.cn/img_convert/06fed4c57bafad7f9832bf6f593f274a.png)

5.  各种确定，然后突出系统属性即可，到这一步，理论上我们的 JDK 就安装并配置成功了，接下来我们就去确认一下到底安装好了没；

#### 验证 JDK

按照上述步骤操作完成之后，接下来就是验证了，一般我们可以通过如下三个命令来进行验证；

```bash
# 查看 JDK 版本
java -version

# 编译命令
javac

# 运行命令
java
```

打开命令控制台（**Windows + R，然后输入 cmd 回车**），然后输入如上三个命令，如果安装成功，一般是会出现如下内容的；

![](https://img-blog.csdnimg.cn/f6b636401f2341348edc7b3cc5cbea2a.png)


![](https://img-blog.csdnimg.cn/ed048dc3d4bb46099ad293273fef8b0c.png)


![](https://img-blog.csdnimg.cn/img_convert/c76c7492f43aa449fde99acccce15966.png)



### macOS

#### 安装

1.  首先去 [官网下载](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) 对应安装包；

![](https://img-blog.csdnimg.cn/811aebcf07354de6a74600ab403cd84f.png)


2.  接受相关协议并登录下载；



3.  双击下载好的 `.dmg` 安装包，然后开始安装；

![](https://img-blog.csdnimg.cn/img_convert/46caccfb6cde9f27ee97937136962a5f.png)

4.  安装过程中会让你输入密码，也就是你本机的秘密；

![](https://img-blog.csdnimg.cn/5d403a0376b54a4fb1dc205e86b8f9dd.png)


5.  安装成功；

![](https://img-blog.csdnimg.cn/f2f27facd17e421ba04e0cc656539588.png)


####  验证

不同于 Windows，macOS 下不用再去配置了，它会给你自动配置好，我们只需要去验证即可；

1.  查看 JDK 版本；

```bash
java -version
```

![](https://img-blog.csdnimg.cn/977d60b8c00e4e2cb9b129f9e66403a6.png)


2.  编译命令；

![](https://img-blog.csdnimg.cn/64c7df8c0fb94f259b36c593591effd4.png)


3.  运行命令；

![](https://img-blog.csdnimg.cn/c0e1c556fa1744de879636fa874dbc56.png)

### 安装目录详解

安装好 `JDK` 之后，打开安装路径，通常情况下会有如下的目录结构：

| 目录      |                                                              |
| --------- | ------------------------------------------------------------ |
| `bin`     | 用于存放各种工具命令，比如我们最常用额 `javac`、`java` 等    |
| `lib`     | 存放工具的一些补充 `jar` 包                                  |
| `conf`    | 存放相关配置文件                                             |
| `include` | 存放一些平台特定的头文件，比如 `Windows`、`macOS`、`Linux` 平台下这里的头文件是有所不同的 |
| `legal`   | 存放各模块的授权文件                                         |
| `jmods`   | 存放各种模块                                                 |

## 你的第一个 Java程序：HelloWorld

好了，经过上面的安装配置，我们就可以开始我们的第一个 Java 程序编写了。

要开发一个 Java 程序，主要分成 3 个步骤：

1.   **编写代码**
2.   **编译代码**
3.   **运行代码**

![](https://img-blog.csdnimg.cn/7e3b65d9d9094c448acd2fe53477c8db.png)

我们不需要任何的基础，只需要按照上面的步骤配置好 JDK 之后，然后以上三个步骤逐一来进行就可以了。下面就来进行具体实践：

1.  打开编辑器（推荐 `VS Code`），如果没有，记事本也成，然后写入如下内容，然后保存为 `Main.java`，这里文件名一定要是 `Main`，文件后缀名为 `.java`。

```java
public class Main{
    public static void main(String[] args){
        System.out.println("Hello World!");
    }
}
```

2.  打开控制命令台，然后进入上述文件存放的路径，使用如下命令进行编译，然后会生成一个 `Main.class` 文件；

```bash
javac Main.java
```

![](https://img-blog.csdnimg.cn/101ac72490ba4f1a8ad1181421beb359.png)


![](https://img-blog.csdnimg.cn/febb5603d10f40f2a16f754faafe1029.png)


3.  运行，使用如下命令进行运行，然后就可以看到打印出的最终结果了！

```bash
java Main
```

![](https://img-blog.csdnimg.cn/90cd895fc24d4e38931d6ca811f1c429.png)


## 知识点说明

我们的 Hello World 是打印出来了，但是你肯定对里边的代码很感兴趣，这一节就主要针对我们的 Hello World 程序进行说明；

```java
public class Main{
    public static void main(String[] args){
        System.out.println("Hello World!");
    }
}
```

完整的程序代码如上：

-   `public`：权限修饰符，表示这一个可以公开访问的类，类似的还有 `protected、default、private`，后续学习过程中再一一介绍；
-   `class`：Java 关键字，表示这是一个类；
-   `Main`： 表示我们的类名，在保存时文件一定要和它同名，否则你的程序是编译不了的。你可以试试，如果把我们上面的 `Main.java` 改成其他名字，你看看是不是还能编译成功呢？
-   `public static void main(String[] args){}`：主方法，这是我们以后最常接触到的一个方法，每个主类当中都必须有一个 `main` 方法；
-   `System.out.println("Hello World!")`：控制台输出语句，执行该语句会在控制台中输出字符串，字符串要用双引号 `""` 括起来，你可以把其中的 `Hello Wolrd!` 换成你想要打印的内容试试看；

## 总结

好了，今天的内容到此就结束了，主要介绍了如何在 Windows 和 macOS 中安装 JDK，具体过程可以总结如下：

-   安装
-   配置
-   验证

然后编写了我们的第一个 `Hello World` 程序，并利用安装好的的 JDK 对其进行编译和运行。最后，则是对我们的 `Hello World` 程序中的相关知识进行了介绍。
