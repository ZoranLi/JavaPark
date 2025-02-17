---
title: 多表查询
isOriginal: true
order: 25
category:
  - MySQL 教程
date: 2022-03-06
---
作者：村雨遥

博客：[JavaPark](https://cunyu1943.github.io/JavaPark)

>   吾生也有涯，而知也无涯。

## 多表关系

项目开发进行数据库表结构设计时，需要根据业务需求和业务模块之间的关系，分析并设计表结构。但由于不同业务之间存在着的关联关系，因此各个表结构之间也存在着各种关系，常见的表结构之间的关系可以分为以下三种：

1.   一对多（多对一）
2.   多对多
3.   一对一

### 一对多（多对一）

 常见的就是部门和员工之间的关系，一个部门下边有多个员工，但是每个员工只能有一个部门。为了在数据库中实现这一关系，可以**在多的一方建立外键，然后指向一的一方的主键。**

### 多对多

最常见的有学生和课程之间的关系，每个学生可以选修多门课程，而一门课程也可以供多个学生选择。为了在数据库中实现这一关系，通常**需要建立一个第三方的中间表，而且这个中间表应该至少包含两个外键，用于关联两方的主键。**

### 一对一

最常见的是用户与用户详情之间的关系，多用于**单表拆分**，将一张表的基础字段放在一张表中，其他详情字段则放在另一张表中，从而提升操作效率。为了在数据库中实现这一关系，可以**在任意一张表中加入外键，用来关联另一张表的主键，并且设置该外键唯一（`UNIQUE`）**。

## 多表查询

所谓多表查询，指的是从多张表中查询数据。

笛卡尔积：笛卡尔乘积指在数学中，两个集合 A 集合和 B 集合中的所有组合情况，在进行多表查询时，要注意消除掉无效的笛卡尔积。

多表查询可以分为**子查询**和连接查询，其中，连接查询又可以分为：**内连接、外连接、自连接**。

对于内连接，相当于查询两个表 A、B 之间的交集数据，即既存在表 A 中，也存在表 B 中的数据。

自连接表示当前表和它自身的连接查询，需要注意的是自连接查询时必须使用表别名。

最后是外连接，外连接可以分为**左外连接和右外连接**。其中，左外连接表示查询**左表**中的所有数据，以及左右两张表中的交集部分数据。

右外连接表示查询**右表**中的所有数据，以及左右两张表中的交集部分数据。

## 内连接

内连接表示的是查询两张表的交集部分，其查询语法可以分为**隐式内连接**和**显式内连接**。

1.   **隐式内连接**

```sql
SELECT 字段列表 FROM 表1, 表2 WHERE 条件 …;
```

2.   **显式内连接**

```sql
SELECT 字段列表 FROM 表1 [INNER] JOIN 表2 ON 连接条件 …;
```

## 外连接

外连接可以分为左外连接和右外连接，其查询语法如下。

1.   **左外连接**

```sql
SELECT 字段列表 FROM 表1 LEFT [OUTER] JOIN 表2 ON 条件 …;
```

2.   **右外连接**

```sql
SELECT 字段列表 FROM 表1 RIGHT [OUTER] JOIN 表2 ON 条件 …;
```

## 自连接

自查询查询语法如下，自连接查询既可以是内连接查询，也可以是外连接查询。

```sql
SELECT 字段列表 FROM 表A 别名A JOIN 表A 别名B ON 条件 …;
```

## 联合查询

联合查询，顾名思义，就是把多次查询的结果合并，从而形成一个新的查询结果集的查询。

```sql
SELECT 字段列表 FROM 表A ……
UNION [ALL]
SELECT 字段列表 FROM 表B ……
```

## 子查询

子查询指 SQL 语句中嵌套 `SELECT` 语句，所有又叫做**嵌套查询**。

```sql
SELECT * FROM 表1 WHERE 字段名 = (SELECT 字段名 FROM 表2);
```

子查询返回的结果是一列（也可以是多列），这种子查询叫做**列子查询**。

常用的操作符有：`IN`、`NOT IN`、`ANY`、`SOME`、`ALL`

| 操作符   | 说明                             |
| -------- | -------------------------------- |
| `IN`     | 在指定集合范围内，多选一         |
| `NOT IN` | 不在指定集合范围内               |
| `ANY`    | 子查询返回列表中，有任一满足即可 |
| `SOME`   | 等同于 `ANY`，可以用 `ANY` 代替  |
| `ALL`    | 子查询返回列表的所有值都必须满足 |

子查询返回的结果是一行（可以是多列），这种子查询叫做**行子查询**。

常用的操作符有：`=`、`<>`、`IN`、`NOT IN`

若子查询返回的结果是多行多列，那么这种子查询叫做**表子查询**，常用操作符为：`IN`。  
