export interface Group {
  id: string;
  name: string;
  members: string[];
}

export interface Project {
  id: string;
  name: string;
  groupId?: string;
  group?: Group;
}
