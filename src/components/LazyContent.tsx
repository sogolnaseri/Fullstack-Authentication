import { useQuery } from "@tanstack/react-query";
import { FixedSizeList as List } from "react-window";

const fetchData = async () => {
  const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/items`);
  return res.json();
};

const LazyContent = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["items"],
    queryFn: fetchData,
  });

  if (isLoading) return <h3>Loading data...</h3>;

  return (
    <List height={400} itemCount={data?.length || 0} itemSize={50} width={300}>
      {({ index, style }: { index: number; style: React.CSSProperties }) => (
        <div style={style}>{data ? data[index]?.name : "Loading..."}</div>
      )}
    </List>
  );
};

export default LazyContent;
