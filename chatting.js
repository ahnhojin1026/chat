//alert(navigator.userAgent);
loadScriptTag("https://www.gstatic.com/firebasejs/5.3.0/firebase.js", onloadFirebase);
var myDB;
function onloadFirebase(){
  var config = {  
    apiKey: "AIzaSyA7TubknEyV98kIoFjO2nHPL7X3XeSLIwM",
    authDomain: "chatting-675c8.firebaseapp.com",
    databaseURL: "https://chatting-675c8.firebaseio.com",
    projectId: "chatting-675c8",
    storageBucket: "",
    messagingSenderId: "1081245441995"
  };
  firebase.initializeApp(config);
  myDB = firebase.database();
    loadchat();
    //mynick.text('');
    myDB.ref('users').on('value' , function(snapshot){
    snapshot.forEach(function(childSnapshot){
        box().appendTo(friendmain).size('80%',40).text(childSnapshot.val().nick).textSize(20).padding(5)
        .border(2).marginTop(5).borderRadius(5);
        });
    })
    myDB.ref('users').once('value').then(function(snapshot){
        snapshot.forEach(function(childsnapshot){    
            console.log(childsnapshot.val().id+"/"+localStorage.id)
            if(childsnapshot.val().id==localStorage.id){
             
                user={'id':childsnapshot.val().id,
                              'pw':childsnapshot.val().pw,
                              'nick':childsnapshot.val().nick}
                        loadchat();
                        alert(user.nick+"님 환영합니다");
                        idBox.text('');
                        pwBox.text('');
                        checklodgin=true;
                        cancellogin();
                        topbox1.hide();
                        topbox.show();
                        mynick1 = box().appendTo(topbox).size(80,30).float('left').textSize(15).padding(5).text('친구').click(startfriendmain);
                        chatting = box().appendTo(topbox).size(80,30).text('채팅').textSize(25).border(0);
                        logoutBox = box().appendTo(topbox).text('로그아웃').size(80,30).float('right').textSize(15).padding(3).click(startlogout);

            }  
        });
    })
}
var ids = [];
var checklodgin=false;
var topbox = box().append().size('100%',50).padding(10).hide();
var topbox1 = box().append().size('100%',50).padding(10);
var topbox2 = box().append().size('100%',50).padding(10).hide();
var topbox3 = box().append().size('100%',50).padding(10).hide();
var topbox4 = box().append().size('100%',50).padding(10).hide();
var chatmain = box().append().size('100%',400).overflow('auto');
var loginmain = box().append().size('100%',400).hide();
var friendmain = box().append().size('100%',400).hide().overflow('auto');
var joinmain = box().append().size('100%',400).hide();
var chatputmain= box().append().size('100%',50);
var loginchat = box().append().size('100%',50).hide();
var joinchat = box().append().size('100%',50).hide();

var mynick = box().appendTo(topbox1).size(80,30).float('left').textSize(15).padding(5).text('회원가입').click(startjoin);
box().appendTo(topbox1).size(80,30).text('채팅').textSize(25).border(0);
box().appendTo(topbox1).text('로그인').size(80,30).float('right').textSize(15).padding(3).click(startlogin);

var cancelLogin = box().appendTo(topbox2).size(80,30).float('left').textSize(15).padding(5).text('취소').click(cancellogin);
box().appendTo(topbox2).size(80,30).text('로그인').textSize(25).border(0);
box().appendTo(topbox2).size(80,30).float('right').textSize(15).padding(3);

var canceljoin = box().appendTo(topbox3).size(80,30).float('left').textSize(15).padding(5).text('취소').click(cancelJoin);
box().appendTo(topbox3).size(100,30).text('회원가입').textSize(25).border(0);
box().appendTo(topbox3).size(80,30).float('right').textSize(15).padding(3);

var cancelFriend = box().appendTo(topbox4).size(80,30).float('left').textSize(15).padding(5).text('취소').click(cancelfriend);
box().appendTo(topbox4).size(80,30).text('친구').textSize(25).border(0);
box().appendTo(topbox4).size(80,30).float('right').textSize(15).padding(3);

