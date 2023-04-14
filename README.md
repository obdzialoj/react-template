# React Starter Project Template

## Material UI
- Installed as UI framework by default, will have to be removed and replaced if another framework or custom solution is desired.
- Snackbar context/provider reliant on material ui snackbar component. This will also need to be replaced with a custom component if material UI is removed.

## useAuth
- Current logic in this hook is centered around Azure AD authentication process. Will need to be updated to accommodate other authentication solutions.
- Storing of token and user information should remain the same regardless of auth solution.

## Routing
- No routing added by default, will need to install router of choice.

## .env
- Will need to be added, and provide variables for api base url, along with azure ad credentials if that is what is being used with the project.