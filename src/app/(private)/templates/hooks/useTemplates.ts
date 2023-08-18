import { useTemplateService } from "./useTemplatesService";

export function useTemplates() {
  const { templates, isLoading } = useTemplateService();
  return {
    templates,
    isLoading,
  };
}
