import CoverImage from "./CoverImage";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledIcon = styled(FontAwesomeIcon)`
  color: green;
  font-size: 10vw;
`;

const StyledText = styled.h1`
  font-family: 'Nanum';
`;

const ImageContainer = styled.div`
  display: flex;
  justify-items: flex-end;
  padding-right: calc(16.66667vw + 15px);
`;

export default function IntroPage() {
  return (
    <>
      <section className="flex-col md:flex-row flex items-center md:justify-start mt-16 mb-16 md:mb-12">
        {/* <StyledIcon icon={["fas", "balance-scale"]} fixedWidth size="5x"/> */}
        <StyledText className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          스마트하게
        </StyledText>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          할인하다
        </h4>
      </section>
    </>
  );
}

/*
<div>마음 놓고 할인하는 세상을 만들고 있습니다</div>
      <div>
        <div>image</div>
        <div>드루와의 스마트 할인을 통해 가게사장님과 소비자 모두 마음놓고 서비스를 이용할 수 있습니다</div>
      </div>
 */
