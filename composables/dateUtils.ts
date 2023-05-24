import { Date as GrpcDate } from "composables/grpc_gen/common-messages";
import { useI18n } from "vue-i18n";

export function dateToGrpcDate(date: Date): GrpcDate {
  return {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };
}

export function grpcDateToDate(grpcDate: GrpcDate): Date {
  return new Date(grpcDate.year, grpcDate.month - 1, grpcDate.day);
}

export function useMinimumDaysNoticeRules() {
  const { t } = useI18n();

  return [
    (val: any) => val >= 1 || t("minimum_days_notice_error"),
    (val: any) => val <= 30 || t("maximum_days_notice_error"),
  ];
}

export function useTomorrowDate() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow;
}
