import React from 'react';
import * as C from '../index'

import * as S from './styles';

function Modal(
  { show, onClickClose, img, name, loading, onClickAddFavorite }
) {
  return (
    <>
      <S.Container show={show} >
          <S.IconLike onClick={onClickAddFavorite} />
        <S.Wrapper>
          {loading ? <C.LoadingItems />
            :
            <>
              <S.Image src={img} alt={name} />
              {/* <p>{name}</p> */}
              <S.CloseButton onClick={onClickClose} />
            </>
          }
        </S.Wrapper>
      </S.Container >
    </>
  )
}

export default Modal;