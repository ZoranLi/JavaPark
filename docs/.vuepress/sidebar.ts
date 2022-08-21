import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/",
  // "/home",

  // Java
  {
    text: "Java",
    icon: "java",
    prefix: "java/",
    collapsable: true,
    children: [
      {
        text: "Java SE",
        prefix: "java-se/",
        icon: "java",
        collapsable: true,
        children: [
          "intro-to-java",
          "jdk-install-and-hello-world",
          "learn-java-with-idea",
          "variable-and-datatype",
          "binary-convert",
          "operator",
          "control-process",
          "how-to-operate-array",
          "oop-1",
          "oop-2",
          "oop-3",
          "all-kinds-of-variable",
          "in-out-stream",
          "reflection",
          "annotations",
          "jdbc-introduction",
          "test-with-junit",
          "lombok-install-and-usage",
          "fastjson2-quickstart",
        ],
      },
      {
        text: "Java Web",
        prefix: "java-web/",
        icon: "java",
        collapsable: true,
        children: [
          {
            text: "HTML 教程",
            prefix: "html/",
            icon: "html",
            collapsable: true,
            children: [
              "basic-lable",
            ]
          },
          {
            text: "JavaScript 教程",
            prefix: "js/",
            icon: "javascript",
            collapsable: true,
            children: [
              "introduction",
              "annotation-inout-variable",
              "datatype",
              "operator",
              "process-control",
              "array",
              "function",
              "oop",
              "dom-get-attribute",
              "dom-event",
            ]
          },
          {
            text: "Vue3 笔记",
            prefix: "vue3/",
            icon: "Vue",
            collapsable: true,
            children: [
              "introduction",
              "vite-quickstart",
              "axios-quickstart",
              "common-commands"
            ]
          },
          "create-deploy-javaweb-with-idea",
          "mockito-junit5",
        ],
      },
      {
        text: "Maven",
        prefix: "maven/",
        icon: "apache",
        collapsable: true,
        children: [
          "maven-intro-install",
          "maven-command-skeleton",
          "maven-warehouse-dependency",
          "maven-project-with-idea",
        ],
      },
      {
        text: "Spring",
        prefix: "spring/",
        icon: "leaf",
        collapsable: true,
        children: [
          "spring-intro",
          "the-methods-to-create-spring-project",
          "ioc",
          "bean",
        ],
      },
      {
        text: "Spring MVC",
        prefix: "spring-mvc/",
        icon: "leaf",
        collapsable: true,
        children: [
          "intro-and-quick-start",
        ],
      },
      {
        text: "MyBatis",
        prefix: "mybatis/",
        icon: "earlybirds",
        collapsable: true,
        children: [
          "introduction",
          "quick-start",
          "mybatis-generator",
        ],
      },
      {
        text: "MyBatis Plus",
        prefix: "mybatis-plus/",
        icon: "earlybirds",
        collapsable: true,
        children: [
          "intro-and-quick-start",
          "log-and-common-crud",
        ],
      },
      {
        text: "Spring Boot",
        prefix: "spring-boot/",
        icon: "spring-boot",
        collapsable: true,
        children: [
          "introduction",
          "the-methods-to-create-springboot-project",
          "configuration",
          "integrated-swagger2",
          "integrated-swagger3",
          "integrated-knife4j",
          "integrated-freemarker",
          "integrated-thymeleaf",
          "integrated-security",
        ],
      },
    ],
  },
  // 数据库
  {
    text: "数据库",
    icon: "storage",
    prefix: "database/",
    collapsable: true,
    children: [
      // MySQL
      {
        text: "MySQL 教程",
        prefix: "mysql/",
        icon: "mysql",
        collapsable: true,
        children: [
          "overview",
          "install",
          "grammar",
          "function",
          "constraint",
          "muti-table-query",
          "transaction",
        ],
      },
      //  PG
      {
        text: "PostgreSQL 教程",
        prefix: "postgresql/",
        icon: "postgresql",
        collapsable: true,
        children: [
          "pg-install-on-windows",
        ],
      },
      {
        text: "SQL 必知必会 50 题",
        prefix: "sql-in-10min/",
        icon: "mysql",
        collapsable: true,
        children: [
          "1-5",
          "6-10",
          "11-15",
          "16-20",
          "21-25",
          "26-30",
          "31-35",
          "36-40",
          "41-45",
          "46-50",
        ],
      },
      {
        text: "SQL 进阶挑战",
        prefix: "sql-advanced/",
        icon: "mysql",
        collapsable: true,
        children: [
          "1-5",
          "6-10",
          "11-15",
          "16-20",
          "21-25",
          "26-30",
          "31-35",
          "36-40",
          "41-46",
        ],
      },
    ],
  },
  // 实战训练
  {
    text: "实战训练",
    icon: "app",
    prefix: "practical-training-camp/",
    collapsable: true,
    children: [
      {
        text: "Java 入门练习 ",
        prefix: "intro-to-java/",
        icon: "java",
        collapsable: true,
        children: [
          "1-5",
          "6-10",
          "11-15",
          "16-20",
          "21-25",
          "26-30",
          "31-35",
          "36-40",
        ],
      },
      {
        text: "SE 实训营",
        prefix: "java-se-in-action/",
        collapsable: true,
        icon: "ruanjian",
        children: [
          "score-management",
          "order-system",
          "tally-book",
          "mysql-mybatis-score-management",
        ]
      },
      {
        text: "Java 编程实例",
        prefix: "java-instance/",
        icon: "java",
        collapsable: true,
        children: [
          "1-5",
          "6-10",
          "11-15",
          "16-20",
          "21-25",
          "26-30",
          "31-35",
          "36-40",
          "41-45",
          "46-50",
          "51-55",
          "56-60",
          "61-65",
          "66-70",
          "71-75",
        ],
      },
    ],
  },
  // 计算机基础
  {
    text: "计算机基础",
    icon: "computer",
    prefix: "cs-basics/",
    collapsable: true,
    children: [
      {
        text: "数据结构与算法",
        prefix: "algorithm/",
        icon: "suanfa",
        collapsable: true,
        children: [
          "datastructure",
          "algorithm",
        ],
      },
    ],
  },
  // 开发工具
  {
    text: "开发工具",
    icon: "code",
    prefix: "dev-tools/",
    collapsable: true,
    children: [
      {
        text: "IntelliJ IDEA",
        prefix: "idea/",
        icon: "intellijidea",
        collapsable: true,
        children: [
          "idea-pro-with-student-email",
          "idea-guide",
          "idea-with-github",
          "idea-integrate-with-git",
          "idea-tips",
          "java-quick-start-with-idea",
          "connect-mysql-fail",
          "tomcat-console-error-code",
        ],
      },
    ],
  },
  // 效率工具
  {
    text: "效率工具",
    icon: "tool",
    prefix: "efficiency/",
    collapsable: true,
    children: [
      "e-signature",
      "gitee-typora",
      "github-img-bed",
      "markdown-in-10min",
      "paint-with-markdown",
      "write-tools",
      "emoji",
      "useful-website",
      "cdn-resource",
      "interview-website",
      "website/ppt-template",
      {
        text: "博客搭建",
        prefix: "blog/",
        icon: "blog",
        collapsable: true,
        children: [
          "hexo",
          "halo",
          "vuepress-github-action",
          "docsify",
          "dumi",
          "hugo",
        ],
      },
      {
        text: "Windows",
        prefix: "windows",
        icon: "windows",
        collapsable: true,
        children: [
          "how-to-make-usb-boot-drive",
          "windows-install",
          "how-to-use-windows10",
          "nodejs-install",
          "postgresql-install-on-windows",
        ],
      },
      {
        text: "macOS",
        prefix: "macos",
        icon: "macos",
        collapsable: true,
        children: [
          "item-oh-my-zsh",
          "fish-shell",
        ],
      },
      {
        text: "Linux",
        prefix: "linux",
        icon: "linux",
        collapsable: true,
        children: [
          "ubuntu-install-with-vmware",
          "ubuntu-guide",
          "manjora-guide",
        ],
      },
    ],
  },
  // 福利专区
  {
    text: "福利专区",
    prefix: "welfare",
    icon: "fuli",
    collapsable: true,
    children: [
      "save-money-tips",
    ],
  },
  {
    text: "面试宝典",
    prefix: "interview",
    icon: "book",
    collapsable: true,
    children: [
      "mysql",
      "java-basic",
      // "java-advance",
      "collection",
      "hashmap",
      "exception",
      "concurrence",
      "jvm",
      "spring",
    ],
  },
]);
