export interface ITransfer {
  Advisors: IAdvisors[];
  CustomScript: string;
  TransferPhone: string;
  AdvisorFieldName: null | string;
  AdditionalWarmTransferQuestions: null | string;
}

interface IAdvisors {
  AdvisorName: null | string;
  AdvisorId: null | string;
  AdvisorFirstName: null | string;
  AdvisorLastName: null | string;
  AdvisorDescription: null | string;
  AdvisorEmail: null | string;
}

interface IAdvisorOptions extends IAdvisors {
  OptionLabel: string;
  OptionValue: string;
}
