import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  type ViewProps,
  type TextProps,
} from "react-native";
import {
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form";

import { Label } from "@/components/ui/label";

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const { getFieldState, formState } = useFormContext();

  if (!fieldContext) {
    throw new Error("useFormField should be used within a <FormField>");
  }

  const fieldState = getFieldState(fieldContext.name, formState);

  return {
    name: fieldContext.name,
    ...fieldState,
  };
};

const FormItem = React.forwardRef<View, ViewProps>(
  ({ style, ...props }, ref) => {
    return <View ref={ref} style={[styles.formItem, style]} {...props} />;
  }
);
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<Text, TextProps>(
  ({ style, ...props }, ref) => {
    const { error } = useFormField();
    return (
      <Label
        ref={ref}
        style={[style, error && styles.errorLabel]}
        {...props}
      />
    );
  }
);
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<View, ViewProps>(
  ({ ...props }, ref) => {
    return <View ref={ref} {...props} />;
  }
);
FormControl.displayName = "FormControl";

const FormMessage = React.forwardRef<Text, TextProps>(
  ({ style, children, ...props }, ref) => {
    const { error } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
      return null;
    }

    return (
      <Text ref={ref} style={[styles.errorMessage, style]} {...props}>
        {body}
      </Text>
    );
  }
);
FormMessage.displayName = "FormMessage";

const styles = StyleSheet.create({
  formItem: {
    marginBottom: 16,
  },
  errorLabel: {
    color: "red",
  },
  errorMessage: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
});

const Form = FormProvider;

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
};
