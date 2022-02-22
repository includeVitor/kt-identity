import { useEffect, useState } from "react";
import AppLayout from "../../components/_layout/App";
import { AnimalsGet } from "../../service/app";
import { Article } from "../../styles/shared.styles";

const AppAnimalsPage = () => {
  const [state, setState] = useState<string[]>([]);

  useEffect(() => {
    const loadData = async () => {
      setState(await AnimalsGet());
    };
    loadData();
  }, []);

  const list = state?.map((s, index) => <li key={index}>{s}</li>);

  return (
    <Article>
      <h4>AppAnimalsPage</h4>
      <ol>{list}</ol>
    </Article>
  );
};

AppAnimalsPage.Layout = AppLayout;

export default AppAnimalsPage;
