import React from 'react';
import * as C from '../index'

import * as S from './styles';

function Modal({ show, onClickClose, img, name, loading }) {
  return (
    <>
      < S.Container show={show} >
        <S.Wrapper>
          {loading ? <C.LoadingItems />
            :
            <>
              <S.Image src={img} alt={name} />
              <S.CloseButton onClick={onClickClose} />
            </>
          }
        </S.Wrapper>
      </S.Container >
    </>
  )
}

export default Modal;