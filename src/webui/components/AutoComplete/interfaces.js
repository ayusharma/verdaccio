/**
 * @prettier
 * @flow
 */

import { InputAdornmentProps } from '@material-ui/core/InputAdornment';

export interface IProps {
  suggestions: any[];
  color?: string;
  value?: string;
  placeholder?: string;
  startAdornment?: React.ComponentType<InputAdornmentProps>;
  disableUnderline?: boolean;
  onChange?: (event: SyntheticKeyboardEvent<HTMLInputElement>) => void;
  onSuggestionsFetch?: (event: SyntheticKeyboardEvent<HTMLInputElement>) => void;
  onCleanSuggestions?: () => void;
}

export interface IInputField {
  color: string;
}
