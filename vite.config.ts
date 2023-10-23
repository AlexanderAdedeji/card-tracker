import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { imagetools } from 'vite-imagetools';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const mainConfig = {
    plugins: [react(), tsconfigPaths({ loose: true }), svgr(), imagetools()],
    define: {
      'process.env': process.env,
    },
  };
  return env.VITE_USE_PROXY === 'true'
    ? {
        ...mainConfig,
        server: {
          proxy: {
            '/api': {
              target: env.VITE_API_URL,
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/, ''),
            },
          },
        },
      }
    : mainConfig;
});

// export default defineConfig({

//   server: {
//     proxy: {
//       '/api': {
//         target: "https://card-tracker-tsfs.onrender.com",
//         // changeOrigin: true,
//         // rewrite: (path) => path.replace(/^\/api/, ''),
//       },
//     },
//   },
//   plugins: [react()]

// })
