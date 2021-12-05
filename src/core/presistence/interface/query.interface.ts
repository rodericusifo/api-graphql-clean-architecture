export interface IQuery {
  readonly page?: number;
  readonly limit?: number;
  readonly sortingBy?: string;
  readonly sortingType?: SortingType;
}

export enum SortingType {
  Ascending = 'ascending',
  Descending = 'descending',
}
