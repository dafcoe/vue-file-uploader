// vite.config.ts
import vue from "@vitejs/plugin-vue";
import typescript2 from "rollup-plugin-typescript2";
import {
  resolve
} from "path";
import { defineConfig } from "vite";
module.exports = defineConfig({
  build: {
    lib: {
      entry: resolve("/Users/danielcoelho/Projects/other/vue-file-uploader", "src/modules/VueFileUploaderPlugin.ts"),
      formats: ["es", "cjs"],
      name: "VueFileUploader",
      fileName: (format) => format === "es" ? "index.js" : "index.cjs"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  plugins: [
    vue(),
    typescript2({
      check: false,
      include: [resolve("/Users/danielcoelho/Projects/other/vue-file-uploader", "src/modules/**/*.vue")],
      exclude: [resolve("/Users/danielcoelho/Projects/other/vue-file-uploader", "vite.config.ts")],
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          declarationMap: true
        }
      }
    })
  ]
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCB0eXBlc2NyaXB0MiBmcm9tICdyb2xsdXAtcGx1Z2luLXR5cGVzY3JpcHQyJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVDb25maWcoe1xuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShcIi9Vc2Vycy9kYW5pZWxjb2VsaG8vUHJvamVjdHMvb3RoZXIvdnVlLWZpbGUtdXBsb2FkZXJcIiwgJ3NyYy9tb2R1bGVzL1Z1ZUZpbGVVcGxvYWRlclBsdWdpbi50cycpLFxuICAgICAgZm9ybWF0czogWydlcycsICdjanMnXSxcbiAgICAgIG5hbWU6ICdWdWVGaWxlVXBsb2FkZXInLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGZvcm1hdCA9PT0gJ2VzJyA/ICdpbmRleC5qcycgOiAnaW5kZXguY2pzJ1xuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsndnVlJ10sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHZ1ZTogJ1Z1ZSdcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIHR5cGVzY3JpcHQyKHtcbiAgICAgIGNoZWNrOiBmYWxzZSxcbiAgICAgIGluY2x1ZGU6IFtwYXRoLnJlc29sdmUoXCIvVXNlcnMvZGFuaWVsY29lbGhvL1Byb2plY3RzL290aGVyL3Z1ZS1maWxlLXVwbG9hZGVyXCIsICdzcmMvbW9kdWxlcy8qKi8qLnZ1ZScpXSxcbiAgICAgIGV4Y2x1ZGU6IFtwYXRoLnJlc29sdmUoXCIvVXNlcnMvZGFuaWVsY29lbGhvL1Byb2plY3RzL290aGVyL3Z1ZS1maWxlLXVwbG9hZGVyXCIsICd2aXRlLmNvbmZpZy50cycpXSxcbiAgICAgIHRzY29uZmlnT3ZlcnJpZGU6IHtcbiAgICAgICAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgICAgICAgc291cmNlTWFwOiB0cnVlLFxuICAgICAgICAgIGRlY2xhcmF0aW9uOiB0cnVlLFxuICAgICAgICAgIGRlY2xhcmF0aW9uTWFwOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE9BQU8sVUFBVSxhQUFhO0FBQUEsRUFDNUIsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxBQUFLLFFBQVEsd0RBQXdEO0FBQUEsTUFDNUUsU0FBUyxDQUFDLE1BQU07QUFBQSxNQUNoQixNQUFNO0FBQUEsTUFDTixVQUFVLENBQUMsV0FBVyxXQUFXLE9BQU8sYUFBYTtBQUFBO0FBQUEsSUFFdkQsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDO0FBQUEsTUFDWCxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtiLFNBQVM7QUFBQSxJQUNQO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVixPQUFPO0FBQUEsTUFDUCxTQUFTLENBQUMsQUFBSyxRQUFRLHdEQUF3RDtBQUFBLE1BQy9FLFNBQVMsQ0FBQyxBQUFLLFFBQVEsd0RBQXdEO0FBQUEsTUFDL0Usa0JBQWtCO0FBQUEsUUFDaEIsaUJBQWlCO0FBQUEsVUFDZixXQUFXO0FBQUEsVUFDWCxhQUFhO0FBQUEsVUFDYixnQkFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
