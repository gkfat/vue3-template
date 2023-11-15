export interface NotifyItem {
    /** uuid */
    id: string;
    /** 顯示的內容 */
    content: string;
    /** vuetify color string */
    color: string;
    /** 顯示時間, -1 表示永久顯示, 需手動關閉 */
    timeout: number;
}

export interface NotifyOptions {
    content: string;
    color?: string;
    timeout?: number
}
