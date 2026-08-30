import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio', // nome do repositório no GitHub
  assetPrefix: '/portfolio/',
  images: {
    unoptimized: true, // Necessário pois o componente de imagem otimizada do Next.js precisa de servidor
  }
};

export default nextConfig;
