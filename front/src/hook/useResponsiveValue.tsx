import { useBreakpointValue } from '@chakra-ui/react';

const useResponsiveValue = ({
    defaultValue,
    base,
    xl,
}: {
    defaultValue: string;
    base: string;
    xl: string;
}): string => {
    const breakPointVal = useBreakpointValue({ base, xl });

    if (breakPointVal !== undefined) {
        return breakPointVal;
    }

    return defaultValue;
};

export default useResponsiveValue;
