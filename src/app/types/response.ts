export enum ResponseStatus {
  SUCCESS = 'success',
  FAILURE = 'failure',
  ERROR = 'error',
}

interface IApiResponse {
  status: ResponseStatus;
  statusCode: number;
}

export interface IApiErrorResponse extends IApiResponse {
  error: string;
  message: string;
}

export interface IApiSuccessResponse<T> extends IApiResponse {
  data: T;
}

interface IPaginationMeta {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

interface IPaginationLinks {
  first: string;
  previous: string;
  next: string;
  last: string;
}

export interface IPaginatedResponse<T> {
  meta: IPaginationMeta;
  links: IPaginationLinks;
  items: T[];
}

export interface IApiPaginationResponse<T> extends IApiResponse {
  data: IPaginatedResponse<T>;
}
