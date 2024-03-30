This project was initially developed using Next.js 13 using chakraUI, Framermotion, and Frontmatter with SSG enabled by github workflows. After some experience at my company, I have made my mind to recompleting this project using Next.js 14, tailwindCSS, with main goals to optimize existing pattern and now using github-pages instead of using github workflows.
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Running Development Server

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Folder Structure

It is important to see the bird eyes view of the project structure here.

- ```/src/assets```, this folder store all of static assets from favicon to SVGs
- ```/src/components```, contains all React components
- ```/src/data```, this is the data source of the headless CMS will be used, includings:
    - ```/src/data/metadata.ts```, this hold some general information about the site like sitename, description, author picture, favicon path, etc
    - ```/src/data/blogs```, this directory was supposed to hold all writing/blogs in markdown format
    - ```/src/data/gallery```, this directory also store all of my art gallery in markdown format
    - ```/src/data/projects```, hold all my portfolio projects in markdown format
- ```/src/lib```, a custom made utility to be used across the app
- ```/src/pages```, file-based routing from Next.js
- ```/src/styles```, some css file configuration, most of the components will be build using tailwind classes though


## Deployment

To deploy the project run this command
```
npm run deploy
```
this command will generate static output of Next.js and made a new commit to gh-pages branch that will be used for github page publishing option