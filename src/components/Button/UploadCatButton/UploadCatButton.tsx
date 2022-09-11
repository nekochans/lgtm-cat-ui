import Link from 'next/link';
import { FaCloudUploadAlt } from 'react-icons/fa';
import styled from 'styled-components';

import { mixins } from '../../../styles/mixins';
import slash from '../images/slash.png';

import type { CustomDataAttrGtmClick } from '../../../types/gtm';
import type { FC } from 'react';

const StyledSpan = styled.span`
  background: #eb7c06 url(${slash.src}) repeat 0 0/16px auto;
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
