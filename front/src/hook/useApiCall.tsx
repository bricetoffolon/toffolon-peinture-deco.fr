import { Dispatch, SetStateAction, useEffect } from 'react';
import instance from '@/hook/instance';
import useCustomToast from '@/hook/useCustomToast';

async function apiCall(method: string, endpoint: string, data: JSON) {
    if (method === 'post') return instance.post(endpoint, data);
    if (method === 'get') return instance.get(endpoint);
    if (method === 'delete') return instance.delete(endpoint);

    return undefined;
}

export function useApiCallToastResp(
    method: string,
    endpoint: string,
    data: any, // eslint-disable-line
    isSubmit: boolean,
    setIsSubmit: Dispatch<SetStateAction<boolean>>
): void {
    const showToast = useCustomToast();

    useEffect((): void => {
        if (isSubmit) {
            apiCall(method, endpoint, data)
                .then((response) => {
                    showToast({
                        status: 'success',
                        title: 'Success',
                        description:
                            response && response.data && response.data.message
                                ? response.data.message
                                : null,
                    });
                })
                .catch((error) => {
                    console.log(error);
                    showToast({
                        status: 'error',
                        title: 'Error',
                        description: error.response?.data?.message || 'An error occurred',
                    });
                });
            setIsSubmit(false);
        }
    });
}

export function useApiCallDataResp(
    method: string,
    endpoint: string,
    data: any, // eslint-disable-line
    response: any, // eslint-disable-line
    setResponse: any // eslint-disable-line
): void {
    useEffect((): void => {
        if (!response) {
            apiCall(method, endpoint, data)
                .then((reqResponse) => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    setResponse(reqResponse);
                })
                .catch(() => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    setResponse('error');
                });
        }
    });
}
