import { useHTTP } from "../../hooks/useHTTP";
import { getCabins } from "../../services/apiCabins";
import Cabin from "./Cabin";

export default function CabinsList() {
  const { results: cabins, isLoading, isError, error } = useHTTP(getCabins);

  let content = null;

  if (isLoading) content = <h2>loading</h2>;

  if (isError) content = <h2>{error.message}</h2>;

  if (cabins.length > 0)
    content = cabins.map((cabin) => <Cabin key={cabin.id} cabin={cabin} />);

  if (!isLoading && cabins?.length === 0) content = <p>No Cabins Found!</p>;

  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">{content}</div>
    </div>
  );
}
