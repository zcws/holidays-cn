# cn-holidays

Check if a day is a China public holiday or a workday.

[![npm version](https://img.shields.io/npm/v/holidays-cn.svg)](https://www.npmjs.com/package/holidays-cn)

English | [简体中文](./README-zh-hans.md)

## Installation

```sh
npm install cn-holidays
```

## Usage

```js
import { isHoliday, isWorkday } from 'cn-holidays';

isHoliday('2020-02-01'); // true

isWorkday('2020-03-16'); // true
```
