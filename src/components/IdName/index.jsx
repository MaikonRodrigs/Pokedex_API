import React from 'react';
import * as S from './styles';
import * as C from '../index'


function IdName({ id, name, onSubmit, onClick }) {
  return (
    <>
      <S.WrapperNameId>
        <S.WrapperDescription>
          <S.Id>#0{id}</S.Id>
          <S.Name>{name}</S.Name>
        </S.WrapperDescription>
        <C.SearchId onSubmit={onSubmit} onClick={onClick} />
      </S.WrapperNameId>
    </>
  )
}

export default IdName;