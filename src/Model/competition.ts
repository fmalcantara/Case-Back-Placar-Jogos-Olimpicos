export type competition = {
  id: string;
  name: string;
  status?: string;
}

export interface CompetitionDTO {
  name: string;
}

export enum CompetitionRoles {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}