import {User} from './user';

export class Study {
  name: string;
  reference: string;
  description: string;
  initiator?: User;
  collaborators?: User[];
  acknowledgements: string;
}
