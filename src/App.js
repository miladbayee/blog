import { useCallback, useContext, useEffect, useState } from "react";
import AppContext from "./context/appContext";
import { getAllPostAction } from "./context/postsAction";
import Layout from "./Layout/Layout"
import http from "./services/httpService";

const App = () => {
  const { dispatch } = useContext(AppContext)
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(async () => {
    const res = await http.get("/571e3cdb-61d0-4c49-970f-7f618c468aa3");
    dispatch(getAllPostAction(res.data))
  }, [dispatch]);

  useEffect(() => {
    if (isLoading) {
      getPosts()
    }

    return () => {
      setIsLoading(false)
    }
  }, [getPosts, isLoading])
  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
