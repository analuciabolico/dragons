export const WEB_APP = {
  NAME: process.env.REACT_APP_NAME,
  ENVIRONMENT: process.env.REACT_APP_ENV,
  BASE_URL: process.env.REACT_APP_BASE_URL,
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
};

export const ROUTES = {
  HOME: () => "/",
  DRAGONS: () => "/dragons",
  DRAGONS_NEW: () => "/dragons/new",
  DETAILS_DRAGON: (id: string) => `/dragons/${id}/details`,
  EDIT_DRAGON: (id: string) => `/dragons/${id}/edit`,
  SIGN_IN: () => "/sign-in",
  NOT_FOUND: () => "/not-found",
  ERROR: () => "/error",
  ALL: () => "*",
};
