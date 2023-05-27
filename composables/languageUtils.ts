import { Feature } from "./grpc_gen/common-messages";
import { Errors } from "./errors";
import { Successes } from "./successes";

export enum Languages {
  IT = "it",
  EN = "en",
}

export function featureToi18nString(featureStr: number): string {
  return Feature[featureStr].replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
}

export function errorToi18nString(error: Errors, isTitle = true) {
  const i18nstring =
    error?.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase() || "unknown_error";
  return isTitle ? `${i18nstring}_title` : `${i18nstring}_body`;
}
export function successToi18nString(success: Successes) {
  return success.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
}
