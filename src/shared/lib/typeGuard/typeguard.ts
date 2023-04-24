export const typeGuard = (value: unknown, VIEW: Object) => (
  Boolean(Object.values(VIEW).find((elem) => elem === value))
);
