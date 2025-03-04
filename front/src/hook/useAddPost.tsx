import { Dispatch, SetStateAction, useEffect } from 'react';

import instance from '@/hook/instance';
import { useToast } from '@chakra-ui/react';

export default function useAddPost(
    endpoint: string,
    data: any, // eslint-disable-line
    isSubmit: boolean,
    setIsSubmit: Dispatch<SetStateAction<boolean>>,
    file: any
): void {
    const form: FormData = new FormData();

    const toast = useToast({position: 'top-right'});

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
                                toast({
                                    status: 'success',
                                    duration: 9000,
                                    isClosable: true,
                                });
                            })
                            .catch((error) => {
                                console.log(error)
                                toast({
                                    status: 'error',
                                    duration: 9000,
                                    title: error.message,
                                    isClosable: true,
                                });
                            });
                    } else {
                    }
                })
                .catch((error) => {
                    console.log(error)
                    toast({
                        status: 'error',
                        duration: 9000,
                        title: error.data,
                        isClosable: true,
                    });
                });
        }

        setIsSubmit(false);
    }, [isSubmit]);
}
