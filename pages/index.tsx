import type { NextPage } from "next";

// Components
import SearchBox from "../components/molecules/SearchBox/SearchBox";

//Icons

//Css(Style Sheet)
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <SearchBox
        title={"Searh Events"}
        hint="Type event keyword"
        onSearchTextChange={(st) => {
          console.log("Search text:", st);
        }}
      />
    </div>
  );
};
export default Home;
