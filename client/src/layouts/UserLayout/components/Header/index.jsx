import { useDispatch, useSelector } from "react-redux";
import HeadlessTippy from "@tippyjs/react/headless";
import * as S from "./styles";
import * as B from "../../../../Typography";
import { Link, generatePath, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import { setTheme } from "../../../../redux/slicers/common.slice";
import { useEffect, useRef, useState } from "react";
import { useClickOutside } from "../../../../hooks/useClickOutside";
import { useClickOutside2 } from "../../../../hooks/useClickOutside2";
import { logoutRequest } from "../../../../redux/slicers/auth.slice";
import { getProductByDesc } from "../../../../Services/ProductService";
import useDebounce from "../../../../hooks/useDebounce";
import { Badge, notification } from "antd";
import { getCartListRequest } from "../../../../redux/slicers/cart.slice";
import { changeUserConnect } from "../../../../redux/slicers/chat.slice";
import menuIcon from "../../../../Images/menu.png";
import closeIcon from "../../../../Images/close.png";
import searchIcon from "../../../../Images/search.png";
import loadingIcon from "../../../../Images/icon-loading.png";
import { ShoppingCartOutlined } from "@ant-design/icons";

function Header() {
    const [icon, setIcon] = useState("light");

    const { pathname } = useLocation();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isShowMenuMain, setShowMenuMain] = useState(false);
    const [isShowService, setIsShowService] = useState(false);
    const [isShowMenuUser, setShowMenuUser] = useState(false);

    let menuMainRef = useClickOutside2(() => setShowMenuMain(false));
    const menuServiceRef = useClickOutside(() => setIsShowService(false));
    const menuUserRef = useClickOutside(() => setShowMenuUser(false));

    const userInfo = useSelector((state) => state.auth.userInfo.data);
    const { cartList } = useSelector((state) => state.cart);
    const [isLoading, setLoading] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const inputRef = useRef();

    const debounced = useDebounce(keyword, 500);

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        const fetchData = async () => {
            try {
                const res = await getProductByDesc(debounced.trim());
                setSearchResult(res.data.rows);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchData();
        setShowResult(true);
    }, [debounced]);

    useEffect(() => {
        dispatch(
            getCartListRequest({
                id: userInfo?.id,
            })
        );
    }, [userInfo?.id]);

    let handleOnchangeSearch = async (e) => {
        setKeyword(e.target.value);
    };

    let handleClear = () => {
        setSearchResult([]);
        setKeyword("");
        inputRef.current.focus();
    };

    let handleHideResult = () => {
        setShowResult(false);
        setSearchResult([]);
    };
    return (
        <S.HeaderWrapper>
            <div
                style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "white",
                    fontStyle: "italic",
                }}
            >
                Larry
            </div>
            <S.IconMenuMain isShow={isShowMenuMain}>
                <img src={closeIcon} alt="close"></img>
            </S.IconMenuMain>
            <S.IconMenuMain
                isShow={!isShowMenuMain}
                onClick={() => setShowMenuMain(true)}
            >
                <img src={menuIcon} alt="menu"></img>
            </S.IconMenuMain>
            <S.NavMain isShow={isShowMenuMain} ref={menuMainRef}>
                <S.NavItemCenter
                    active={pathname === "/"}
                    onClick={() => {
                        setShowMenuMain(false);
                    }}
                >
                    <Link to={ROUTES.USER.HOME}>Trang chủ</Link>
                </S.NavItemCenter>
                <S.NavItemCenter
                    onClick={() => {
                        notification.info({
                            message: "Tính năng này chưa phát triển",
                            duration: 1,
                        });
                    }}
                    active={isShowService}
                >
                    <Link>Dịch vụ</Link>
                </S.NavItemCenter>
                <S.NavItemCenter
                    active={pathname === "/contact"}
                    onClick={() => {
                        setShowMenuMain(false);
                    }}
                >
                    <Link to={ROUTES.CONTACT}>Liên hệ</Link>
                </S.NavItemCenter>
                <S.NavItemCenter
                    active={pathname === "/about"}
                    onClick={() => {
                        setShowMenuMain(false);
                    }}
                >
                    <Link to={ROUTES.POST}>Thông báo</Link>
                </S.NavItemCenter>
            </S.NavMain>

            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <S.WrapperResult tabIndex="-1" {...attrs}>
                        {searchResult.map((item) => {
                            return (
                                <S.ResultItem
                                    key={item.id}
                                    onClick={() => {
                                        navigate(
                                            generatePath(
                                                ROUTES.USER.PRODUCT_DETAIL,
                                                {
                                                    category: item.category,
                                                    id: item.id,
                                                }
                                            )
                                        );
                                        handleClear();
                                    }}
                                >
                                    <S.ImageResult>
                                        <img
                                            src={item.Images.filename}
                                            alt={item.name}
                                        />
                                    </S.ImageResult>
                                    <S.Info>
                                        <S.TitleResult>
                                            {item.name}
                                        </S.TitleResult>
                                        <S.DesResult>
                                            {item.description}
                                        </S.DesResult>
                                    </S.Info>
                                </S.ResultItem>
                            );
                        })}
                    </S.WrapperResult>
                )}
                onClickOutside={handleHideResult}
            >
                <S.SearchContainer>
                    <S.InputSearch
                        ref={inputRef}
                        onChange={(e) => handleOnchangeSearch(e)}
                        value={keyword}
                        placeholder="tìm kiếm acc"
                        spellCheck={false}
                    ></S.InputSearch>
                    {isLoading ? (
                        <S.IconLoading>
                            <img src={loadingIcon} alt="loading"></img>
                        </S.IconLoading>
                    ) : (
                        <S.ButtonSearch>
                            <img src={searchIcon} alt="search"></img>
                        </S.ButtonSearch>
                    )}
                </S.SearchContainer>
            </HeadlessTippy>

            {icon === "dark" ? (
                <S.HeaderIcon
                    onClick={() => {
                        setIcon("light");
                        dispatch(setTheme({ theme: "dark" }));
                    }}
                >
                    <i className="fa-solid fa-moon"></i>
                </S.HeaderIcon>
            ) : (
                <S.HeaderIcon
                    onClick={() => {
                        setIcon("dark");
                        dispatch(setTheme({ theme: "light" }));
                    }}
                >
                    <i className="fa-regular fa-sun"></i>
                </S.HeaderIcon>
            )}
            {userInfo != null ? (
                <S.WrapperInfoUser>
                    <S.WrapperCart>
                        <Badge count={cartList.length}>
                            <Link to={ROUTES.USER.CART}>
                                <ShoppingCartOutlined
                                    style={{ fontSize: "2rem", color: "aqua" }}
                                />
                            </Link>
                        </Badge>
                    </S.WrapperCart>

                    <div style={{ marginRight: "10px", color: "white" }}>
                        <div>
                            Your Money :{" "}
                            <span
                                style={{
                                    fontWeight: "bold",
                                    fontStyle: "italic",
                                }}
                            >
                                {userInfo?.money} VNĐ
                            </span>
                        </div>
                    </div>
                    <S.AvatarPreview
                        onClick={() => setShowMenuUser(!isShowMenuUser)}
                        src={userInfo?.avatar}
                        alt="avatar"
                    ></S.AvatarPreview>
                </S.WrapperInfoUser>
            ) : (
                <B.ButtonAnimation onClick={() => navigate(ROUTES.LOGIN)}>
                    Login / Register
                </B.ButtonAnimation>
            )}
            <S.MenuService isShowService={isShowService} ref={menuServiceRef}>
                item
            </S.MenuService>
            <S.MenuUser isShowMenuUser={isShowMenuUser} ref={menuUserRef}>
                <B.ButtonNavUser
                    bg={"green"}
                    onClick={() => {
                        navigate(ROUTES.USER.USER_INFO);
                        setShowMenuUser(false);
                    }}
                >
                    Info
                </B.ButtonNavUser>
                <B.ButtonNavUser
                    onClick={() => {
                        // navigate(ROUTES.USER.HOME);
                        dispatch(
                            changeUserConnect({
                                userSelect: null,
                                userCurrent: null,
                            })
                        );
                        dispatch(
                            logoutRequest({
                                callback: () => {
                                    navigate(ROUTES.LOGIN);
                                },
                            })
                        );
                        setShowMenuUser(false);
                    }}
                    bg={"red"}
                >
                    Logout
                </B.ButtonNavUser>
            </S.MenuUser>
        </S.HeaderWrapper>
    );
}

export default Header;
