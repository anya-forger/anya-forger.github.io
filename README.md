# Anya Forger's Website

An Example Website made for Modern Web Development Guided Project, one of the courses in NTNU CSIE Camp 2022.

> DISCLAIMER
>
> All the images are from [SPY x FAMILY](https://spy-family.net/).
>
> We do not own the rights to the images and only use them for educational purposes.

## Setup

1. Install [Node.js 16+](https://nodejs.org/)
2. Install [PNPM](https://pnpm.io/) globally (optional)
   - `npm i -g pnpm`
3. Install the dependencies
   - `pnpm i` (if you installed PNPM globally)
   - or `npx pnpm i`
4. Run the development server
   - `pnpm dev` (if you installed PNPM globally)
   - or `npm run dev`

Now, you should be able to visit the website at `http://localhost:3000`.

## Build

- `pnpm build` (if you installed PNPM globally)
- or `npm run build`

The built website will be placed in `dist/`.

And you can use `pnpm preview` (`npm run preview`) to preview the built website in your browser.

## Tech Stack

- [![][icon-vue] Vue 3](https://vuejs.org/) (JS Framework)
- [![][icon-tailwind] TailwindCSS](https://tailwindcss.com/) (CSS Framework)
- Vue Router (SPA Router)
- [![][icon-vite] Vite](https://vitejs.dev/) (Dev Server, Bundler)

[icon-vue]: https://api.iconify.design/logos:vue.svg
[icon-tailwind]: https://api.iconify.design/logos:tailwindcss-icon.svg
[icon-vite]: https://api.iconify.design/logos:vitejs.svg
