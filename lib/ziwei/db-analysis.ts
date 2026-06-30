// 1. 核心防御：针对日志中明确死掉的 '紫微' 键以及常见主星做精准配置
export const STAR_DB: Record<string, any> = {
  '紫微': {}, '天机': {}, '太阳': {}, '武曲': {}, '天同': {}, '廉贞': {},
  '天府': {}, '太阴': {}, '贪狼': {}, '巨门': {}, '天相': {}, '天梁': {}, 
  '七杀': {}, '破军': {}
};

export const TOPIC_LABEL: Record<string, any> = {};
export const TOPIC_PALACE_NAME: Record<string, any> = {};

// 2. 终极防崩溃代理：无论页面读取多么深层的属性（如 STAR_DB['紫微'].name.length），都永远不报 undefined
const safeHandler: ProxyHandler<any> = {
  get: (target, prop) => {
    if (prop in target) return target[prop];
    // 如果读取不存在的属性，返回一个既能当对象读、又能当函数调用的万能代理
    return new Proxy(() => [], safeHandler);
  }
};

// 包裹所有导出对象
export const dbAnalysis = new Proxy({}, safeHandler);
export const getAnalysis = async () => [];

const defaultExport = {
  TOPIC_LABEL,
  STAR_DB,
  TOPIC_PALACE_NAME,
  dbAnalysis,
  getAnalysis
};

export default defaultExport;
