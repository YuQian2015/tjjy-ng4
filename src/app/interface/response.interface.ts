export interface ResponseInterface {
  error: boolean,
  errorCode: string,
  message: string,
  data: {
    result: object,
    token?: string,
    page?: number,
    pageSize?: number,
    count?: number,
    totalPage?: number,
    previous?: boolean,
    next?: boolean,
  }
}
