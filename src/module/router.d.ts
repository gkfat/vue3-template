import 'vue-router';

declare module 'vue-router' {
    export interface RouteMeta {
        /** 是否需要登入 */
        requiresAuth: boolean;

        /** route nav i18n text */
        title: string;

        /** 是否在 nav 中顯示 */
        hidden: boolean;
    }
}