import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";
import { ROUTES } from "../../../constants/routes";
import qs from "qs";

function Category({ data }) {
    return (
        <S.WrapperCategory>
            <S.ContainerImage>
                <S.ImageCategory>
                    <img src={data.img} alt="Not found this images"></img>
                </S.ImageCategory>
            </S.ContainerImage>
            <S.TitleCategory>{data.name}</S.TitleCategory>
            <S.DescriptionCategory>{data.description}</S.DescriptionCategory>
            <S.ButtonAnimation>
                <Link
                    to={{
                        pathname: ROUTES.USER.PRODUCT_LIST,
                        search: qs.stringify({
                            category: data.name,
                        }),
                    }}
                    key={data.id}
                    style={{ textDecoration: "none" }}
                >
                    Xem Tất Cả
                </Link>
            </S.ButtonAnimation>
        </S.WrapperCategory>
    );
}

export default Category;
