import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import Icons from "unplugin-icons/vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Icons({ autoInstall: true, compiler: "vue3" }),
        VitePWA({
            workbox: {
                cleanupOutdatedCaches: true,
                runtimeCaching: [
                    {
                        urlPattern: ({ url }) =>
                            ["https://spy-family.net", "https://cdn.jsdelivr.net"].includes(
                                url.origin,
                            ),
                        handler: "StaleWhileRevalidate",
                        options: {
                            cacheName: "external-sources",
                            expiration: { maxAgeSeconds: 7 * 24 * 60 * 60 },
                        },
                    },
                ],
                skipWaiting: true,
            },
        }),
    ],
});
