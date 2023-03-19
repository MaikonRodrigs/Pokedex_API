import React from 'react';

import * as S from './styles';

function Modal({ show, onClickClose }) {
  return (
    <S.Container show={show}>
      <S.Wrapper>
        <h1>HELLO, I'm modal!</h1>
        <S.CloseButton onClick={onClickClose} />
      </S.Wrapper>
    </S.Container>
  )
}

export default Modal;