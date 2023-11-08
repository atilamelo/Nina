import styled from 'styled-components/native'

export const ScreenContainer = styled.View`
    flex: 1;
    width: ${ props  => props.windowWidth}px;
    padding-right: 25px;
    padding-left: 25px;
`
