import { DadataAddress, DadataBank, DadataEmail, DadataFIO, DadataParty } from './data';

export interface DadataSuggestion<
  Data extends DadataAddress | DadataFIO | DadataParty | DadataBank | DadataEmail
> {
  value: string;
  unrestricted_value: string;
  data: Data;
}
