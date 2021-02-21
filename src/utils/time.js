
const formatTime = date => {
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()
	const hour = date.getHours()
	const minute = date.getMinutes()
	const second = date.getSeconds()

	return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
	n = n.toString()
	return n[1] ? n : '0' + n
}

/**
 * 返回时分秒
 */
const addZero = (i) => i < 10 ? "0" + i : i + "";
const countDown = (time) => {
	var nowtime = new Date().getTime();
	var endtime = new Date(time).getTime();
	var lefttime = parseInt((endtime - nowtime) / 1000);
	var d = parseInt(lefttime / (24 * 60 * 60))
	var h = parseInt(lefttime / (60 * 60) % 24);
	var m = parseInt(lefttime / 60 % 60);
	var s = parseInt(lefttime % 60);
	d = addZero(d)
	h = addZero(h);
	m = addZero(m);
	s = addZero(s);
	// document.querySelector(".count").innerHTML = `活动倒计时  ${d}天 ${h} 时 ${m} 分 ${s} 秒`;
	if (lefttime <= 0) {
		return d = h = m = s = '00';
	}
	return {days:d,hours:h,minutes:m,seconds:s}
	//setTimeout(countDown, 1000);
}

/**
 * 自动倒计时
 */
const countTime = (time,callBack) => {
	let timer = setInterval(() => {
		var nowtime = new Date().getTime();
		var endtime = new Date(time).getTime();
		if( time && endtime - nowtime > 0){
			var lefttime = parseInt((endtime - nowtime) / 1000);
			var d = parseInt(lefttime / (24 * 60 * 60))
			var h = parseInt(lefttime / (60 * 60) % 24);
			var m = parseInt(lefttime / 60 % 60);
			var s = parseInt(lefttime % 60);
			d = addZero(d)
			h = addZero(h);
			m = addZero(m);
			s = addZero(s);
		    --time;  
		} else {  //倒计时结束
		    clearInterval( timer ); 
			return callBack(d = h = m = s = '00');
		}
		return callBack({days:d,hours:h,minutes:m,seconds:s});
	},1000)
	return callBack(countDown(time))
}
module.exports = {
	formatTime,
	countDown
}
