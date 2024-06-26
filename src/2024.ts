/**
 * 2024年元旦、春节、清明节、劳动节、端午节、中秋节和国庆节放假调休日期
 */
const holidaysOf2024 = [
  '2024-01-01', // 元旦（1天）
  '2024-01-02',
  '2024-02-10', // 春节（8天）
  '2024-02-11',
  '2024-02-12',
  '2024-02-13',
  '2024-02-14',
  '2024-02-15',
  '2024-02-16',
  '2024-02-17',
  '2024-04-04', // 清明节（3天）
  '2024-04-05',
  '2024-04-06',
  '2024-05-01', // 劳动节（5天）
  '2024-05-02',
  '2024-05-03',
  '2024-05-04',
  '2024-05-05',
  '2024-06-08', // 端午节（3天）
  '2024-06-09',
  '2024-06-10',
  '2024-09-15', // 中秋节（3天）
  '2024-09-16',
  '2024-09-17',
  '2024-10-01', // 国庆节（7天）
  '2024-10-02',
  '2024-10-03',
  '2024-10-04',
  '2024-10-05',
  '2024-10-06',
  '2024-10-07',
];

/**
 * 2024年，休息日上班日期
 */
const workdaysOf2024 = [
  '2024-02-04', // 星期日 春节前
  '2024-02-18', // 星期日 春节后
  '2024-04-07', // 星期日 清明后
  '2024-04-28', // 星期日 五一前
  '2024-05-11', // 星期六 五一后
  '2024-09-14', // 星期六 中秋前
  '2024-09-29', // 星期日 国庆前
  '2024-10-12', // 星期日 国庆后
];

export { holidaysOf2024, workdaysOf2024 };
