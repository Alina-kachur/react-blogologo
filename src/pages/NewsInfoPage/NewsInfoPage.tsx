import { Spinner } from "components";
import { NewsInfo } from "components/NewsInfo/NewsInfo";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getNewsByID, useAppSelector } from "store";
import { WrapperNews } from "./styles";

export const NewsInfoPage = () => {
  const params = useParams();
  const [details] = useState(`${params.id}`);
  const { news, isLoading } = useAppSelector(getNewsByID);
  return (
    <WrapperNews>
      {isLoading && <Spinner />}
      <NewsInfo news={news} />
    </WrapperNews>
  );
};
