
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
}

export interface Task {
  id: string;
  title: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Todo' | 'In Progress' | 'Done';
}

export interface SystemStatus {
  cloudFlareTunnel: 'active' | 'inactive';
  serverLoad: number;
  uptime: string;
}

export type View = 'Overview' | 'Tasks' | 'Local Files' | 'Settings';
