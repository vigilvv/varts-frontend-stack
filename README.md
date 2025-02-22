# VARTS frontend stack template

This is a starter template to build fontend projects with React and Typescript. This is highly opinionated and is what works for me from years of experience. The main libraries and tooling used are:

- Vite
- Axios (well, it had to be second to make the acronym catchy :) )
- React
- Typescript
- Styled components

Other libraries:

- React Query
- React Router
- Zustand
- React Hook Form (optional)
- Zod

#### Netlify SPA support

Added _redirects to public folder.



#### Data Store

`src/store` is the data store. The `local` folder in it can be used for files that interact with localStorage. The `global` folder can be used for files that handle global state (Zustand, Redux).
