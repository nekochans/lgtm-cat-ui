import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex: none;
  flex-direction: column;
  flex-grow: 0;
  gap: 61px;
  align-items: center;
  order: 0;
  padding: 0;
`;

export const Form = styled.form`
  @media (max-width: 767px) {
    width: 380px;
  }
  flex: none;
  flex-grow: 0;
  order: 1;
  width: 500px;
`;

export const InputFileArea = styled.div`
  box-sizing: border-box;
  display: grid;
  height: 220px;
  background: #fff;
  border: 1px dashed #362e2b;
`;

export const Text = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  color: #8e7e78;
  text-align: center;
`;

export const InputFile = styled.input`
  display: none;
`;

export const InputFileLabel = styled.label`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 43px;
  padding: 12px 20px;
  margin: auto;
  cursor: pointer;
  background: #faf9f7;
  border: 1px solid #8e7e78;
  border-radius: 4px;
`;

export const InputFileLabelText = styled.div`
  flex: none;
  flex-grow: 0;
  order: 0;
  width: 160px;
  height: 19px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  color: #f0a14e;
`;

export const MaxUploadSizeText = styled.div`
  height: 28px;
  font-family: Roboto, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: #8e7e78;
  text-align: right;
`;

export const CautionTextArea = styled.div`
  height: 28px;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: #362e2b;
  text-align: center;
`;

export const Notes = styled.div`
  top: 609px;
  height: 96px;
  font-family: Roboto, sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #362e2b;
`;

export const DescriptionAreaWrapper = styled.div`
  display: grid;
  gap: 24px;
`;

export const PrivacyPolicyArea = styled.div`
  height: 42px;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  color: #362e2b;
  text-align: center;
`;

export const PrivacyLinkText = styled.a`
  height: 42px;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  color: #eb7c06;
  text-align: center;
  text-decoration-line: underline;
  cursor: pointer;
`;

export const UploadButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
