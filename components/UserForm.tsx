import { Control } from "react-hook-form";
import { SetupSchema } from "@/app/(app)/setup";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function UserForm({ control }: { control: Control<SetupSchema> }) {
  return (
    <>
      <FormField
        control={control}
        name="name"
        render={({ field: { onChange, onBlur, value } }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input
                placeholder="John Doe"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="age"
        render={({ field: { onChange, onBlur, value } }) => (
          <FormItem>
            <FormLabel>Age</FormLabel>
            <FormControl>
              <Input
                keyboardType="numeric"
                onBlur={onBlur}
                onChangeText={(text) => onChange(parseInt(text, 10) || 0)}
                value={value?.toString()}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="height"
        render={({ field: { onChange, onBlur, value } }) => (
          <FormItem>
            <FormLabel>Height (cm)</FormLabel>
            <FormControl>
              <Input
                keyboardType="numeric"
                onBlur={onBlur}
                onChangeText={(text) => onChange(parseInt(text, 10) || 0)}
                value={value?.toString()}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
