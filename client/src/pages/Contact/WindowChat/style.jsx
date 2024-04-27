import styled from "styled-components";

export let WrapperWindowChat = styled.div`
    flex: 2;
`;

export let ChatInfo = styled.div`
    height: 50px;
    background-color: #5d5b8d;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    color: lightgray;
`;

export const ChatIcons = styled.div`
    display: flex;
    gap: 10px;
    img {
        height: 24px;
        cursor: pointer;
    }
`;

export const FrameMessages = styled.div`
    background-color: #ddddf7;
    padding: 10px;
    height: calc(100% - 100px);
    overflow-y: scroll;
    .message {
        display: flex;
        gap: 20px;
        margin-bottom: 20px;

        .messageInfo {
            display: flex;
            flex-direction: column;
            color: gray;
            font-weight: 300;

            img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                object-fit: cover;
            }
        }
        .messageContent {
            max-width: 80%;
            display: flex;
            flex-direction: column;
            gap: 10px;

            p {
                background-color: white;
                padding: 10px 20px;
                border-radius: 0px 10px 10px 10px;
                max-width: max-content;
            }

            img {
                width: 50%;
            }
        }

        &.owner {
            flex-direction: row-reverse;

            .messageContent {
                align-items: flex-end;
                p {
                    background-color: #8da4f1;
                    color: white;
                    border-radius: 10px 0px 10px 10px;
                }
            }
        }
    }
`;

export let WrapperInput = styled.div`
    height: 50px;
    background-color: white;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
        width: 100%;
        border: none;
        outline: none;
        color: #2f2d52;
        font-size: 18px;

        &::placeholder {
            color: lightgray;
        }
    }

    .send {
        display: flex;
        align-items: center;
        gap: 10px;

        img {
            height: 24px;
            cursor: pointer;
        }

        button {
            border: none;
            padding: 10px 15px;
            color: white;
            background-color: #8da4f1;
            cursor: pointer;
        }
    }
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
