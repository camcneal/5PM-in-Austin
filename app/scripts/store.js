import Session from './models/session';
import Users from './collections/users';
import Drinks from './collections/drinks';

export default {
  users: new Users(),
  session: new Session(),
  drinks: new Drinks(),
};
