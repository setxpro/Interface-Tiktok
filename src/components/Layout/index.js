import Header from "../Header";
import Sidebar from "../Sidebar";
import * as C from "./styles";

function Layout({children}) {
    return (
        <>
            <Header></Header>
            <C.Container>
                <C.SidebarContainer>
                    <Sidebar></Sidebar>
                </C.SidebarContainer>
                <C.ContentContainer>
                    {children}
                </C.ContentContainer>
            </C.Container>
        </>
    )
}

export default Layout;