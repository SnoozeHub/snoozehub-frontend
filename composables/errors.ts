export enum Errors {
  // General
  EmailConfirmationError = "EmailConfirmationError",
  AccountDeletingError = "AccountDeletingError",
  UnknownError = "unknownError",
  Web3CapableBrowserError = "Web3CapableBrowserError",
  EthereumRequestError = "EthereumRequestError",
  GrpcError = "GrpcError",
  NoBedsFoundError = "NoBedsFoundError",
  RegistrationError = "RegistrationError",
  AddBedError = "AddBedError",
  BedDeletingError = "BedDeletingError",
  BookingAvailabilityAddingError = "BookingAvailabilityAddingError",
  BookingAvailabilityDeletingError = "BookingAvailabilityDeletingError",
}

export const authenticationErrors = [
  "can't get metadata",
  "invalid authtoken metadata",
  "invalid or expired authtoken",
  "account doesn't exist or not verified",
  "account doesn't exist",
];
