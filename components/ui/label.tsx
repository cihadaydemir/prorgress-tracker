import * as React from "react";
import { Text, StyleSheet, type TextProps } from "react-native";

const Label = React.forwardRef<Text, TextProps>(({ style, ...props }, ref) => {
  return <Text style={[styles.label, style]} ref={ref} {...props} />;
});

Label.displayName = "Label";

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
});

export { Label };
