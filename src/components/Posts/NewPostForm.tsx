import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  Stack,
  Textarea,
  Image,
} from "@chakra-ui/react";
import { User } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { BiPoll } from "react-icons/bi";
import { BsLink45Deg, BsMic } from "react-icons/bs";
import { IoDocumentText, IoImageOutline } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import { useRecoilState, useSetRecoilState } from "recoil";
// import { firestore, storage } from "../../../firebase/clientApp";
// import { postState } from "../../../atoms/postsAtom";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import Tabitem from "./Tabitem";
import { it } from "node:test";


// import TextInputs from "./TextInputs";
// import ImageUpload from "./ImageUpload";
 
 type NewPostFormProps = {};

 const formTabs = [
    {
      title: "Post",
      icon: IoDocumentText,
    },
    {
      title: "Images & Video",
      icon: IoImageOutline,
    },
    {
      title: "Link",
      icon: BsLink45Deg,
    },
    {
      title: "Poll",
      icon: BiPoll,
    },
    {
      title: "Talk",
      icon: BsMic,
    },
  ];

  export type TabItem = {
    title: string;
    icon: typeof Icon.arguments;
  }
 
 const NewPostForm:React.FC<NewPostFormProps> = () => {

    const [selectedTab, setSelectedTab] = useState(formTabs[0].title);
    return (
        <Flex direction="column" bg="white" borderRadius={4} mt={2} >
            <Flex width="100%">
                {formTabs.map((item) => (
                    <Tabitem 
                        item={item} 
                        selected={item.title === selectedTab} 
                        setSelectedTab={setSelectedTab}
                    />
                ))}
            </Flex>
        </Flex>
    )
 }
 export default NewPostForm;