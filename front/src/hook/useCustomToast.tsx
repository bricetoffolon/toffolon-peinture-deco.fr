import { useToast } from '@chakra-ui/react';

interface ToastOptions {
    title?: string;
    status?: 'success' | 'error' | 'warning' | 'info';
    description?: string;
    duration?: number;
    isClosable?: boolean;
}

export default function useCustomToast() {
    const toast = useToast();

    return (options: ToastOptions) => {
        toast.closeAll();
        toast({
            title: options.title || 'Notification',
            status: options.status || 'info',
            description: options.description || '',
            duration: options.duration || 4000,
            isClosable: options.isClosable || true,
            position: 'top-right',
        });
    };
}