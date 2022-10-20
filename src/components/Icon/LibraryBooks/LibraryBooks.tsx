import type { FC } from 'react';
import { MdLibraryBooks } from 'react-icons/md';
import { mixins } from '../../../styles';

const style = {
  width: '69.31px',
  height: '69.31px',
  color: `${mixins.colors.variant}`,
  background: `${mixins.colors.white}`,
};

export const LibraryBooks: FC = () => <MdLibraryBooks style={style} />;
