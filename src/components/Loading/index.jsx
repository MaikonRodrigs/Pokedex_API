import React from 'react';

import * as S from './styles';

export function Loading() {
  return (
    <S.Container>
      <S.Spinner width="180px" />
    </S.Container>
  );
}

export function Spinner({ width }) {
  return (
    <S.Wrapper>
      <S.Spinner width={width} />
    </S.Wrapper>
  )
}

export function LoadingItems() {
  return (
    <S.LoadingWrapper>
      <S.Dot delay="0.1s" />
      <S.Dot delay="0.2s" />
      <S.Dot delay="0.3s" />
    </S.LoadingWrapper>
  )
}

export function FavoriteAdd() {
  return (
    <S.LoadingWrapper>
      <S.FavoriteAdd />
    </S.LoadingWrapper>
  )
} 