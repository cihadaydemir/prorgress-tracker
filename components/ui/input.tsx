import * as React from "react";
import { TextInput, StyleSheet, type TextInputProps } from "react-native";

const Input = React.forwardRef<TextInput, TextInputProps>(({ style, ...props }, ref) => {
  return <TextInput style={[styles.input, style]} ref={ref} {...props} />;
});

Input.displayName = "Input";

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});

export { Input };
