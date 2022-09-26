import type { FC } from 'react';
import Link from 'next/link';
import { FaCloudUploadAlt } from 'react-icons/fa';
import styled from 'styled-components';

import { mixins } from '../../../styles';
import type { CustomDataAttrGtmClick } from '../../../types';
import slash from '../images/slash.png';

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
const slashSrc = slash.src;

const StyledSpan = styled.span`
  background: #eb7c06 url(${slashSrc}) repeat 0 0/16px auto;
  ${mixins.buttonBase};
`;

const Text = styled.div`
  ${mixins.buttonText};
`;

const faCloudUploadAltStyle = {
  fontStyle: 'normal',
  fontWeight: 900,
  fontSize: '26px',
  lineHeight: '26px',
  color: '#f2ebdf',
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
    <StyledSpan data-gtm-click={customDataAttrGtmClick}>
      <FaCloudUploadAlt
        style={faCloudUploadAltStyle}
        data-gtm-click={customDataAttrGtmClick}
      />
      <Text data-gtm-click={customDataAttrGtmClick}>Upload new Cats</Text>
    </StyledSpan>
  </Link>
);
