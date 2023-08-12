---
typora-root-url: ..\.vuepress\public\img
---

# 环境配置

### 框架版本

**基于Quarkus 3.2.final 版本开发**

**网站地址：https://cn.quarkus.io/**

**指南地址：https://cn.quarkus.io/guides/**

**官方示例地址：git@github.com:quarkusio/quarkus-quickstarts.git**

****

### 开发环境

| 软件       | 版本                   | 备注                                                         |
| ---------- | ---------------------- | ------------------------------------------------------------ |
| IDEA       | 2023.1.4               | 低版本不支持JDK20                                            |
| GraalVm    | graalvm-jdk-20.0.2+9.1 | graalvm 版本23.0.1 Quarkus 3.2.final 低于此版本无法编译镜像文件 |
| Maven      | 3.8.6                  |                                                              |
| MySQL      | 5.7                    |                                                              |
| Redis      | 5.0                    |                                                              |
| Docker版本 | 17+                    |                                                              |
| VsCode     | 2022+                  | 在 Windows 上，本机映像需要 Visual Studio 和 Microsoft Visual C++(MSVC)。您可以使用 Visual Studio 2022 版本 17.1.0 或更高版本。(linux和macos不需要) |

#### Graalvm 安装配置

windows x64下载地址：https://download.oracle.com/graalvm/20/latest/graalvm-jdk-20_windows-x64_bin.zip

windows打开环境变量设置

变量名： GRAALVM_HOME

变量值：D:\work\integratedENV\graalvm-jdk-20.0.2+9.1 （可自行配置）

添加到path变量中 %GRAALVM_HOME%\bin 

跟配置JDK的方法一致，不会的自行百度

打开CMD命令行 执行  `gu --version` 

```bash
C:\Users\mrwhite>gu --version
GraalVM Updater 23.0.1
C:\Users\mrwhite>
```

可以看到graalvm的版本信息

执行`native-image.cmd --version` 命令

```bash
C:\Users\mrwhite>native-image.cmd --version
native-image 20.0.2 2023-07-18
GraalVM Runtime Environment Oracle GraalVM 20.0.2+9.1 (build 20.0.2+9-jvmci-23.0-b14)
Substrate VM Oracle GraalVM 20.0.2+9.1 (build 20.0.2+9, serial gc, compressed references)

C:\Users\mrwhite>
```

native-image的命令也可以直接使用

IDEA配置JDK为graalvm

![](/idea-JDK-config.png)

在 Windows 上，本机映像需要 Visual Studio 和 Microsoft Visual C++(MSVC)。您可以使用 Visual Studio 2022 版本 17.1.0 或更高版本。

教程参考官网：https://www.graalvm.org/latest/docs/getting-started/windows/

Visual Studio 安装比较大,需要耐心等待

拉取代码：

Git地址：git@github.com:JavaGreenHands/fast-quarkus.git

导入到IDEA中

修改mysql 和redis的地址

idea选择 Maven Profile为 native 点击package打包 即可，

命令行操作为：

```bash
mvn  -DskipTests=true -Pnative clean package 
```



### 安装Visual Studio问题说明

编译本机可执行文件时出现

```
Error: Native-image building on Windows currently only supports target architecture: AMD64 (?? unsupported)
```

**需要找到Visual Studio installer 安装时找到语言包，设置为英文，取消中文勾选，否则无法编译本机可执行文件**

### 兼容性问题说明