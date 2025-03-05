import { Dispatch, SetStateAction, useEffect } from 'react';

import instance from '@/hook/instance';
import useCustomToast from "@/hook/useCustomToast";

export default function useAddPost(
    endpoint: string,
    data: any, // eslint-disable-line
    isSubmit: boolean,
    setIsSubmit: Dispatch<SetStateAction<boolean>>,
    file: any
): void {
    const form: FormData = new FormData();

    const showToast = useCustomToast();

    useEffect((): void => {
        if (isSubmit) {
            if (file) {
                for (let i: number = 0; i < file.length; i += 1) {
                    const { file: fileProperty, name, size, type } = file[i];
                    const blob = fileProperty instanceof Blob ? fileProperty : new Blob([fileProperty], { type });
                    const convertToFile = new File([blob], name, {type: type});
                    form.append('files', convertToFile);
                }
            }

            instance
                .post(endpoint, data)
                .then((response) => {
                    if (response && response.data && response.data.id) {
                        instance
                            .post(`${endpoint}/${response.data.id}`, form, {timeout: 30000})
                            .then(() => {
                                showToast({
                                    status: 'success',
                                    title: "Success",
                                    description: `Post ${response.data.id} created successfully`,
                                    isClosable: true,
                                });
                            })
                            .catch((error) => {
                                console.log(error)
                                showToast({
                                    status: 'error',
                                    title: error.message || "Unable to create a post",
                                    isClosable: true,
                                });
                            });
                    } else {
                    }
                })
                .catch((error) => {
                    console.log(error)
                    showToast({
                        status: 'error',
                        title: error.data,
                        isClosable: true,
                    });
                });
        }

        setIsSubmit(false);
    }, [isSubmit]);
}
