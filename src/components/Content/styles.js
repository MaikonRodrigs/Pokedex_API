import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-top: 130px;
`;

export const WrapperPokemon = styled.div`

`;

export const NamePokemonLarge = styled.span`
  text-transform: capitalize;
  z-index: 11;
  font-size: 150px;
  font-weight: 600;
  word-break: keep-all;
  word-wrap: normal;
  transform: translateX(-45%);
  opacity: 0.5;
  color: rgba(0, 0, 0, 0.67);
  text-transform: capitalize;

  /* position: absolute; */
  position: absolute;
  left: 373px;
  top: 50px;
`;

export const Image = styled.img`
  z-index: 10;
  width: 540px;
  position: absolute;
  left: 373px;

  @media screen and (max-width: 1200px) {
    width: 540px;
    left: 353px;
    top: 90px;
  }
`;

export const HeightAndWeight = styled.div`
  position: absolute;
  top: 389px;
  left: 146px;
  p {
    font-size: 20px;
    color: #fff;
    text-shadow: var(--text-shadow);
    margin-top: -20px;
  }
`;

export const WrapperStats = styled.div`
  position: absolute;
  top: 40px;
  right: 30px;

  h1 {
    color: #ffffff;
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 30px;
    text-shadow: var(--text-shadow);
  }
`;

export const Power = styled.img`
  width: 54px;
  height: 54px;
  padding: 10px;
  background: linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
  border-radius: 50%;
  box-shadow: 0 20px 25px -10px rgba(0, 0, 0, 0.15);
  margin: 0 15px 15px 0;
`;

export const WrapperBaseStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

export const TextStats = styled.p`
  display: block;
  background: linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 13px;
  padding-right: 13px;
  margin-top: 0;
  margin-bottom: 14px;
  margin-right: 10px;
  color: rgba(0, 0, 0, 0.65);
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  letter-spacing: 1px;
  border-radius: 8px;
  display: inline-block;
  font-size: 12px;
  text-transform: uppercase;
  box-shadow: 0 20px 25px -10px rgba(0, 0, 0, 0.15);
`;
