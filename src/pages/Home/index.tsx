import { useContext } from "react";
import Layout from "../../components/Layout";
import myContext from "../../context/data/myContext";

const Home = () => {
  const { name } = useContext(myContext);
  return (
    <Layout>
      <h1>{name}</h1>
    </Layout>
  );
};

export default Home;
