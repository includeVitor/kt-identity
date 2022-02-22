import { useEffect, useState } from "react";
import AppLayout from "../../components/_layout/App";
import { CountriesGet } from "../../service/app";
import { Article } from "../../styles/shared.styles";

const AppContriesPage = () => {
  const [state, setState] = useState<string[]>([]);

  useEffect(() => {
    const loadData = async () => {
      setState(await CountriesGet());
    };
    loadData();
  }, []);

  const list = state?.map((s, index) => <li key={index}>{s}</li>);

  return (
    <Article>
      <h4>AppContriesPage</h4>
      <ol>{list}</ol>
    </Article>
  );
};

AppContriesPage.Layout = AppLayout;

export default AppContriesPage;
