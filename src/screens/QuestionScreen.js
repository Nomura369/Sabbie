import { Box } from "@gluestack-ui/themed";
import { selectIsQuestion1 } from "../redux/questionSlice";
import { useSelector } from "react-redux";

import Question1 from "../components/Question1";
import Question2 from "../components/Question2";

const QuestionScreen = () => {
    const isQuestion1 = useSelector(selectIsQuestion1);
    
    return (
        <Box>
            { isQuestion1 ? <Question1 /> : <Question2 /> }
        </Box>
    );
}

export default QuestionScreen;