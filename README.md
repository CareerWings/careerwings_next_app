This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started
1. Install Packages
```bash
npm install
```
2. Now run the development server:
```bash
npm run dev
```
>Inside `package.json` file all application properties are listed.

### Folder Structure
```bash
├── node_modules (Visible only after installing packages, i.e. running `npm i`)
├── public
├── src
│   ├── components        [Contains all the React components]
│   ├── errors            [Error Classes to throw custom errors(optional)]
│   ├── hooks             [Custom hooks]
│   ├── pages             [Contains all frontend pages, mapped to filenames]
│   │   ├── api           [Contains all API routes, mapped to filenames]
│   │   ├── _app.js
│   │   ├── _document.js
│   │   ├── index.js
│   ├── styles            [Contains all stylesheets]

```
>NOTE: Check [Next.js](https://nextjs.org/docs) documentation to see how pages/filename.js are mapped to frontend pages ([Dynamic Routing](https://nextjs.org/docs/basic-features/pages)), and api routes mapping to filenames inside ./src/pages/api folder

<details open>
<summary>Next Documentation </summary>
<br>
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
</details>
