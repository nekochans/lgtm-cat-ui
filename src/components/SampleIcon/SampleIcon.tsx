import React from 'react';
import { FcAndroidOs, FcLinux } from 'react-icons/fc';

import assertNever from '../../utils/assertNever';

export type Props = {
  size: 'small' | 'medium' | 'large';
};

export const SampleIcon: React.FC<Props> = ({ size }) => {
  let iconSize = '';

  switch (size) {
    case 'small':
      iconSize = '64px';
      break;
    case 'medium':
      iconSize = '128px';
      break;
    case 'large':
      iconSize = '256px';
      break;
    default:
      assertNever(size);
  }

  return (
    <>
      <FcAndroidOs size={iconSize} />
      <FcLinux size={iconSize} />
    </>
  );
};
