export interface IProcessEnv {
  REACT_APP_API: string
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends IProcessEnv {}
  }
}
