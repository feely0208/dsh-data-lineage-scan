# 数据同步平台 · 用户数据管道说明

## 调度任务

每天 02:00 由 Airflow 调度执行 user_sync DAG，从主库批量抽取数据，写入分析数仓。
同步失败自动重试 3 次，告警发到值班群。

## 建表

```sql
CREATE TABLE user_profile (
  id BIGINT PRIMARY KEY,
  id_card VARCHAR(18) NOT NULL,
  bank_card VARCHAR(32),
  mobile_phone VARCHAR(16),
  created_at DATETIME
);
```

## 导出与同步

运营后台支持全量导出用户数据为 Excel。
每月向境外节点同步分析结果，replica 到 overseas 集群。

## 备份

主库每日全量备份到 OSS bucket，数仓每周归档一次。
