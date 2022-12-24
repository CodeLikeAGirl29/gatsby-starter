import React from "react";
import PropTypes from "prop-types";
import { SingleHistoryItem, Title, DecText } from "./style";
const HistoryItem = ({ title, decText }) => {
    return (
        <SingleHistoryItem>
            <Title>{title}</Title>
            <DecText>{decText}</DecText>
        </SingleHistoryItem>
    );
};
HistoryItem.propTypes = {
    title: PropTypes.string,
    decText: PropTypes.string,
};
export default HistoryItem;
