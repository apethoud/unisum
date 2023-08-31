import { ReactNode } from "react";
import { Text as RNText } from "react-native";

export default function Text({
  children,
  bold,
  italic,
  enormous,
  huge,
  large,
  small,
  centered,
}: {
  children: ReactNode,
  bold?: boolean,
  italic?: boolean,
  enormous?: boolean,
  huge?: boolean,
  large?: boolean,
  small?: boolean,
  centered?: boolean,
}) {
  return (
    <RNText
      className={`
        ${enormous ? "text-5xl"
          : huge ? "text-4xl"
          : large ? "text-2xl"
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