# Monorepo with component library and nextjs

This is a demo with a custom component library build on top of another component library (radixui primitives as an example).
The components and functions of this custom component library is then used inside a nextjs project.

Follow the following steps to setup these projects.

When starting the nextjs app you will find out that it is not working inside a server component/page.

## Component Library

1. run `npm install`
2. run `npm run build` to build the library into a `dist` folder

## Nextjs

1. run `npm install`
2. run `npm run dev` to start demo app
