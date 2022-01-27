import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Upper = styled.div`
  display: flex;
  leftWeight = 1,
  rightWeight = 1
`;

const Pane = styled.div`
  flex: ${(props) => props.weight};
`;

const Lower = styled.div``;

export const ThreeWaySplit = ({
  children,
  leftWeight = 1,
  rightWeight = 1,
}) => {
  const [left, right, bottom] = children;
  return (
    <Container>
      <Upper>
        <Pane weight={leftWeight}>{left}</Pane>
        <Pane weight={rightWeight}>{right}</Pane>
      </Upper>
      <Lower>
        <Pane>{bottom}</Pane>
      </Lower>
    </Container>
  );
};
