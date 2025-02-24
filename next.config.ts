const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  assetPrefix: isProd ? "/MrThanakritt-Portfolio/" : "",
  images: {
    unoptimized: true,
  },
} satisfies import("next").NextConfig; // ใช้ satisfies ให้ TypeScript ตรวจสอบโครงสร้าง

export default nextConfig;
