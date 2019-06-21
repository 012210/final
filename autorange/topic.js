var topic=[
    "柴犬跳躍",
    "樹懶快速做體操",
    "綿羊剃毛",
    "刺蝟啦啦隊",
    "柴犬刺蝟相見",
    "綿羊載樹懶"
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
    //一次設定好月份與日期
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(8,10); 