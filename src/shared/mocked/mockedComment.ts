export const mockedComment = {
  id: '1',
  text: 'hello world',
  user: { id: '1', username: 'Vasya' },
};

export const mockedComments = (n: number) => (
  new Array(n)
    .fill(0)
    .map((elem, index) => ({
      ...mockedComment,
      id: String(index + 1),
    }))
);

interface NormComments {
  entities: {[key: string]: typeof mockedComment};
  ids: string[];
}

export const mockedNormalizedComments = (n: number) => {
  const returnedComments = { ids: [], entities: {} } as NormComments;
  for (let index = 0; index < n; index += 1) {
    const id = String(index + 1);
    returnedComments.entities[id] = mockedComment;
    returnedComments.ids.push(id);
  }
  return returnedComments;
};
