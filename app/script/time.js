function mytime() {
    var mtime=new Date();
    document.getElementById("time").innerHTML=mtime.toLocaleTimeString();
}

(function () {
    setInterval(mytime,1000);
})();
/**
 * Created by Cibi on 6/24/2017.
 */
