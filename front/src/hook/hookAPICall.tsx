import { useEffect } from "react";
import instance from "@/hook/instance";

import {useBreakpointValue, useToast} from "@chakra-ui/react";
import { AxiosResponse } from "axios";

async function apiCall(method: string, endpoint: string, data: JSON): Promise<AxiosResponse<any, any> | undefined> {
    if (method == "post")
        return instance.post(endpoint, data);
    if (method == "get")
        return instance.get(endpoint);
    if (method == "delete")
        return instance.delete(endpoint);
}

export function hookAPICallToastResp(method: string, endpoint: string, data: any, isSubmit: boolean, setIsSubmit: any): void {
    const toast = useToast();

    const toastPosition = useBreakpointValue({base: 'top', xl: 'bottom'})

    useEffect((): void => {
        if (isSubmit) {
            apiCall(method, endpoint, data).then(response => {
                toast({
                    // @ts-ignore
                    position: toastPosition,
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                    title: response && response.data && response.data.message ? response.data.message : null
                });
            }).catch(error => {
                toast({
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                    title: "Error",
                    description: error.response && error.response.data && error.response.data.message ? error.response.data.message : "An error occured"
                });
                console.log(error);
            });
            setIsSubmit(false);
        }
    });
}

export function hookAPICallDataResp(method: string, endpoint: string, data: any, response: any, setResponse: any): void {
    useEffect((): void => {
        if (!response) {
            apiCall(method, endpoint, data).then(response => {
                setResponse(response);
            }).catch(error => {
                setResponse("error");
            });
        }
    });
}