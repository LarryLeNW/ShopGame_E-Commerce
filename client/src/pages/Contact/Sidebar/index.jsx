import Navbar from "./Navbar";
import Search from "./Search";
import UserChat from "./UserChat";
import * as S from "./style";

function Sidebar() {
  return (
    <S.Sidebar>
      <Navbar></Navbar>
      <Search></Search>
      <UserChat></UserChat>
    </S.Sidebar>
  );
}

export default Sidebar;
