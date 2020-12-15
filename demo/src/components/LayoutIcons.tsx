import * as React from 'react';
import styled, { css } from 'styled-components';

const fullDivCss = css`
  width: 100%;
  height: 100%;
  outline: none;
  overflow: hidden;
`;

const Root = styled.div`
  ${fullDivCss}
  width: 85px;
  height: 50px;
  border: 2px solid darkgray;
  margin: 5px;
  user-select: none;
`;

const Pane = styled.div`
  ${fullDivCss}
  background: lightgray;
`;

const VSplit = styled.div`
  ${fullDivCss}
  background: darkgray;
  width: 2px;
`;

const HSplit = styled.div`
  ${fullDivCss}
  background: darkgray;
  height: 2px;
`;

const LeftRightLayout = styled.div.attrs(
  ({ leftWidth, rightWidth }: { leftWidth: string; rightWidth: string }): any => ({
    style: {
      gridTemplateColumns: `${leftWidth} auto ${rightWidth}`,
    },
  })
)`
  ${fullDivCss}
  display: grid;
  grid-template-rows: 1fr;
`;

const TopBottomLayout = styled.div.attrs(
  ({ topHeight, bottomHeight }: { topHeight: string; bottomHeight: string }): any => ({
    style: {
      gridTemplateRows: `${topHeight} auto ${bottomHeight}`,
    },
  })
)`
  ${fullDivCss}
  display: grid;
  grid-template-columns: 1fr;
`;

export const LeftRight5050LayoutIcon = () => {
  return (
    <Root>
      <LeftRightLayout leftWidth="50%" rightWidth="50%">
        <Pane />
        <VSplit />
        <Pane />
      </LeftRightLayout>
    </Root>
  );
};

export const TopBottom5050LayoutIcon = () => {
  return (
    <Root>
      <TopBottomLayout topHeight="50%" bottomHeight="50%">
        <Pane />
        <HSplit />
        <Pane />
      </TopBottomLayout>
    </Root>
  );
};

export const QuadLayoutIcon = () => {
  return (
    <Root>
      <LeftRightLayout leftWidth="50%" rightWidth="50%">
        <Pane>
          <TopBottomLayout topHeight="50%" bottomHeight="50%">
            <Pane />
            <HSplit />
            <Pane />
          </TopBottomLayout>
        </Pane>
        <VSplit />
        <Pane>
          <TopBottomLayout topHeight="50%" bottomHeight="50%">
            <Pane />
            <HSplit />
            <Pane />
          </TopBottomLayout>
        </Pane>
      </LeftRightLayout>
    </Root>
  );
};

export const EditorLayoutIcon = () => {
  return (
    <Root>
      <LeftRightLayout leftWidth="10%" rightWidth="90%">
        <Pane />
        <VSplit />
        <LeftRightLayout leftWidth="30%" rightWidth="70%">
          <Pane />
          <VSplit />
          <TopBottomLayout topHeight="70%" bottomHeight="30%">
            <Pane />
            <HSplit />
            <Pane />
          </TopBottomLayout>
        </LeftRightLayout>
      </LeftRightLayout>
    </Root>
  );
};