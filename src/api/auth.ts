import { Auth } from '@/types/auth';

import { request } from './util/agent';
import { ApiRoutes } from './util/api-route';

const agent = request();

export class AuthService {
    static async login(
        data: Auth.Login.Request,
    ): Promise<Auth.Login.Response> {
        return agent({
            method: 'post',
            url: ApiRoutes.auth.login,
            data,
        });
    }
}
