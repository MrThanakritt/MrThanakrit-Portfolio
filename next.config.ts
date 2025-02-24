const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // บังคับให้ Next.js สร้าง Static HTML
  assetPrefix: isProd ? '/MrThanakritt-Portfolio/' : '', // กำหนด Path ให้ตรงกับ GitHub Pages
  images: {
    unoptimized: true, // ปิด Image Optimization (เพราะใช้ Static Export)
  },
};

export default nextConfig;
