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
                runtimeCaching: [
                    {
                        urlPattern: ({ url }) => url.origin === "https://spy-family.net",
                        handler: "StaleWhileRevalidate",
                        options: { cacheName: "external-spy-images" },
                    },
                ],
            },
        }),
    ],
});
