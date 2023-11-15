import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { NotifyItem, NotifyOptions } from '@/types/notifier';
import { randomId } from '@/utils/common';

/** 同時顯示的最多通知數量 */
const MAXIMUM_NOTIFY = 6;

const presetSettings = {
    info: {
        color: 'primary',
        timeout: 5000,
    },
    error: {
        color: 'error',
        timeout: 3000,
    },
    warn: {
        color: 'warn',
        timeout: 5000,
    },
    success: {
        color: 'success',
        timeout: 3000,
    },
};

const createNotifierItem = (options: NotifyOptions): NotifyItem => ({
    id: randomId(),
    content: options.content || '',
    color: options.color || 'primary',
    timeout: options.timeout || 5000,
});

export const useNotifierStore = defineStore('notifier', () => {
    /** 正在顯示的通知 */
    const list = ref([] as NotifyItem[]);

    /** 等待顯示的通知 */
    const queue = ref([] as NotifyItem[]);

    /** 是否達到最大顯示數量 */
    const reachedMaximum = computed(() => list.value.length >= MAXIMUM_NOTIFY);

    /** 新增通知 */
    const add = (options: NotifyOptions) => {
        const item = createNotifierItem(options);
        if (reachedMaximum.value) {
            queue.value.push(item);
        } else {
            list.value.push(item);
        }
        return item.id;
    };

    /** 增加 Error 類型的通知 */
    const error = (options: NotifyOptions) => add({
        ...presetSettings.error,
        ...options,
    });

    /** 增加 Success 類型的通知 */
    const success = (options: NotifyOptions) => add({
        ...presetSettings.success,
        ...options,
    });

    /** 移除通知 */
    const remove = (id: string) => {
        const index = list.value.findIndex((item) => item.id === id);
        if (index === -1) {
            return null;
        }

        const item = list.value[index];
        list.value.splice(index, 1);

        return item;
    };

    return {
        list,
        queue,
        add,
        success,
        error,
        remove,
    };
});
