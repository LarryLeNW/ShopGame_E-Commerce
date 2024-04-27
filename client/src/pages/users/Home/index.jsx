import * as S from "./styles";
import * as C from "../../../components/index";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategoriesRequest } from "../../../redux/slicers/category.slice";
import Category from "../Category"; // Import the Category component
import Loading from "../../../components/Loading/Loading";

function HomePage() {
    const dispatch = useDispatch();

    const { data, loading } = useSelector((state) => state.category);
    useEffect(() => {
        dispatch(getCategoriesRequest());
    }, []);
    return (
        <S.HomeWrapper>
            <C.TitleMain fs={"50px"} style={{ margin: "0 auto" }}>
                SHOP GAME{" "}
            </C.TitleMain>
            <S.WrapperProductType>
                {loading ? (
                    <Loading></Loading>
                ) : (
                    data.map((item, index) => (
                        <Category key={index} data={item} />
                    ))
                )}
            </S.WrapperProductType>
            <Outlet></Outlet>
        </S.HomeWrapper>
    );
}

export default HomePage;
