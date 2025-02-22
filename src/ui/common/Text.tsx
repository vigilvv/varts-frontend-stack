// All the text in the application

import { ReactNode } from "react";
import styled from "styled-components";

import { Colors } from "@/styles/GlobalStyles";

export const Text = ({
  $fontWeight = 400,
  $fontColor = "white",
  $fontSizeInPx = 12,
  $opacity = 1,
  children,
  ...props
}: {
  $fontWeight?: 400 | 500 | 600;
  $fontColor?: Partial<Colors>;
  $fontSizeInPx?: number;
  $opacity?: number;
  children: ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <TextSC
      $fontWeight={$fontWeight}
      $fontColor={$fontColor}
      $fontSizeInPx={$fontSizeInPx}
      $opacity={$opacity}
      {...props}
    >
      {children}
    </TextSC>
  );
};

interface TextProps {
  $fontWeight: 400 | 500 | 600;
  $fontColor: Partial<Colors>;
  $fontSizeInPx: number;
  $opacity?: number;
}

export const TextSC = styled.p<TextProps>`
  color: ${(props) => `var(--${props.$fontColor})`};
  text-align: center;
  font-family: Poppins, Roboto, sans-serif;
  font-size: ${(props) => `${props.$fontSizeInPx / 16}rem`};
  font-style: normal;
  font-weight: ${(props) => props.$fontWeight};
  line-height: normal;
  opacity: ${(props) => props.$opacity ?? 1};
`;
