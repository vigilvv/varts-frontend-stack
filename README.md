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

#### Local Storage hook

`src/hooks` constains a file called `useLocalStorage.ts`. This can be used as a template to interact with local storage objects based on a predefined key. The specific key based local storage files can be stored in `src/store/local`.

#### Global Text component

Use this component to create text throughout the app. It sets common styles and font family in a consisten way. The file is `ui/common/Text.tsx`.
