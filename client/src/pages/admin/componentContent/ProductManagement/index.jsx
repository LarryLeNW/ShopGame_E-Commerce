import { Button, notification } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductListRequest } from "../../../../redux/slicers/product.slice";
import ReactPaginate from "react-paginate";
import * as S from "./style";
import ModalCreate from "../../modalAdmin/ModalCreate";
import { deleteProduct } from "../../../../Services/AdminService";
import ModalUpdate from "../../modalAdmin/ModalUpdate";

function ProductManagement() {
    const dispatch = useDispatch();
    const { category } = useParams();
    const [reload, setReload] = useState(false);

    const { rows, totalPages } = useSelector(
        (state) => state.product.productList.data
    );

    const { loading } = useSelector((state) => state.product.productList);
    const [forcePage, setForcePage] = useState(0);
    const [isShowModalCreate, setIsShowModalCreate] = useState(false);
    const [productUpdate, setProductUpdate] = useState(null);

    useEffect(() => {
        dispatch(
            getProductListRequest({
                category: category,
                limit: 10,
                page: 1,
            })
        );
        setForcePage(0);
    }, [category, reload]);

    const handlePageClick = (e) => {
        const selectedPage = e.selected + 1;
        setForcePage(selectedPage - 1);
        dispatch(
            getProductListRequest({
                category: category,
                limit: 7,
                page: selectedPage,
            })
        );
    };

    return (
        <div>
            {loading ? (
                <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
                    Loading...
                </h1>
            ) : (
                <S.WrapperManager>
                    <S.TableContainer>
                        <table class="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Discount</th>
                                    <th scope="col">Img</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!!rows &&
                                    rows.map((item, index) => (
                                        <tr key={item.id}>
                                            <th scope="row">{index}</th>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>{item.discount}</td>
                                            <td>
                                                <div
                                                    style={{
                                                        width: "200px",
                                                        height: "100px",
                                                        margin: "0 auto",
                                                        objectFit: "cover",
                                                    }}
                                                >
                                                    <img
                                                        width={"100%"}
                                                        height={"100%"}
                                                        src={`http://localhost:6789/Images/${item.img}`}
                                                    ></img>
                                                </div>
                                            </td>
                                            <td>{item.category}</td>
                                            <td>{item.description}</td>
                                            <td>
                                                <Button
                                                    onClick={() =>
                                                        setProductUpdate(item)
                                                    }
                                                >
                                                    Update
                                                </Button>
                                                <Button
                                                    onClick={async () => {
                                                        let res =
                                                            await deleteProduct(
                                                                item.id
                                                            );
                                                        console.log(res);
                                                        if (
                                                            res.data.errCode ===
                                                            0
                                                        ) {
                                                            setReload(!reload);
                                                        }
                                                    }}
                                                >
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </S.TableContainer>
                    <ReactPaginate
                        nextLabel="next >"
                        onPageChange={handlePageClick}
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
                        forcePage={forcePage}
                        renderOnZeroPageCount={null}
                    />
                    <Button onClick={() => setIsShowModalCreate(true)}>
                        Create Product
                    </Button>
                </S.WrapperManager>
            )}
            <S.WrapperControl>
                Control
                <S.ContainerControl>
                    <div>
                        <div>Tìm acc theo mã số</div>
                        <input placeholder="nhập mã số"></input>
                        <button>Submit</button>
                    </div>
                    <div>
                        <div>Lọc acc theo giá</div>
                        <select>
                            <option value="">Dưới 200k</option>
                            <option value="">200k đến 500k</option>
                            <option value="">Trên 500k</option>
                        </select>
                        <button
                            onClick={() => {
                                notification.error({
                                    message: "Chưa hoàn thiện !!!!!!!!!!!!!!!!",
                                    duration: 2,
                                });
                            }}
                        >
                            Submit
                        </button>
                    </div>
                </S.ContainerControl>
                <ModalCreate
                    isShowModal={isShowModalCreate}
                    reload={() => setReload(!reload)}
                    close={() => setIsShowModalCreate(false)}
                ></ModalCreate>
                <ModalUpdate
                    isShowModal={productUpdate !== null}
                    close={() => setProductUpdate(null)}
                    productCurrent={productUpdate}
                    reload={() => setReload(!reload)}
                ></ModalUpdate>
            </S.WrapperControl>
        </div>
    );
}

export default ProductManagement;
