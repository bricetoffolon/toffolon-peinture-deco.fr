import { Dispatch, SetStateAction, useEffect } from 'react';
import instance from '@/hook/instance';

import { ToastPosition, useToast } from '@chakra-ui/react';
import useResponsiveValue from '@/hook/useResponsiveValue';

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
    const toast = useToast();

    const toastPosition = useResponsiveValue({ defaultValue: 'top', base: 'top', xl: 'bottom' });

    useEffect((): void => {
        if (isSubmit) {
            apiCall(method, endpoint, data)
                .then((response) => {
                    toast({
                        position: toastPosition as ToastPosition,
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                        title:
                            response && response.data && response.data.message
                                ? response.data.message
                                : null,
                    });
                })
                .catch((error) => {
                    toast({
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                        title: 'Error',
                        description:
                            error.response && error.response.data && error.response.data.message
                                ? error.response.data.message
                                : 'An error occured',
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
