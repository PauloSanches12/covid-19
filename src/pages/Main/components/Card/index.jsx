import { memo } from "react";
// import PropTypes from "prop-types";
import { Card as CardUI } from "../../../../components";
import { Label, Value, CardContentStyled } from "./styles";

function Card({ value, label, color }) {
    return (
        <CardUI>
            <CardContentStyled color={color}>
                <Value>{value}</Value>
                <Label>{label}</Label>
            </CardContentStyled>
        </CardUI>
    )
}

export default memo(Card);