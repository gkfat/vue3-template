import { AuthLogin } from '@/types/auth';
import { request } from './agent';
import { ApiRoutes } from './api-route';

const agent = request(ApiRoutes.a);

export class AuthService {
    static async login(data: AuthLogin) {
        return agent({
            method: 'post',
            url: '/login',
            data,
        });
    }
}
