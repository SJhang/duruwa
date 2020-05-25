import Container from '../common/container';
import cn from "classnames";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 800px;
  margin: 0 calc(50vw - 250px);
`;

const Image = styled.img`
  opacity: 1;
  transition: opacity .4s;
  margin: 0px 0px 0px 0px;
`;

export default function CoverImage({ title, src }) {
  return (
    <ImageContainer className="mt-20">
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        className="shadow-small"
      />
    </ImageContainer>
  );
}
