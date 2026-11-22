# 数据血缘扫描（dsh-data-lineage-scan）

**什么时候用**：数据工程/ETL/数仓项目要自查数据流转合规缺口时。用户会说「扫一下这个数仓项目」「数据血缘齐不齐」「要过数据安全检查了，帮我看看缺口」「出境同步有没有合规依据」。

## 怎么用

```bash
dsh-data-lineage-scan --root <项目目录>       # 扫描项目
dsh-data-lineage-scan --demo                  # 内置样本演示
dsh-data-lineage-scan --list-rules            # 列出判据与出处
dsh-data-lineage-scan --html report.html      # HTML 报告（留档）
```

## 它查什么（6 条规则）

| 规则 | 查什么 |
|---|---|
| DL-LINEAGE-DOC-MISSING | 有 ETL/管道特征但无血缘说明（files-lack） |
| DL-DICT-CLASSIFY-MISSING | 出现敏感字段特征但无数据字典/分级说明 |
| DL-PII-RAW-SCHEMA | 建表/接口 schema 明文出现身份证/银行卡/手机号字段 |
| DL-RETENTION-UNSTATED | 有存储/备份特征但无保留期限说明 |
| DL-EXPORT-UNCONTROLLED | 全量/批量导出动作无审批留痕说明 |
| DL-CROSSBORDER-REVIEW | 境外传输特征但未提安全评估/标准合同 |

依据：《数据安全法》27/29/30 条、《个人信息保护法》19/38/51/55 条、GB/T 36073（DCMM）、GB/T 37988。

**所有规则都带 `when`**：项目没有对应特征时进「不适用」，不会硬报。
0 命中 ≠ 没问题，先看「检查规则 N/6 条」。

## 已知边界

静态文本扫描，只看文档/脚本/schema 字面。血缘图谱是否真实、脱敏是否真正落地、跨境是否真有备案，都要人工或运行时验证。
