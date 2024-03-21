import { assert } from 'chai';
import { isHoliday, isWorkday } from '../src';

describe('Holidays in 2024', () => {
    it('2024-03-21 is a workday', () => {
        assert.isTrue(isWorkday('2024-03-21'));
    });

    it('2024-04-04 is a holiday', () => {
        assert.isTrue(isHoliday('2024-04-04'));
    });

    it('2024-04-07 is a workday', () => {
        assert.isTrue(isWorkday('2024-04-07'));
    });
});

describe('Holidays in 2023', () => {
  it('2023-04-05 is a holiday', () => {
    assert.isTrue(isHoliday('2023-04-05'));
  });

  it('2023-05-06 is a workday', () => {
    assert.isTrue(isWorkday('2023-05-06'));
  });

  it('2023-06-25 is a workday', () => {
    assert.isTrue(isWorkday('2023-06-25'));
  });
});

describe('Holidays in 2022', () => {
  it('2022-09-10 is a holiday', () => {
    assert.isTrue(isHoliday('2022-09-10'));
  });

  it('2022-04-02 is a workday', () => {
    assert.isTrue(isWorkday('2022-04-02'));
  });
});

describe('Holidays in 2021', () => {
  it('2021-06-13 is a holiday', () => {
    assert.isTrue(isHoliday('2021-06-13'));
  });

  it('2021-09-18 is a workday', () => {
    assert.isTrue(isWorkday('2021-09-18'));
  });
});
