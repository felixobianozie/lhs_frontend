import { useContext } from "react";
import NavClassContext from "../context/NavClassProvider";

function useNavClass() {
    return useContext(NavClassContext);
}

export default useNavClass;