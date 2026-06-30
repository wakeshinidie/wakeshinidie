// 这是一个万能防崩溃桩文件，用来向 Webpack 放行
const dummyAsync = async () => [];

// 预导出可能被页面用到的常见命名函数，防止打包时报命名缺失错误
export const getAnalysis = dummyAsync;
export const dbAnalysis = {};

const defaultExport = {
  getAnalysis,
  dbAnalysis,
};

export default defaultExport;
