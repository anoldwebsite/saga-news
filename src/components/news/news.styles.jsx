import styled from 'styled-components';

export const NewsItemContainer = styled.div`
    width: 50%;
    margin: 0 auto;
`;
export const ImageStyle = styled.img`
    height: auto;
    width: 80%;
    border: 3px solid RebeccaPurple;
    borderRadius: 5%
`;
export const ArticleTitle = styled.h1`
    color: olive;
    font-family: "Baloo", cursive;
`;
export const ArticleDescription = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid darkgrey;
`;