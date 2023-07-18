import { authModalState } from '@/src/atoms/authModalAtom';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useRecoilBridgeAcrossReactRoots_UNSTABLE, useRecoilValue } from 'recoil';
import Login from './Login';
import SignUp from './SignUp';

type AuthinputsProps = {
    
};

const AuthInputs:React.FC<AuthinputsProps> = () => {
    const modalState = useRecoilValue(authModalState);
    
    return (
        <Flex 
        direction='column'
        align='center'
        width="100%"
        mt={4}>
            {modalState.view === 'login' && <Login />}
            {modalState.view === 'signup' && <SignUp />}
        </Flex>

    )
}
export default AuthInputs;