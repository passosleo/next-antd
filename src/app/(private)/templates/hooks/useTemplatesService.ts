import { useCustomMutate } from "@/services/hooks/useCustomMutate";
import { useCustomQuery } from "@/services/hooks/useCustomQuery";
import { Template } from "../types";

export function useTemplateService() {
  const {
    data: templatesResponse,
    isLoading: isLoadingTemplates,
    isFetching: isFetchingTemplates,
  } = useCustomQuery<Template[]>({
    queriesKeys: ["getTemplates"],
    routeName: "getTemplates",
  });

  return {
    templates: templatesResponse?.data || [],
    isLoading: isLoadingTemplates || isFetchingTemplates,
  };
}
