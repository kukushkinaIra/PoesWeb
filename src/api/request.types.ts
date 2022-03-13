export interface IRequest {
  url: string
  method: 'POST' | 'GET'
  body?: {
    [key: string]: any
  }
}