var chatput = box().appendTo(chatputmain).size('70%',40).editable().margin(4).border(3).borderRadius(10).textSize(20)
.padding(5);
var chatsend = box().appendTo(chatputmain).size(70,40).text('SEND').margin(4).border(0).color('black')
.textColor('white').textSize(15).padding(12).click(sendchat);

var bigid = box().appendTo(loginmain).size('100%',45).marginTop(100).border(0);
box().appendTo(bigid).size(70,40).text('아이디').textSize(16).padding(5).paddingTop(10).marginRight(20).
borderRadius(5).border(2);
var idBox = box().appendTo(bigid).size(270,40).border(5).borderRadius(10).editable().padding(5).textSize(15);

var bigpw = box().appendTo(loginmain).size('100%',45).marginTop(30).border(0);
box().appendTo(bigpw).size(80,40).text('비밀번호').textSize(16).padding(5).paddingTop(10).marginRight(20).
borderRadius(5).border(2);
var pwBox = box().appendTo(bigpw).size(270,40).border(5).borderRadius(10).editable().padding(5).textSize(15);

var loginBox = box().appendTo(loginmain).size(100,40).text('로그인').click(login).marginTop(30).border(5).padding(4).textSize(20);

var bigid = box().appendTo(joinmain).size('100%',45).marginTop(100).border(0);
box().appendTo(bigid).size(70,40).text('아이디').textSize(16).padding(5).paddingTop(10).marginRight(20).
borderRadius(5).border(2);
var newidBox = box().appendTo(bigid).size(270,40).border(5).borderRadius(10).editable().padding(5).textSize(15);

var bigpw = box().appendTo(joinmain).size('100%',45).marginTop(30).border(0);
box().appendTo(bigpw).size(80,40).text('비밀번호').textSize(16).padding(5).paddingTop(10).marginRight(20).
borderRadius(5).border(2);
var newpwBox = box().appendTo(bigpw).size(270,40).border(5).borderRadius(10).editable().padding(5).textSize(15);

var bignick = box().appendTo(joinmain).size('100%',45).marginTop(30).border(0);
box().appendTo(bignick).size(80,40).text('이름').textSize(16).padding(5).paddingTop(10).marginRight(20).
borderRadius(5).border(2);
var newnickBox = box().appendTo(bignick).size(270,40).border(5).borderRadius(10).editable().padding(5).textSize(15);

var joinBox = box().appendTo(joinmain).size(100,40).text('회원가입').click(join).marginTop(30).
border(5).padding(4).textSize(20);


    

function join(){
    localStorage.setItem("id","1234");
    
    var checkjoin=false;
    var checks=false;
    if(newidBox.text()==''||newpwBox.text()==''||newnickBox.text()==''){
        alert('값을 입력해 주세요');
        return;
    }
    myDB.ref('users').once('value').then(function(snapshot){
        snapshot.forEach(function(childsnapshot){ 
           if(childsnapshot.val()){
               
               if(childsnapshot.val().id==newidBox.text()){
                  checkjoin=true;
               }
              
           }
           
        });
         if(!checks){
               if(checkjoin){
                    alert('id가 중복됩니다\n다른 id를 입력해 주세요');
               }
               else if(!checkjoin){
                   alert('회원가입이 정상적으로 완료되었습니다');
                   checks=true;
                   cancelJoin();
                   var newperson = {'id': newidBox.text(),
                         'pw': newpwBox.text(),
                         'nick': newnickBox.text()}
        myDB.ref('users/'+newperson.id).set(newperson);
               }
           }
    });
}
       
