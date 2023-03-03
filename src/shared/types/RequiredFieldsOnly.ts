export type RequiredFieldsOnly<T> =
  Pick<T, { [K in keyof T]-?: {} extends Pick<T, K> ? never : K }[keyof T]>;
export type OptionalFieldsOnly<T> =
Pick<T, { [K in keyof T]-?: {} extends Pick<T, K> ? K : never }[keyof T]>;
