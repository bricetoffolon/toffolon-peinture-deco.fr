import React, {useState} from "react";
import {Heading, Flex, FormControl, FormLabel, Input, Button} from "@chakra-ui/react";
import { useRouter } from 'next/router';

import { hookAPICallToastResp } from "@/hook/hookAPICall";

export default function UpdatePass(): React.JSX.Element {
    const router = useRouter();

    const [key, setKey] = useState('');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [newPass, setNewPass] = useState('');

    const [isSubmit, setIsSubmit] = useState(false);

    if (router.query && router.query.key && key == undefined) {
        setKey(router.query.key);
    }

    hookAPICallToastResp("post", `/user/update-password?key=${key}`, {password: newPass}, isSubmit, setIsSubmit);

    return (
       <Flex
           align={"center"}
           justify={"center"}
           m={"1%"}
           direction={"column"}
       >
           <Heading>
               Update your password
           </Heading>
           <FormControl
           >
               <FormLabel>New Password</FormLabel>
               <Input value={password} onChange={(e) => setPassword(e.target.value)} type={"password"}/>
               <FormLabel>Confirm Password</FormLabel>
               <Input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type={"password"}/>
           </FormControl>
           {key && password && confirmPassword && password == confirmPassword ? (
               <Button
                   onClick={() => {
                       setNewPass(password);
                       setIsSubmit(!isSubmit)
                   }}
               >
                   Submit
               </Button>
           ) : null}
       </Flex>
   );
}