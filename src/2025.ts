/**
 * 2025年元旦、春节、清明节、劳动节、端午节、中秋节和国庆节放假调休日期
 * https://www.gov.cn/zhengce/zhengceku/202411/content_6986383.htm
 */
const holidaysOf2025 = [
  '2025-01-01', // 元旦（1天）
  '2025-01-28', // 春节（8天）
  '2025-01-29',
  '2025-01-30',
  '2025-01-31',
  '2025-02-01',
  '2025-02-02',
  '2025-02-03',
  '2025-02-04',
  '2025-04-04', // 清明节（3天）
  '2025-04-05',
  '2025-04-06',
  '2025-05-01', // 劳动节（5天）
  '2025-05-02',
  '2025-05-03',
  '2025-05-04',
  '2025-05-05',
  '2025-05-31', // 端午节（3天）
  '2025-06-01',
  '2025-06-02',
  '2025-10-01', // 国庆节, 中秋节（8天）
  '2025-10-02',
  '2025-10-03',
  '2025-10-04',
  '2025-10-05',
  '2025-10-06',
  '2025-10-07',
  '2025-10-08',
];

/**
 * 2025年，休息日上班日期
 */
const workdaysOf2025 = [
  '2025-01-26', // 星期日 春节前
  '2025-02-08', // 星期六 春节后
  '2025-04-27', // 星期日 五一前
  '2025-09-28', // 星期日 国庆中秋前
  '2025-10-11', // 星期六 国庆后
];

export { holidaysOf2025, workdaysOf2025 };