import { ReactNode } from "react";
import Like from "components/molecules/ReactionButton/Like";
import UnLike from "components/molecules/ReactionButton/UnLike";
import Idea from "components/molecules/ReactionButton/Idea";

export const reactions: Array<{
    id: number;
    icon: ReactNode;
}> = [
        {
            id: 1,
            icon: <Like />
        },

        {
            id: 2,
            icon: <UnLike />
        },
        {
            id: 3,
            icon: <Idea />
        },
    ];