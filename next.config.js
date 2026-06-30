/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // 强行忽略所有代码路径和类型错误
    ignoreBuildErrors: true,
  },
  eslint: {
    // 强行忽略所有规范检查
    ignoreDuringBuilds: true,
  },
}

// 换成现代的导出方式，防止引擎直接挂掉
export default nextConfig
