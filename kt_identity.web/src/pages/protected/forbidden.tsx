import AppLayout from "../../components/_layout/App";
import { Article } from "../../styles/shared.styles";

const AppForbiddenPage = () => {
  return (
    <Article>
      <h3>Access Forbidden</h3>
    </Article>
  );
};

AppForbiddenPage.Layout = AppLayout;

export default AppForbiddenPage;
