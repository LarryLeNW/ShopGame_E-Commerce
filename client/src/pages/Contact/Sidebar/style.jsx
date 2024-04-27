import styled from "styled-components";

export let Sidebar = styled.div`
    flex: 1;
    background-color: #3e3c61;
    position: relative;
    @media screen and (max-width: 768px) {
        width: 30%;
        font-size: 1rem;
    }
`;

export let Navbar = styled.div`
    display: flex;
    align-items: center;
    background-color: #2f2d52;
    height: 50px;
    padding: 10px;
    justify-content: space-between;
    color: #ddddf7;
    font-size: 1rem;
    .logo {
        font-weight: bold;
    }

    .user {
        display: flex;
        gap: 10px;
        img {
            background-color: #ddddf7;
            height: 24px;
            width: 24px;
            border-radius: 50%;
            object-fit: cover;
            @media screen and (max-width: 768px) {
                width: 20px;
                height: 20px;
            }
        }

        button {
            background-color: #5d5b8d;
            color: #ddddf7;
            font-size: 10px;
            border: none;
            cursor: pointer;
        }
    }
`;

export let WrapperSearch = styled.div`
    border-bottom: 1px solid gray;
    .searchForm {
        padding: 10px;

        input {
            background-color: transparent;
            border: none;
            color: white;
            outline: none;

            &::placeholder {
                color: lightgray;
            }
        }
    }
`;

export let WrapperUserChat = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #2f2d52;
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
        @media screen and (max-width: 768px) {
            width: 20px;
            height: 20px;
        }
    }

    .userChatInfo {
        span {
            font-size: 18px;
            font-weight: 500;
        }
        p {
            font-size: 14px;
            color: lightgray;
        }
        @media screen and (max-width: 768px) {
            span {
                font-size: 12px;
            }
            p {
                font-size: 10px;
            }
        }
    }
`;

export let WrapperListUserChat = styled.div`
    overflow-y: scroll;
    max-height: calc(100% - 20px);
`;
export const TitleMain = styled.div`
    font-weight: bold;
    text-shadow: 2px 2px #fff;
    text-transform: uppercase;
    background-image: linear-gradient(
        -225deg,
        #231557 0%,
        #44107a 29%,
        #ff1361 67%,
        #fff800 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;
    @keyframes textclip {
        to {
            background-position: 200% center;
        }
    }
    text-align: center;
    font-size: 1rem;
`;
