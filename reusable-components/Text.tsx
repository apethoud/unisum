import { ReactNode } from "react";
import { Text as RNText } from "react-native";

export default function Text({
  children,
  large,
  centered,
}: {
  children: ReactNode,
  large?: boolean,
  centered?: boolean,
}) {
  return (
    <RNText
      className={`
        ${large ? "text-4xl" : "text-base"}
        ${centered ? "text-center" : "text-left"}
      `}
      style={{ fontFamily: "SourceCodeProRegular" }}>
      {children}
    </RNText>
  )
}