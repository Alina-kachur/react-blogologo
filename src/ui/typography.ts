import { css } from "styled-components";
import { Color } from "./colors";
import { Media } from "./media";

const H1 = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;

  color: ${Color.SECONDARY_TEXT};
  ${Media.XS} {
    font-size: 32px;
    line-height: 48px;
  }
`;
const H2 = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;

  color: ${Color.SECONDARY_TEXT};
  ${Media.XS} {
    font-size: 24px;
    line-height: 36px;
  }
`;
const H3 = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;

  color: ${Color.SECONDARY_TEXT};
`;
const S1 = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: ${Color.MEDIUM_TEXT};
`;
const B1 = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;

  color: ${Color.SECONDARY_TEXT};

  ${Media.XS} {
    font-size: 16px;
    line-height: 24px;
  }
`;
const B2 = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  color: ${Color.SECONDARY_TEXT};
`;
export const Typography = { H1, H2, H3, S1, B1, B2 };
