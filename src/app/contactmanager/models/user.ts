import { Note } from './notes';

export class User {
  id!: number;
  birthDate!: Date;
  name!: string;
  avatar!: string;
  bio!: string;

  notes!: Note[];
}
