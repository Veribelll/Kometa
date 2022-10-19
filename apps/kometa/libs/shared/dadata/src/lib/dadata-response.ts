import { DadataAddress, DadataBank, DadataEmail, DadataFIO, DadataParty } from './data';
import { DadataSuggestion } from './suggestion';

export interface DadataResponse<
  Data extends DadataAddress | DadataFIO | DadataParty | DadataBank | DadataEmail
> {
  suggestions: DadataSuggestion<Data>[];
}
