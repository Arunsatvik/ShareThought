import PageContent from '@/src/components/Layout/PageContent';
import NewPostForm from '@/src/components/Posts/NewPostForm';
import { Box, Text } from '@chakra-ui/react';
import React from 'react';



const submitPostPage:React.FC = () => {
    
    return (
        <PageContent>
            <>
            <Box 
            p="14px 0px" 
            borderBottom="1px solid" 
            borderColor="white"
            >
                <Text fontWeight={600}>Create a post</Text>
            </Box>
                <NewPostForm />
            </>
            <>
            {/* About */}
            </>
        </PageContent>
    )
}
export default submitPostPage;