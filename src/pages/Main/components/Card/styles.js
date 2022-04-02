import styled from 'styled-components';
import { Typography, CardContent } from '../../../../components';

export const Label = styled(Typography)`
    font-weight: 500;
    font-size: 1.5rem;
`

export const Value = styled(Typography)`
    font-weight: 400;
    font-size: 2.5rem;
`

export const CardPanelContent = styled(CardContent)`
    display: flex;
    justify-content: space-between;
    padding: 25px;
`

export const CardContentStyled = styled(CardContent)`
    border-left: 8px solid ${({ color }) => color || '#5d78ff'};
`

export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 150px;
`