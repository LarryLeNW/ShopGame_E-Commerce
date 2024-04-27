import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  color: black;
  align-items: center;
`;

export const WrapperPost = styled.div`
  border-radius: 5px;
  background-color: white;
  width: 80%;
  margin-bottom: 20px;
  border: 2px solid white;
`;

export const InfoPoster = styled.div`
  display: flex;
`;

export const TitlePoster = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin-right: 10px;
  color: blue;
`;

export const AvatarPoster = styled.div`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 10px;
`;

export const HeaderPost = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  border-bottom: 1px solid black;
  background-color: antiquewhite;
  align-items: center;
`;

export const WrapperContent = styled.div`
  padding: 0 10px;
`;
export const Title = styled.div`
  font-style: italic;
  font-weight: bold;
  word-wrap: break-word; // Thiết lập để tiêu đề tự xuống dòng khi cần
  white-space: pre-line;
`;

export const Content = styled.div`
  word-wrap: break-word; // Thiết lập để tiêu đề tự xuống dòng khi cần
  white-space: pre-line;
`;

export const WrapperCareAbout = styled.div`
  margin-top: 30px;
`;

export const WrapperControl = styled.div`
  background-color: black;
  display: flex;
  padding: 0 50px;
  justify-content: space-between;
`;

export const IconControl = styled.div`
  font-size: 20px;
  color: white;
`;

export const WrapperStatus = styled.div`
  display: flex;
  background-color: black;
  padding: 5px;
  border-radius: 5px;
`;

export const WrapperIconStatus = styled.div`
  margin: 0 5px;
  font-size: 20px;
  cursor: pointer;
  color: black;
  /* animation: identifier 1s infinite; */
  animation: identifier 1s forwards;
  @keyframes identifier {
    0% {
      margin: 0 5px;
    }
    100% {
      margin: 0 10px;
    }
  }
`;

export const WrapperStatusPost = styled.div`
  display: flex;
  margin: 0 5px;
  justify-content: space-between;
`;

export const WrapperIconActive = styled.div`
  color: orangered;
`;

export const WrapperCommentUser = styled.div`
  padding: 20px;
  background-color: antiquewhite;
  max-height: 200px;
  overflow-y: scroll;
`;
export const ContainerCommentUser = styled.div`
  padding: 20px;
  box-shadow: 1px 0 1px black;
`;

export const InfoComment = styled.div`
  display: flex;
`;

export const AvatarComment = styled.div`
  height: 30px;
  width: 30px;
  object-fit: cover;
  border-radius: 50%;
`;

export const ContentComment = styled.div`
  font-style: italic;
  font-weight: bold;
  text-align: center;
`;
