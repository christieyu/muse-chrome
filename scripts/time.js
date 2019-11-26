// https://stackoverflow.com/questions/5091888/how-to-update-time-regularly

function updateClock() {
    var now = new Date(), // current date
        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        if(now.getMinutes() < 10) {
        	m = '0'+now.getMinutes();
        }
        else m = now.getMinutes();

        if(now.getSeconds() < 10) {
        	s = '0'+now.getSeconds();
        }
        else s = now.getSeconds();

        if(now.getHours() > 12) {
            h = now.getHours() - 12;

            if(h < 10) {
                h = '0'+h;
            }

            time = h + ':' + m + ':' + s + ' PM';
        }

        else if(now.getHours() < 12) {
            if(now.getHours() == 0) {
                h = 12;
            }
            else if(now.getHours() == 11) {
                h = 11;
            }
            else if(now.getHours() < 10) {
                h = '0'+now.getHours();
            }
            time = h + ':' + m + ':' + s + ' AM';
        }

        else if(now.getHours() == 12) {
            h = 12;
            time = h + ':' + m + ':' + s + ' PM';
        }

        date = [months[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear()];

    // set the content of the element with the ID time to the formatted string
    document.getElementById('time').innerHTML = time;
    document.getElementById('date').innerHTML = date;

    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}
updateClock(); // initial call