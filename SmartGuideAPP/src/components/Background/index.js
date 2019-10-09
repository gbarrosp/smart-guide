import React from 'react';

import {ImageBackground} from './styles';
import bgImage from '~/assets/background.jpg';

export default function Background({children}) {
  return <ImageBackground source={bgImage}>{children}</ImageBackground>;
}
