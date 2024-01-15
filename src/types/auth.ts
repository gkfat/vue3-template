import { User } from './user';

export namespace Auth {
    export namespace Login {
        export interface Request {
            email: string;
            password: string;
        }
        export interface Response {
            user: User.User;
            token: string;
        }
    }
}
