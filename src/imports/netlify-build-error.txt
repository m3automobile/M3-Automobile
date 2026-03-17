11:01:17 PM: Netlify Build                                                 
11:01:17 PM: ────────────────────────────────────────────────────────────────
11:01:17 PM: ​
11:01:17 PM: ❯ Version
11:01:17 PM:   @netlify/build 35.8.4
11:01:17 PM: ​
11:01:17 PM: ❯ Flags
11:01:17 PM:   accountId: 69a751a001ac67f67d853288
11:01:17 PM:   baseRelDir: true
11:01:17 PM:   buildId: 69a75a03956b21554e5f65e8
11:01:17 PM:   deployId: 69a75a03956b21554e5f65ea
11:01:18 PM: ​
11:01:18 PM: ❯ Current directory
11:01:18 PM:   /opt/build/repo
11:01:18 PM: ​
11:01:18 PM: ❯ Config file
11:01:18 PM:   No config file was defined: using default values.
11:01:18 PM: ​
11:01:18 PM: ❯ Context
11:01:18 PM:   production
11:01:18 PM: ​
11:01:18 PM: Build command from Netlify app                                
11:01:18 PM: ────────────────────────────────────────────────────────────────
11:01:18 PM: ​
11:01:18 PM: $ npm run build
11:01:18 PM: > @figma/my-make-file@0.0.1 build
11:01:18 PM: > vite build
11:01:18 PM: vite v6.3.5 building for production...
11:01:18 PM: transforming...
11:01:18 PM: ✓ 23 modules transformed.
11:01:18 PM: ✗ Build failed in 359ms
11:01:18 PM: error during build:
11:01:18 PM: [vite]: Rollup failed to resolve import "figma:asset/f0629100f8c13d63e9fe8a841630d78d4fa3452e.png" from "/opt/build/repo/src/app/components/Layout.tsx".
11:01:18 PM: This is most likely unintended because it can break your application at runtime.
11:01:18 PM: If you do want to externalize this module explicitly add it to
11:01:18 PM: `build.rollupOptions.external`
11:01:18 PM:     at viteLog (file:///opt/build/repo/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:46345:15)
11:01:18 PM:     at file:///opt/build/repo/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:46403:18
11:01:18 PM:     at onwarn (file:///opt/build/repo/node_modules/@vitejs/plugin-react/dist/index.js:90:7)
11:01:18 PM:     at file:///opt/build/repo/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:46401:7
11:01:18 PM:     at onRollupLog (file:///opt/build/repo/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:46393:5)
11:01:18 PM:     at onLog (file:///opt/build/repo/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:46043:7)
11:01:18 PM:     at file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:20981:32
11:01:18 PM:     at Object.logger [as onLog] (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:22968:9)
11:01:18 PM:     at ModuleLoader.handleInvalidResolvedId (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:21712:26)
11:01:18 PM:     at file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:21670:26
11:01:18 PM: ​
11:01:18 PM: "build.command" failed                                        
11:01:18 PM: ────────────────────────────────────────────────────────────────
11:01:18 PM: ​
11:01:18 PM:   Error message
11:01:18 PM:   Command failed with exit code 1: npm run build (https://ntl.fyi/exit-code-1)
11:01:18 PM: ​
11:01:18 PM:   Error location
11:01:18 PM:   In Build command from Netlify app:
11:01:18 PM:   npm run build
11:01:18 PM: ​
11:01:18 PM:   Resolved config
11:01:18 PM:   build:
11:01:18 PM:     command: npm run build
11:01:18 PM:     commandOrigin: ui
11:01:18 PM:     publish: /opt/build/repo/dist
11:01:18 PM:     publishOrigin: ui
11:01:19 PM: Build failed due to a user error: Build script returned non-zero exit code: 2
11:01:19 PM: Failing build: Failed to build site
11:01:19 PM: Finished processing build request in 27.745s
11:01:19 PM: Failed during stage 'building site': Build script returned non-zero exit code: 2 (https://ntl.fyi/exit-code-2)