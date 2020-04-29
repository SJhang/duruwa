import Container from '../common/container';
import cn from "classnames";
import styled from "styled-components";

export default function CoverImage({ title, src }) {
  const ImageContainer = styled.div`
    width: 550px;
    margin: 0 calc(50vw - 50px);
  `;

  const Image = styled.img`
    opacity: 1;
    transition: opacity .4s;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    margin: 0px 0px 0px 0px;
  `;

  return (
    <ImageContainer>
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        className="shadow-small"
      />
    </ImageContainer>
  );
}
