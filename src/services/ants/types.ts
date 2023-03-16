export type Ant = {
  name: string;
  length: number;
  color: string;
  weight: number;
};

export type AntsResponse = {
  ants: Ant[];
};
