import styled from "styled-components";
import { Search } from "@styled-icons/evil/Search";
import { Heart } from "@styled-icons/boxicons-regular/Heart";

export const Container = styled.div`
  width: 1200px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 140px;
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  flex: 1;
  flex-direction: row;
  gap: 1rem;
  max-width: 1200px;
`;

export const CardRecents = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 99;
  overflow: auto;
  padding: 20px 0;
`;

export const SearchIcon = styled(Search)`
  fill: black;
  margin: 0 20px;
  width: 25px;
  height: 25px;
`;

export const CardFavorites = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 99;
  overflow: auto;
  padding: 20px 0;
`;

export const IconLike = styled(Heart)`
  fill: black;
  margin: 0 23px;
  width: 20px;
  height: 20px;
`;
