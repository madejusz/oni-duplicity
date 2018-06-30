import styled from "styled-components";

import { getTheme } from "@/theme";

const ContentContainer = styled.div`
  padding: ${props => getTheme(props).space[1]}px;
  box-sizing: border-box;
  height: 100%;
  overflow: auto;
  flex: 1 1 auto;
`;
export default ContentContainer;
