import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  padding: 0;
`;

const ImageRow = styled.div`
  display: flex;
  flex: none;
  flex-direction: row;
  flex-grow: 0;
  gap: 20px;
  align-items: flex-start;
  order: 0;
  padding: 0;
`;

const ImageContents = styled.img`
  flex: none;
  flex-grow: 0;
  order: 0;
`;

export const LgtmImages = () => (
  <Wrapper>
    <ImageRow>
      <ImageContents src="https://lgtm-images.lgtmeow.com/2021/11/16/22/74046d97-439f-4e11-ad18-a756bcea6131.webp" />
      <ImageContents src="https://lgtm-images.lgtmeow.com/2021/11/16/22/76de320a-b44c-4134-83f1-b874c4ff8663.webp" />
      <ImageContents src="https://lgtm-images.lgtmeow.com/2021/11/16/22/8302f89d-0fda-409d-b0db-0cef2283ed8b.webp" />
    </ImageRow>
    <ImageRow>
      <ImageContents src="https://lgtm-images.lgtmeow.com/2021/11/16/22/a95f34d4-edf9-4dab-b502-2db205375f3c.webp" />
      <ImageContents src="https://lgtm-images.lgtmeow.com/2022/01/21/14/b9ed8f20-16a0-47ef-8e3e-e46e872612fc.webp" />
      <ImageContents src="https://lgtm-images.lgtmeow.com/2022/03/05/00/4057d714-168d-4696-90df-dec57c8957bb.webp" />
    </ImageRow>
    <ImageRow>
      <ImageContents src="https://lgtm-images.lgtmeow.com/2022/04/01/23/a367f362-e26a-43e2-ad61-6c0bd6abdeb2.webp" />
      <ImageContents src="https://lgtm-images.lgtmeow.com/2022/04/16/22/d7d04f68-9c08-4345-ae1e-19db45680588.webp" />
      <ImageContents src="https://lgtm-images.lgtmeow.com/2021/03/16/00/62b7b519-9811-4e05-8c39-3c6dbab0a42d.webp" />
    </ImageRow>
  </Wrapper>
);
