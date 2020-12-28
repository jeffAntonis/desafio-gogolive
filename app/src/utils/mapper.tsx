import React from 'react';
import Home from '../pages/Home';
import Camara from '../pages/Camara';
import Comunicar from '../pages/Comunicar';
import ProtecaoCivil from '../pages/ProtecaoCivil';
import Covid from '../pages/Covid';
import Agenda from '../pages/Agenda';

// @constants
const components: any = {
  Home,
  Camara,
  Comunicar,
  ProtecaoCivil,
  Covid,
  Agenda,
};

export const mapComponent = (componentName: string) =>
  components[componentName];
