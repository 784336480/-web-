const dateFormat=function(datetime,pattern=""){
    let vWeek = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
    let dt=new Date(datetime);
    let y=dt.getFullYear();
    let m=(dt.getMonth()+1).toString().padStart(2,'0');
    let d=dt.getDate().toString().padStart(2,'0');
    let hh=dt.getHours().toString().padStart(2,'0');
    let mm=dt.getMinutes().toString().padStart(2,'0');
    let ss=dt.getSeconds().toString().padStart(2,'0');
    let vWeek_s = dt.getDay();//星期
    if(pattern.toLowerCase() === 'yyyy-mm-dd'){
        return `${y}-${m}-${d}`
    }else if(pattern.toLowerCase() === 'mm-dd'){
        return `${m}-${d}`
    }else {
        return `${y}-${m}-${d} ${hh}:${mm}:${ss} ${vWeek[vWeek_s]}`
    }

}

export default {
    dateFormat
}