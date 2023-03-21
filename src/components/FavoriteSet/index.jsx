import React from 'react';
import * as C from '../index'

function FavoriteSet({ favorite }) {
  return (
    <>
      {favorite ?
        <C.FavoriteAdd />
        :
        <C.LoadingItems />}
    </>
  )
}

export default FavoriteSet;


