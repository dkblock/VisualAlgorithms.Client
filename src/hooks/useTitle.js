import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setHeader } from "../store/actions/app";

const useTitle = (pageTitle, pageHeader) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!pageTitle) document.title = "Algorithmix";
    if (!pageHeader) dispatch(setHeader("Algorithmix"));

    document.title = `${pageTitle} - Algorithmix`;
    dispatch(setHeader(pageHeader));
  }, [dispatch, pageHeader, pageTitle]);
};

export default useTitle;
