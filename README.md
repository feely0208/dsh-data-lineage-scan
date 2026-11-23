# @deepwhale-cn/dsh-data-lineage-scan

数据血缘与数据流转合规缺口扫描 —— 静态文本规则引擎（深鲸 DSH 插件系列，基于 dsh-guard-core）

## 用法

```bash
npx @deepwhale-cn/dsh-data-lineage-scan --root <项目目录>
npx @deepwhale-cn/dsh-data-lineage-scan --demo        # 内置样本演示
npx @deepwhale-cn/dsh-data-lineage-scan --list-rules  # 判据与法规出处
npx @deepwhale-cn/dsh-data-lineage-scan --html r.html # HTML 报告
```

## 规则（6 条，全部带出处与 `when` 不适用机制）

DL-LINEAGE-DOC-MISSING / DL-DICT-CLASSIFY-MISSING / DL-PII-RAW-SCHEMA / DL-RETENTION-UNSTATED / DL-EXPORT-UNCONTROLLED / DL-CROSSBORDER-REVIEW

依据：《数据安全法》27/29/30 条、《个人信息保护法》19/38/51/55 条、GB/T 36073-2018（DCMM）。命中 ≠ 违规；每条带 文件:行 与出处。

## 已知边界

静态检查只看文档/脚本字面；血缘真实性、脱敏落地、出境备案有效性需人工核验。

## License

MIT © 温州深鲸智能科技有限公司

## 安装（DSH）

```bash
dsh plugin --profile web add @deepwhale-cn/dsh-data-lineage-scan
```

也可以 `npm i @deepwhale-cn/dsh-data-lineage-scan`，或从本仓库直接 `dsh plugin install ./`。
