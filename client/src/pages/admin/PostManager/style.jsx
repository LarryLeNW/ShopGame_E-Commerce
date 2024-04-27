import styled from "styled-components";
export const Wrapper = styled.div`
  padding: 30px;
  background-color: black;
`;
export const TitleMain = styled.h1`
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
`;

export const WrapperPost = styled.div`
  display: flex;
  justify-content: space-around;
  overflow: auto;
  margin: 20px 0;
  flex-wrap: wrap;
  max-height: 400px;
`;

export const ContainerPost = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
  box-shadow: 0 0 5px white;
  @media (max-width: 768px) {
    margin: 20px 0;
  }
  margin-bottom: 20px;
`;

export const WrapperInfoPoster = styled.div`
  border-bottom: 1px solid black;
`;
export const InfoPoster = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const NamePoster = styled.div`
  font-weight: bold;
`;

export const AvatarPoster = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

export const TimeCreate = styled.div`
  font-style: italic;
`;

export const TitlePosted = styled.div`
  overflow-x: scroll;
  font-weight: bold;
`;

export const ContentPosted = styled.div`
  overflow: auto;
  word-wrap: "break-word";
  white-space: "pre-line";
`;
