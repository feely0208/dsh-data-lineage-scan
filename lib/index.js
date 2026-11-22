import { createPlugin, pkgRootFrom } from '@deepwhale-cn/dsh-guard-core/plugin';

export const { name, inject, apply } = createPlugin({
  name: 'data-lineage-scan',
  pkgRoot: pkgRootFrom(import.meta.url),
  skillFile: 'skill/data-lineage-scan.md',
  binFile: 'bin/cli.mjs',
  description: '数据管道/ETL 项目的血缘文档、敏感字段分级、保留期限、导出管控缺口扫描',
  whenToUse: '需要对「数据血缘与数据流转合规」相关项目做自查时使用。',
});
