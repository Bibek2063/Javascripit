// 1️⃣ Creating Dates
const now=new Date();
const d1=new Date("2026-01-08");//from string(ISO is safest )
const d2=new Date(2026,0,8,10,30,0); //year, month(0-based!),day,hour,min,sec
const d3=new Date(1704691200000);//from time stamp (milliseconds since jan 1, 1970)

// 2️⃣ Getting Date Parts
const date=new Date();

date.getFullYear();//2026
date.getMonth(); //0(january )
date.getDate(); //8 (days os month)
date.getDay(); //4(thursday,0=sunday)
date.getHours();//22
date.getMinutes();
date.getSeconds();
date.getMilliseconds();
date.getTime();

// 3️⃣ Setting Date Parts
const d =new Date();
d.setFullYear(2027)
d.setMonth(5);
d.setDate(15);
d.setHours(9);

//4️⃣ Formatting Dates
date.toString();
date.toDateString();
date.toTimeString();
date.toISOString();     // Best for APIs
date.toUTCString();
