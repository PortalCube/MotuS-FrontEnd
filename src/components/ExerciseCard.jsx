import styled from "styled-components";
import PropTypes from "prop-types";
import Thumbnail from "./Thumbnail.jsx";
import Tag from "./Tag.jsx";

const CourseCardContainer = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
  background-color: #ffffff00;
  outline: 8px solid #ffffff00;
  transition:
    outline 0.2s,
    background-color 0.2s;

  &:hover {
    outline: 24px solid #ffffff1f;
    background-color: #ffffff1f;
  }
`;

const CourseTitle = styled.p`
  font-size: 20px;
  color: #f2f2f2;
  font-family: "SUIT Variable", sans-serif;
  font-weight: 500;
`;

const ExerciseCard = ({ image, title, tags, onClick }) => {
  return (
    <CourseCardContainer onClick={onClick}>
      <Thumbnail src={image} time="00:00" />
      <CourseTitle>{title}</CourseTitle>
      <Tag list={tags} />
    </CourseCardContainer>
  );
};

ExerciseCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
};

export default ExerciseCard;