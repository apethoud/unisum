import { ReactNode } from "react";
import { Text as RNText } from "react-native";

export default function Text({
  children,
  bold,
  italic,
  large,
  centered,
}: {
  children: ReactNode,
  bold?: boolean,
  italic?: boolean,
  large?: boolean,
  centered?: boolean,
}) {
  return (
    <RNText
      className={`
        ${large ? "text-4xl" : "text-base"}
        ${centered ? "text-center" : "text-left"}
      `}
      style={{ fontFamily: bold ? "SourceCodeProBold" : italic ? "SourceCodeProItalic" : "SourceCodeProRegular" }}>
      {children}
    </RNText>
  )
}