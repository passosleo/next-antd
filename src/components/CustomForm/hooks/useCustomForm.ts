import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormProps, useForm } from "react-hook-form";
import { z } from "zod";

type Props = {
  useFormProps?: Omit<UseFormProps, "resolver">;
  onSubmit: (data: any) => void;
  zodSchema?: z.ZodSchema<any>;
};

export function useCustomForm({ useFormProps, zodSchema }: Props) {
  const methods = useForm<z.infer<typeof zodSchema | any>>({
    reValidateMode: "onChange",
    ...useFormProps,
    resolver: zodResolver(zodSchema || z.object({})),
  });

  return { methods };
}
