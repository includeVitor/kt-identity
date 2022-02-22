import { useEffect, useState } from "react";
import AppLayout from "../../components/_layout/App";
import { GamersGet } from "../../service/app";
import { Article } from "../../styles/shared.styles";

const AppGamersPage = () => {
  const [state, setState] = useState<string[]>([]);

  useEffect(() => {
    const loadData = async () => {
      setState(await GamersGet());
    };
    loadData();
  }, []);

  const list = state?.map((s, index) => <li key={index}>{s}</li>);

  return (
    <Article>
      <h4>AppGamersPage</h4>
      <ol>{list}</ol>
    </Article>
  );
};

AppGamersPage.Layout = AppLayout;

export default AppGamersPage;
