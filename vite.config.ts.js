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
      name: "VueFileUploader",
      fileName: (format) => `vue-file-uploader.${format}.js`
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCB0eXBlc2NyaXB0MiBmcm9tICdyb2xsdXAtcGx1Z2luLXR5cGVzY3JpcHQyJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVDb25maWcoe1xuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShcIi9Vc2Vycy9kYW5pZWxjb2VsaG8vUHJvamVjdHMvb3RoZXIvdnVlLWZpbGUtdXBsb2FkZXJcIiwgJ3NyYy9tb2R1bGVzL1Z1ZUZpbGVVcGxvYWRlclBsdWdpbi50cycpLFxuICAgICAgbmFtZTogJ1Z1ZUZpbGVVcGxvYWRlcicsXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYHZ1ZS1maWxlLXVwbG9hZGVyLiR7Zm9ybWF0fS5qc2BcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbJ3Z1ZSddLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICB2dWU6ICdWdWUnXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICB0eXBlc2NyaXB0Mih7XG4gICAgICBjaGVjazogZmFsc2UsXG4gICAgICBpbmNsdWRlOiBbcGF0aC5yZXNvbHZlKFwiL1VzZXJzL2RhbmllbGNvZWxoby9Qcm9qZWN0cy9vdGhlci92dWUtZmlsZS11cGxvYWRlclwiLCAnc3JjL21vZHVsZXMvKiovKi52dWUnKV0sXG4gICAgICBleGNsdWRlOiBbcGF0aC5yZXNvbHZlKFwiL1VzZXJzL2RhbmllbGNvZWxoby9Qcm9qZWN0cy9vdGhlci92dWUtZmlsZS11cGxvYWRlclwiLCAndml0ZS5jb25maWcudHMnKV0sXG4gICAgICB0c2NvbmZpZ092ZXJyaWRlOiB7XG4gICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xuICAgICAgICAgIHNvdXJjZU1hcDogdHJ1ZSxcbiAgICAgICAgICBkZWNsYXJhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBkZWNsYXJhdGlvbk1hcDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQSxPQUFPLFVBQVUsYUFBYTtBQUFBLEVBQzVCLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sQUFBSyxRQUFRLHdEQUF3RDtBQUFBLE1BQzVFLE1BQU07QUFBQSxNQUNOLFVBQVUsQ0FBQyxXQUFXLHFCQUFxQjtBQUFBO0FBQUEsSUFFN0MsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDO0FBQUEsTUFDWCxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtiLFNBQVM7QUFBQSxJQUNQO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVixPQUFPO0FBQUEsTUFDUCxTQUFTLENBQUMsQUFBSyxRQUFRLHdEQUF3RDtBQUFBLE1BQy9FLFNBQVMsQ0FBQyxBQUFLLFFBQVEsd0RBQXdEO0FBQUEsTUFDL0Usa0JBQWtCO0FBQUEsUUFDaEIsaUJBQWlCO0FBQUEsVUFDZixXQUFXO0FBQUEsVUFDWCxhQUFhO0FBQUEsVUFDYixnQkFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
