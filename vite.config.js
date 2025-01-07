import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import styleImport from "vite-plugin-style-import";

// export default defineConfig({
//   plugins: [
//     react(),
//     styleImport({
//       libs: [
//         {
//           libraryName: "antd",
//           esModule: true,
//           resolveStyle: (name) => `antd/es/${name}/style`,
//         },
//       ],
//     }),
//   ],
// });
