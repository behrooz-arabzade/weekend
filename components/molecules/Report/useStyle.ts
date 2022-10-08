import { makeStyles } from "tss-react/mui";

const useReport = makeStyles()((theme) => ({    

    modalGroup : {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        backgroundColor: '#fff',
        border: '2px solid #000',
        boxShadow: "24",
        padding: "10px",
    },

    
}));
export default useReport;