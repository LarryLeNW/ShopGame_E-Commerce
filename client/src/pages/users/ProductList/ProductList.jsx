import { useEffect, useMemo, useState } from "react";
import * as S from "./styles";
import Product from "../Product";
import { useDispatch, useSelector } from "react-redux";
import { getProductListRequest } from "../../../redux/slicers/product.slice";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { PRODUCT_LIMIT } from "../../../constants/paping";
import ReactPaginate from "react-paginate";
import Loading from "../../../components/Loading/Loading";
import { Button, Select, Slider } from "antd";
import NotFoundProduct from "../../../components/NotFoundProduct";
import qs from "qs";
import { ROUTES } from "../../../constants/routes";

function ProductList() {
    const [filterParams, setFilterParams] = useState({
        category: "",
        sort: [],
        page: 1,
    });

    const dispatch = useDispatch();
    const { search } = useLocation();
    const navigate = useNavigate();
    const { totalPages, rows } = useSelector(
        (state) => state.product.productList.data
    );

    const { loading } = useSelector((state) => state.product.productList);
    let content = null;

    useEffect(() => {
        let searchParams = qs.parse(search, { ignoreQueryPrefix: true });
        const newFilterParams = {
            ...searchParams,
            price: searchParams.price
                ? searchParams.price.map((price) => parseInt(price))
                : [],
            sort: searchParams.sort,
            page: parseInt(searchParams.page) || 1,
        };

        setFilterParams(newFilterParams);
        dispatch(
            getProductListRequest({
                limit: PRODUCT_LIMIT,
                status: true,
                ...newFilterParams,
            })
        );
    }, [search]);

    const handleFilter = (key, value) => {
        navigate({
            pathname: ROUTES.USER.PRODUCT_LIST,
            search: qs.stringify({
                ...filterParams,
                page: 1,
                [key]: value,
            }),
        });
    };

    if (loading) {
        content = <Loading></Loading>;
    }

    if (rows?.length > 0) {
        content = (
            <>
                <S.ProductListContainer>
                    {rows.map((item) => (
                        <Product
                            key={item.id}
                            name={item.name}
                            src={item.Images.filename}
                            price={item.price.toLocaleString()}
                            discount={item.discount}
                            remainingPrice={item.price - item.discount}
                            productId={item.id}
                        ></Product>
                    ))}
                </S.ProductListContainer>
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={(e) => {
                        handleFilter("page", e.selected + 1);
                    }}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={totalPages}
                    onPageActive={3}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    forcePage={filterParams.page - 1}
                    renderOnZeroPageCount={null}
                />
            </>
        );
    } else if (!loading) {
        content = <NotFoundProduct />;
    }

    return (
        <S.ProductListWrapper>
            <S.Filter>
                <Button
                    danger
                    onClick={() => {
                        navigate({
                            pathname: ROUTES.USER.PRODUCT_LIST,
                            search: qs.stringify({
                                category: filterParams.category,
                                sort: [],
                                price: [],
                                page: 1,
                            }),
                        });
                    }}
                >
                    Xóa bộ lọc
                </Button>
                <S.Select
                    style={{ minWidth: "120px", padding: "5px" }}
                    placeholder={"giá tiền"}
                    onChange={(e) => {
                        const selectedValue = JSON.parse(e.target.value);
                        handleFilter("price", selectedValue);
                    }}
                    value={
                        filterParams.price
                            ? JSON.stringify(
                                  filterParams.price.map((price) =>
                                      parseInt(price)
                                  )
                              )
                            : []
                    }
                >
                    <option value={JSON.stringify([])}>All Price</option>
                    <option value={JSON.stringify([0, 200000])}>
                        Từ 0 đến 200k
                    </option>
                    <option value={JSON.stringify([200000, 500000])}>
                        Từ 200k đến 500k
                    </option>
                    <option value={JSON.stringify([500000, 1000000])}>
                        Từ 500k đến 1 triệu
                    </option>
                    <option value={JSON.stringify([1000000, 999999999])}>
                        Trên 1 triệu
                    </option>
                </S.Select>
                <S.Select
                    style={{ minWidth: "120px", padding: "5px" }}
                    placeholder={"Sắp xếp"}
                    onChange={(e) => {
                        const selectedValue = JSON.parse(e.target.value);
                        handleFilter("sort", selectedValue);
                    }}
                    value={
                        filterParams.price
                            ? JSON.stringify(filterParams.sort)
                            : null
                    }
                >
                    <option value={JSON.stringify(["price", "asc"])}>
                        Giá Tăng Dần
                    </option>
                    <option value={JSON.stringify(["price", "desc"])}>
                        Giá Giảm Dần
                    </option>
                    <option value={JSON.stringify(["name", "asc"])}>
                        Tên A-Z
                    </option>
                    <option value={JSON.stringify(["name", "desc"])}>
                        Tên Z-A
                    </option>
                </S.Select>
            </S.Filter>
            {content}
        </S.ProductListWrapper>
    );
}

export default ProductList;
