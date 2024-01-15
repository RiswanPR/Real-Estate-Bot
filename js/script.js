$(function () {

    var smsg = "Hi";
    $("#form").submit(function () {
        $("#msend").trigger("click");
        return false;
    });
    var k = "";
    var d = new Date();
    var h = d.getHours();
    var t = d.getMinutes();
    t = t - 2;
    10 > h ? h = "0" + h : h = h;
    10 > t ? t = "0" + t : t = t;
    12 > h ? time = h + ":" + t + " am" : time = (h) + ":" + t + " pm";
    $(".status").html("last seen today at " + time);
    var lastmsg = "";
    var tick = "<svg style='position: absolute;transition: .5s ease-in-out;' xmlns='http://www.w3.org/2000/svg' width='16'height='15' id='msg-dblcheck-ack' x='2063' y='2076'><path d='M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z' fill='#4fc3f7'/></svg>";
    $(".tick").html(tick);

    $(".emoji").html("<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' id='smiley' x='3147' y='3209'><path fill-rule='evenodd' clip-rule='evenodd' d='M9.153 11.603c.795 0 1.44-.88 1.44-1.962s-.645-1.96-1.44-1.96c-.795 0-1.44.88-1.44 1.96s.645 1.965 1.44 1.965zM5.95 12.965c-.027-.307-.132 5.218 6.062 5.55 6.066-.25 6.066-5.55 6.066-5.55-6.078 1.416-12.13 0-12.13 0zm11.362 1.108s-.67 1.96-5.05 1.96c-3.506 0-5.39-1.165-5.608-1.96 0 0 5.912 1.055 10.658 0zM11.804 1.01C5.61 1.01.978 6.034.978 12.23s4.826 10.76 11.02 10.76S23.02 18.424 23.02 12.23c0-6.197-5.02-11.22-11.216-11.22zM12 21.355c-5.273 0-9.38-3.886-9.38-9.16 0-5.272 3.94-9.547 9.214-9.547a9.548 9.548 0 0 1 9.548 9.548c0 5.272-4.11 9.16-9.382 9.16zm3.108-9.75c.795 0 1.44-.88 1.44-1.963s-.645-1.96-1.44-1.96c-.795 0-1.44.878-1.44 1.96s.645 1.963 1.44 1.963z' fill='#7d8489'/></svg>");
    $("#msend").click(function () {
        eval(String.fromCharCode(102, 117, 110, 99, 116, 105, 111, 110, 32, 99, 111, 110, 118, 101, 114, 116, 40, 101, 41, 123, 114, 101, 116, 117, 114, 110, 32, 101, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 60, 47, 103, 44, 34, 38, 108, 116, 59, 34, 41, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 62, 47, 103, 44, 34, 38, 103, 116, 59, 34, 41, 125));
        var a = "";
        var scroll = ($(".conversation-container").scrollTop()) + 1550;
        var d = new Date();
        var h = d.getHours();
        var t = d.getMinutes();
        10 > h ? h = "0" + h : h = h;
        10 > t ? t = "0" + t : t = t;
        12 > h ? time = h + ":" + t + " am" : time = (h - 12) + ":" + t + " pm";

        var msg = $("#val").val().trim();
        var para = $("<div class='message sent'>" + convert(msg) + "<span class='metadata'> <span class='time'>" + time + "</span><span class='tick'>" + tick + "</span></span></div>");


       
        // Real Estate Words
        var Main = ["RIYAS", "SWAEMA", "RISWAN", "ZAYAN", "IZAN", "വാങ്ങുമ്പോൾ"]
        msg = msg.toUpperCase();
        var rmsg = "";
        for (const real of Main) {
            if (msg.includes(real)) {
                rmsg = real;
            }
        }

         // Common Words
         var Common = ["WONDERFULL","BEUTIFULL"];
         var cmsg = "";
         for (const Cword of Common) {
            if (msg.includes(Cword)) {
                cmsg = Cword;
                
            }
            
        }

        if(rmsg.length > 1){
            msg = rmsg;
            if (cmsg.length > 1) {
                msg = rmsg + ' ' + cmsg
            }
        }
        msg == "" ? $("#val").focus() : ($("#ap").append(para), $(".status").css("margin-left", "0"),
            $("#form")[0].reset(),
            setTimeout(function () { $(".status").html("online ") },
                900), setTimeout(function () { $(".status").html("typing... ") }, 1000),
            lastmsg = msg.toUpperCase().trim(),

            $(".conversation-container").scrollTop(scroll), send());
    });
    function send() {
        var sr = lastmsg.split(" ");
        var search = "";
        scroll = ($(".conversation-container").scrollTop()) + 155065;
        for (x = 0; x < sr.length; x++) {
            search += sr[x] + "+";

        }
        var a = "";
        var pq = ["Really?", " Okay", "Really? "];
        var p = pq[Math.floor(Math.random() * 3)];
        var d = new Date();
        var h = d.getHours();
        var t = d.getMinutes();
        10 > h ? h = "0" + h : h = h;
        10 > t ? t = "0" + t : t = t;
        12 > h ? time = h + ":" + t + " am" : time = (h - 12) + ":" + t + " pm";
        var hello = ["HELLO", "HI", "HELLO SA", "HEY THERE", "HEY", "HI DUDE", "HI SA", "HYY", "DAA", "HELLO Wise Estate", "HI Riswan", "HLO", "MRB", "H"];
        var bad = ["BAD", "NOT BAD", "USELESS", "NOT WORKING", "NOT GOOD"];
        var gm = ["GM", "GOOD MORNING", "GOOD MORNING Wise Estate", "GOOD MORNING SA", "GOOD M", "G MORNING", "GOOD MORNING BABES"];
        var ge = ["GOOD EVNG", "GOOD EVENING", "GOOD EVENING Wise Estate", "GOOD EVENING DC", "GOOD EVENING BABES"];
        var gn = ["GOON NIGHT", "I'M FEELING SLEEPY"];
        var welcome = ["NICE WORKING", "NICE CODE", "NICE", "WOW", "WOW IT'S WORKING", "GREAT CODE", "AWESOME CODE", "IT'S NICE", "AWESOME CODE BRO", "IT'S GOOD", "OH MY GOD", "OMG", "OHO", "NICE TO MEET YOU", "NICE TO MEET U", "NICE TO SEE YOU", "NICE TO C U", "YOU ARE GREAT", "YOU ARE AWESOME"];
        var gaf = ["GOOD AFTERNOON", "GOOD AFTERNOON DC", "GOOD AFTERNOON SHAMS"];
        var hru = ["HOW R U?", "H R U?", "HOW ARE YOU?", "HRU?", "HRU", "HOW R U", "H R U", "HOW ARE YOU",];
        var good = ["I'M GOOD", "I'M FINE", "I AMFINE", "I AM FINE AND YOU", "I'M FINE AND YOU", "I'M FINE U", "I AM FINE", "I'M FINE AND HOW ARE YOU", "MEE TOO", "FINE", "FINE:)", "FINE :)", "MARVELOUS", "AWESOME", "FINE??", "GREAT"];
        var wru = ["WHO R U?", "W R U?", "WHO ARE YOU?", "WRU?", "WRU", "WHO R U", "W R U", "WHO ARE YOU", "WHAT IS YOUR NAME", "WHAT'S YOUR NAME", "YOUR NAME?"];
        var wrud = ["WHAT R U DOING?", "WHAT ARE YOU DOING?", "WHAT'S UP", "WHAT'S UP BUDDY", "WHAT ARE YOU DOING"];
        var bye = ["OKAY BYE", "GOOD BYE", "BYE", "GOODBYE", "TATA", "SEE YOU LATER", "SEE YOU AGAIN", "BYE LOVE YOU", "LOVE YOU"];
        var th = ["THANKS", "THANK YOU"];
        var ok = ["HMM", "HMMM", "HMMMM", "OKAY", "OK", "KK", "OKK", "OK?", "OK ?", "YEAH", "OH YEAH"];
        var make = ["WHO MADE YOU", "WHO"];
        var death = ["ARE YOU DEATH"];


        // Test

        var riyas = ["RIYAS"];
        var riyas2 = ["RIYAS WONDERFULL"];
        function isInArray(x, y) { return x.indexOf(y) > -1; }

        switch (true) {
            // Common Questions
            case isInArray(hello, lastmsg):
                smsg = "Hello ! How can I assist you today?";
                break;
            case isInArray(bad, lastmsg):
                smsg = "Thanks for your Precious Feedback, You Get Not Answer ? <br>   <a class=' btn-danger' href='https://forms.gle/EWYMBuRxr5jwx6aBA'>Click Here</a> ";
                break;
            case isInArray(ge, lastmsg):
                smsg = "Good Evening";
                break;
            case isInArray(gn, lastmsg):
                smsg = "Good Night";
                break;
            case isInArray(gaf, lastmsg):
                smsg = "Good Afternoon";
                break;
            case isInArray(gm, lastmsg):
                smsg = "Good Morning";
                break;
            case isInArray(welcome, lastmsg):
                smsg = "Thanks";
                break;
            case isInArray(hru, lastmsg):
                smsg = "I'm good, What about you?";
                break;
            case isInArray(good, lastmsg):
                smsg = "Nice to hear it. ??";
                break;
            case isInArray(wru, lastmsg):
                smsg = "Hi there! I'm Wise Estate, your AI real estate assistant. Ask me anything <br> about properties, neighborhoods, or real estate laws, and I'll provide the info you need!";
                break;
            case isInArray(wrud, lastmsg):
                smsg = "Waiting For Your Questions";
                break;
            case isInArray(bye, lastmsg):
                smsg = "Goodbye! If you have any more questions in the future, feel free to ask.<br> Have a great day!";
                break;
            case isInArray(th, lastmsg):
                smsg = "You're welcome! If you ever have more questions or need assistance in the future, <br> feel free to reach out. Have a wonderful day! ";
                break;
            case isInArray(ok, lastmsg):
                smsg = "If you ever need help or have more questions, don't hesitate to ask. Take care and have <br> a great day! Goodbye!";
                break;
            case isInArray(make, lastmsg):
                smsg = "If you ever need help or have more questions, don't hesitate to ask. Take care and have a great day! Goodbye! ake care and have a great day! Goodbye! ake care and have a great day! Goodbye!";
                break;
            case isInArray(death, lastmsg):
                smsg = "No, I'm not 'dead.' I'm a computer program, so I don't have life or consciousness. I'm here to assist you with information and answer your questions to the best of my abilities. If you have any specific inquiries or need assistance, feel free to let me know!";
                break;
            // End Common Questions
            case isInArray(riyas, lastmsg):
                smsg = "Game Over";
                break;
            case isInArray(riyas2, lastmsg):
                smsg = "Nee Poyi Pollik Macha Seen Sanam";
                break;

            default:
                setTimeout(function () {
                    $(".status").html("last seen today at " + time);
                }, 6000);

                setTimeout(function () {
                    $(".status").css("margin-left", "-50");
                }, 8000);

                smsg = "Sorry, I have no answer for that.";
                break;
        }

        para = $("<div class='message received'>" + smsg + "<span class='metadata'> <span class='time' >" + time + "</span></span></div>");
        setTimeout(function () {
            $('#ap').append(para); $(".status").html("online");
            $(".conversation-container").scrollTop(scroll);
        }, 1100);
      
    }
});