function login(){
    var checkid=false;
    var checkpw=false;
    myDB.ref('users').on('value', function(snapshot){
    var cnt = snapshot.numChildren();
        snapshot.forEach(function(childsnapshot){
                   cnt--;
           if(childsnapshot.val()){
               if(childsnapshot.val().id==idBox.text()){
                    checkid=true;
                    if(childsnapshot.val().pw==pwBox.text()){
                        checkpw=true;
                        user={'id':childsnapshot.val().id,
                              'pw':childsnapshot.val().pw,
                              'nick':childsnapshot.val().nick}
                        alert(user.nick+"님 환영합니다");
                        localStorage.setItem("id",user.id);
                        loadchat();
                        idBox.text('');
                        pwBox.text('');
                        checklodgin=true;
                        cancellogin();
                        topbox1.hide();
                        topbox.show();
                        mynick1 = box().appendTo(topbox).size(80,30).float('left').textSize(15).padding(5).text('친구').click(startfriendmain);
                        chatting = box().appendTo(topbox).size(80,30).text('채팅').textSize(25).border(0);
                        logoutBox = box().appendTo(topbox).text('로그아웃').size(80,30).float('right').textSize(15).padding(3).click(startlogout);

                    }
                    
               }
           } 
           if(cnt==0){
    if(!checkid&&!checkpw){
        alert('아이디가 일치하지 않습니다');
        idBox.text('');
    }
    if(checkid && !checkpw){
        alert('비밀번호가 일치하지 않습니다');
        pwBox.text('');
    }
    }
        });
    });
    
}
function sendchat(bx){
    if(checklodgin){
    var chat = chatput.text()
    var d = new Date();
    var chatinfo = {};
    chatinfo.chat= chat;
    chatinfo.date =d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate()+'/'+d.getHours()+'/'+d.getMinutes()+'/'+d.getSeconds()+'/';
    chatinfo.nick=user.nick;
    myDB.ref('msgs').push().set(chatinfo);
    chatput.text('');
    }
    else{
        alert('로그인 후 이용해 주세요');
    }
}
function loadchat(){
    myDB.ref('msgs').on('value', function(snapshot){
        chatmain.clear();
        snapshot.forEach(function(childSnapshot){
            if(childSnapshot.val()){
            if(childSnapshot.val().nick!=user.nick){
            var bigchat = box().appendTo(chatmain).size('100%','auto').border(0);
            box().appendTo(bigchat).size('auto').textSize(10).padding(2).text(childSnapshot.val().nick).float('left').margin(2)
            .marginTop(15);
            box().appendTo(bigchat).size('auto').textSize(20).borderRadius(5).padding(5).text(childSnapshot.val().chat).float('left').margin(2);
            }
            if(childSnapshot.val().nick==user.nick){
            var bigchat = box().appendTo(chatmain).size('100%','auto').border(0);
            box().appendTo(bigchat).size('auto').textSize(10).padding(2).text(childSnapshot.val().nick).float('right').margin(2)
            .marginTop(15);
            box().appendTo(bigchat).size('auto').textSize(20).borderRadius(5).padding(5).text(childSnapshot.val().chat).float('right').margin(2);
            }
            }
        });
    })
}
function startlogin(){
    chatmain.hide();
    topbox1.hide();
    chatputmain.hide();
    topbox2.show();
    loginmain.show();
    loginchat.show();
}
function cancellogin(){
    chatmain.show();
    topbox1.show();
    chatputmain.show();
    topbox2.hide();
    loginmain.hide();
    loginchat.hide();
}
function startjoin(){
    chatmain.hide();
    topbox1.hide();
    chatputmain.hide();
    topbox3.show();
    joinmain.show();
    joinchat.show();
}
function cancelJoin(){
    chatmain.show();
    topbox1.show();
    chatputmain.show();
    topbox3.hide();
    joinmain.hide();
    joinchat.hide();
}
function startlogout(){
    checklodgin=false;
    chatmain.clear();
    topbox.hide();
    topbox1.show();
    user='';
    mynick1.remove();
    chatting.remove();
    logoutBox.remove();
    localStorage.setItem("id","");
}
function startfriendmain(){
    chatmain.hide();
    topbox.hide();
    chatputmain.hide();
    friendmain.show();
    topbox4.show();
    joinchat.show();
}
function cancelfriend(){
    chatmain.show();
    topbox.show();
    chatputmain.show();
    friendmain.hide();
    topbox4.hide();
    joinchat.hide();
}