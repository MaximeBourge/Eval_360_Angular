import { Mark } from './mark.model'

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  marks?: Mark[];
}
