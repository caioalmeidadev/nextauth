import { useContext } from "react";
import Can from "../components/Can";
import { AuthContext } from "../contexts/AuthContext";
import { useCan } from "../hooks/useCan";
import { setupApiClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

export function Dashboard() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <>
      <h2>Dashbaord: {user?.email}</h2>
      <button onClick={signOut}>SignOut</button>
      <Can permissions={["metrics.list"]}>
        <div>Metricas</div>
      </Can>
    </>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);
  const response = await apiClient.get("/me");
  console.log(response.data);

  return {
    props: {},
  };
});
