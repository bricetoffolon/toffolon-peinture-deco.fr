import React, { useEffect } from "react";

import instance from "@/hook/instance";
import {useToast} from "@chakra-ui/react";

export default function hookAddPost(endpoint: string, data: any, isSubmit: boolean, setIsSubmit: any, file: any): void {
    const form: FormData = new FormData();

    const toast = useToast();

    useEffect((): void => {
        if (isSubmit && data.authorEmail) {
            if (file) {
                for (let i: number = 0; i < file.length; i += 1) {
                    form.append("files", file[i])
                }
            }



            instance.post(endpoint, data).then(
                response => {
                    if (response && response.data && response.data.id) {
                       instance.post(`${endpoint}/${response.data.id}`,form).then(response => {
                            toast({
                                status: "success",
                                duration: 9000,
                                isClosable: true,
                            })
                            console.log(response);
                        }).catch(error => {
                            console.log(error)
                            toast({
                                status: "error",
                                duration: 9000,
                                title: error.message,
                                isClosable: true,
                            })
                        })
                    }
                }
            ).catch(error => {
                toast({
                    status: "error",
                    duration: 9000,
                    title: error.data,
                    isClosable: true,
                })
            })
        }

        setIsSubmit(false);
    })
}