import { ReactNode } from "react";
import { Text as RNText } from "react-native";

export default function Text({
  children,
  bold,
  italic,
  small,
  large,
  huge,
  centered,
}: {
  children: ReactNode,
  bold?: boolean,
  italic?: boolean,
  small?: boolean,
  large?: boolean,
  huge?: boolean,
  centered?: boolean,
}) {
  return (
    <RNText
      className={`
        ${huge ? "text-5xl"
          : large ? "text-4xl"
          : small ? "text-base"
          : "text-lg"
}
        ${centered ? "text-center" : "text-left"}
      `}
      style={{ fontFamily: bold ? "SourceCodeProBold" : italic ? "SourceCodeProItalic" : "SourceCodeProRegular" }}>
      {children}
    </RNText>
  )
}