import React from 'react'
import { useRecoilValue } from 'recoil'
import { charCountState } from '../Selectors';

export default function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return (
    <>CharacterCount : {count}</>
  )
}
