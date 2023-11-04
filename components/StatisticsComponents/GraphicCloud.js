// TagCloudComponent.js
import React from 'react';
import styled from 'styled-components/native';
import { TagCloud } from 'react-tagcloud/rn';

const ChartContent = styled.View`
  flex: 1;
  border-radius: 7px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const GraphicCloud = ({ data, options }) => (
    <ChartContent>
        <TagCloud
            minSize={12}
            maxSize={35}
            tags={data}
            colorOptions={options}
            style={{ width: "90%" }}
        />
    </ChartContent>
);

export default GraphicCloud;
