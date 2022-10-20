import type { FC } from 'react';
import Link from 'next/link';
import { FaCloudUploadAlt } from 'react-icons/fa';
import styled from 'styled-components';

import { mixins } from '../../../styles';
import type { CustomDataAttrGtmClick } from '../../../types';
import slash from '../images/slash.png';

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
const slashSrc = slash.src;

const _Span = styled.span`
  background: ${mixins.colors.primary} url(${slashSrc}) repeat 0 0/16px auto;
  ${mixins.buttonBase};
`;

const _Text = styled.div`
  ${mixins.buttonText};
`;

const faCloudUploadAltStyle = {
  fontStyle: 'normal',
  fontWeight: 900,
  fontSize: '26px',
  lineHeight: '26px',
  color: `${mixins.colors.sub}`,
  flex: 'none',
  order: 0,
  flexGrow: 0,
};

type Props = {
  link: `/${string}`;
  customDataAttrGtmClick?: CustomDataAttrGtmClick;
};

export const UploadCatButton: FC<Props> = ({
  link,
  customDataAttrGtmClick,
}) => (
  <Link href={link} prefetch={false}>
    <_Span data-gtm-click={customDataAttrGtmClick}>
      <FaCloudUploadAlt
        style={faCloudUploadAltStyle}
        data-gtm-click={customDataAttrGtmClick}
      />
      <_Text data-gtm-click={customDataAttrGtmClick}>Upload new Cats</_Text>
    </_Span>
  </Link>
);
