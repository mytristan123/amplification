import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PictureList } from "./picture/PictureList";
import { PictureCreate } from "./picture/PictureCreate";
import { PictureEdit } from "./picture/PictureEdit";
import { PictureShow } from "./picture/PictureShow";
import { MemberProfileList } from "./memberProfile/MemberProfileList";
import { MemberProfileCreate } from "./memberProfile/MemberProfileCreate";
import { MemberProfileEdit } from "./memberProfile/MemberProfileEdit";
import { MemberProfileShow } from "./memberProfile/MemberProfileShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MembershipWebsite"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Picture"
          list={PictureList}
          edit={PictureEdit}
          create={PictureCreate}
          show={PictureShow}
        />
        <Resource
          name="MemberProfile"
          list={MemberProfileList}
          edit={MemberProfileEdit}
          create={MemberProfileCreate}
          show={MemberProfileShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
