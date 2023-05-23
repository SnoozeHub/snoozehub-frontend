import { Feature } from "./grpc_gen/common-messages";
import { Errors } from "./errors";
import { Successes } from "./successes";

export enum Languages {
  IT = "it",
  EN = "en",
}

export function featureToi18nString(featureStr: number): string {
  const featuresMap: Record<Feature, string> = {
    [Feature.internetConnection]: "internet_connection",
    [Feature.bathroom]: "bathroom",
    [Feature.heating]: "heating",
    [Feature.airConditioner]: "air_conditioner",
    [Feature.electricalOutlet]: "electrical_outlet",
    [Feature.tap]: "tap",
    [Feature.bedLinens]: "bed_linens",
    [Feature.pillows]: "pillows",
  };
  const feature = featureStr as unknown as Feature; // Convert to Feature enum type
  return featuresMap[feature];
}

export function errorToi18nString(error: Errors, isTitle = true) {
  const errorToMessageMap: Record<Errors, string> = {
    [Errors.GrpcError]: "connection_error",
    [Errors.NoBedsFound]: "bed_query_error",
    [Errors.EthereumRequestError]: "eth_error",
    [Errors.Web3CapableBrowserError]: "web3_browser_error",
    [Errors.RegistrationError]: "registration_error",
    [Errors.Unknown]: "unknown_error",
    [Errors.EmailConfirmationError]: "email_confirmation_error",
    [Errors.AccountDeletingError]: "account_deleting_error",
    [Errors.AddBedError]: "add_bed_error",
    [Errors.BedDeletingError]: "bed_deleting_error",
  };
  return isTitle
    ? `${errorToMessageMap[error]}_title`
    : `${errorToMessageMap[error]}_body`;
}
export function successToi18nString(success: Successes) {
  const successToMessageMap: Record<Successes, string> = {
    [Successes.EmailConfirmationSuccess]: "email_confirmation_success",
    [Successes.AccountDeletingSuccess]: "account_deleting_success",
    [Successes.RegistrationSuccess]: "registration_success",
    [Successes.Unknown]: "unknown_success",
    [Successes.AddBedSuccess]: "add_bed_success",
    [Successes.BedDeletingSuccess]: "bed_deleting_success",
  };
  return `${successToMessageMap[success]}`;
}
