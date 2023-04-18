import { Mark } from './mark.model'

export interface Student {
  id: number;
  name: string;
  marks?: Mark[];
}
