import React, { useEffect, useState } from "react";
import { Stack } from "@chakra-ui/react";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import { useRecoilState, useSetRecoilState } from "recoil";
import { authModalState } from "../../atoms/authModalAtom";
import { Community } from "../../atoms/communitiesAtom";
import { auth, firestore } from "../../firebase/clientApp";
import { useRouter } from "next/router";
import usePosts from "@/src/hooks/usePosts";
import { Post } from "@/src/atoms/postsAtom";
import PostItem from "./PostItem";
import { useAuthState } from "react-firebase-hooks/auth";
import PostLoader from "./PostLoader";



type PostsProps = {
    communityData: Community;
    
};

const Posts:React.FC<PostsProps> = ({ communityData }) => {
    
    //useAuthstate
    const [user] = useAuthState(auth);
    const [loading, setLoading] = useState(false);
    const { postStateValue, setPostStateValue, onVote, onDeletePost, onSelectPost } = usePosts();

    const getPosts = async () => {
        try {
            setLoading(true)
            //getposts for this community
            const postsQuery = query(
                collection(firestore, "posts"),
                where("communityId", "==", communityData.id!),
                orderBy("createdAt", "desc")
              );

            //store in post state
            const postDocs = await getDocs(postsQuery);
            const posts = postDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            setPostStateValue((prev) => ({
                ...prev,
                posts: posts as unknown as Post[],
              }));
            
            console.log( "posts", posts);
            
        } catch (error: any) {
            console.log('getPosts error', error.message);
            
        }
        setLoading(false)
    };
    
    useEffect(() => {
        getPosts();
    }, []);
    return (
        <>
        {loading ? (<PostLoader />):(
            <Stack>
            {postStateValue.posts.map((item) => (
                <PostItem 
                key={item.body}
                post={item} 
                userIsCreator={user?.uid === item.creatorId} 
                userVoteValue={undefined}
                onVote={onVote}
                onSelectPost={onSelectPost}
                onDeletePost={onDeletePost}
                />
            ))}
            </Stack>

        )}
        </>
    )
}
export default Posts;
