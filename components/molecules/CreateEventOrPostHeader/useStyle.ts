import {makeStyles} from "tss-react/mui";


const useCreate = makeStyles()((theme) => ({

    root: {

            background: "url(Images/Create.png)",
            margin: "0px",
            height: "calc(250px)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            transition: " all 0.2s linear",
            display: "flex",
            color: "#fff",
            listStyle: "none",
            justifyContent: "center",
            alignItems: "center",
    },

    baseColor:{

        color : theme.palette.baseColor,

    },

    addPost: {

        background:theme.palette.baseColor,
        margin:"0px 10px",

    }


}));

export default useCreate;


