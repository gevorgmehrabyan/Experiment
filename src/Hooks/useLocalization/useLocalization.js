import React, { useState, useEffect } from 'react';
import {ARM } from '../../data/LangData/ARM';
import {EN } from '../../data/LangData/EN';
import {RU } from '../../data/LangData/RU';


export const useLocalization = (props) => {
  let localization = EN;

  switch(props){
    case 'RU': 
    localization = RU;
    break;
    case 'ARM':
      localization= ARM;
      break;
    default:
      localization = EN
  }

  useEffect( () => {console.log('must call data  from ...')} , [])

  return{
    translate: key => localization[key],
  }
}