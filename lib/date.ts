import { DateTime, DateTimeFormatOptions } from 'luxon';

export function formatDate(dateStr: string, format: string): string {
  const dateTime = DateTime.fromISO(dateStr).setZone('Asia/Tokyo');
  const dateTimeFormat = DateTime[format as keyof typeof DateTime] as DateTimeFormatOptions;
  return dateTime.toLocaleString(dateTimeFormat);
}

// import { DateTime } from 'luxon'

// export const formatDate = (dateStr: string, format = 'DATE_FULL') => {
//   return DateTime.fromISO(dateStr)
//     .setZone('Asia/Tokyo')
//     .toLocaleString(DateTime[format as keyof typeof DateTime]); // 修正箇所
// }
