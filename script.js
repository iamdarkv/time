var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function updateTime() {
    var now = new Date();
    
    // Lấy giờ, phút, giây
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    // Định dạng giờ, phút, giây thành chuỗi
    var timeString = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    
    // Lấy thứ trong tuần
    var dayOfWeek = daysOfWeek[now.getDay()];
    
    // Lấy ngày, tháng, năm
    var date = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    
    // Định dạng ngày, tháng, năm thành chuỗi
    var dateString = dayOfWeek + ", " + date + "/" + month + "/" + year;
    
    // Ghi giờ và ngày lên trang web
    document.getElementById("time").innerHTML = timeString;
    document.getElementById("date").innerHTML = dateString;
}

function formatTime(time) {
    if (time < 10) {
        return "0" + time;
    } else {
        return time;
    }
}

// Cập nhật thời gian mỗi giây
setInterval(updateTime, 1000);
