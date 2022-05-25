import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | Immoa`;
    }, [title]);
};

export default useTitle;
