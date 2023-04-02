// date-formatter.ts

import { format } from 'date-fns';

export const dateFnsFormatter = (date: Date, formatDate: string): string => {
  return format(date, formatDate);
}
