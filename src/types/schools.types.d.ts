export interface IOfferState {
  warmTransfers: IWarmTransferOffers[];
  directOffers: IDirectOffers[];
  externalOffers: IExternalOffers[];
}

interface IProgram {
  OptionLabel: string;
  QuestionValue: string;
  questions: IQuestions[];
  program: string;
  result_identifier: string;
  result_set_identifier: string;
}

export interface IDirectOffers extends ISchoolResponse {
  result_type: 'lead';
  programs: IProgram[];
  selected_program: IProgram | null;
  selected: boolean;
  required: boolean;
}
export interface IWarmTransferOffers extends ISchoolResponse {
  result_type: 'transfer';
  programs: IProgram[];
  selected_program: IProgram | null;
  selected: boolean;
  required: boolean;
}
export interface IExternalOffers extends ISchoolResponse {
  result_type: string;
  programs: IProgram[];
  selected_program: IProgram | null;
  selected: boolean;
  required: boolean;
}

export interface ISchoolResponse {
  result_set_identifier: string;
  result_identifier: string;
  distance_miles: number;
  degree_level: string;
  online: boolean;
  result_type: 'lead' | 'transfer';
  location: string;
  school: string;
  state: string;
  brand_name: string;
  logo: string;
  program: string;
  schoolid: string;
  clientid: string;
  consent: string;
  payout: number;
  questions: IQuestions[];
}

export interface IQuestions {
  QuestionLabel: string;
  QuestionFieldName: string;
  QuestionType: string;
  QuestionOptions: IQuestionOptions[];
  QuestionRequired: boolean;
  QuestionDescription: string;
  QuestionValue: string | null;
  IsVisible: boolean;
  QuestionNotes: string;
  Rules: null | unknown[];
  required?: boolean;
  value?: IQuestionOptions;
}

export interface IQuestionOptions {
  OptionLabel: string;
  OptionValue: string;
}
