import type { NextPage } from "next";

// Components
import TagCard from "components/molecules/TagCard/TagCard";
import SearchBox from './../components/Shared/SearchBox';



//Icons
import Head from "next/head";
import Image from "next/image";





//Css(Style Sheet)
import styles from "../styles/Home.module.css";


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <TagCard
        onSelect={() => {}}
        tagId={1}
        tagImageSrc="https://i1.sndcdn.com/artworks-Ln0wbWGPUpAfml94-LDaVMA-t500x500.jpg"
        tagName="booling"
        selected
      />
    
    </div>
  );
};

export default Home;
