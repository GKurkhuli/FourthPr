var user = new Vue({
    el: ".form__main__user__account",
    data: {
        fname: "Saul",
        lname: "Berenson",
        avatar: "https://picsum.photos/200?' + Math.floor(Math.random()*200)+'",
        statusOnline: true 
    }
});

var billing = new Vue({
    el: ".form__main__content__billing",
    data:{
        agentNumber: 1,
    },
    methods:{
        incAgentNum: function(){
            this.agentNumber += 1
        },
        decAgentNum: function(){
            if(this.agentNumber > 1) this.agentNumber -= 1
        },
        changeagentNumber: function(){
            var num = parseInt(document.querySelector("#agentNumber").value);
            if(num > 1)this.agentNumber = num;
            else document.querySelector("#agentNumber").value = this.agentNumber;
        },
        closePage: function(){
            document.querySelector(".form__main__content__billing").classList.add("displayNone");
            document.getElementById("Billing").classList.remove("form__sidebar__menu__content-sub-button-pressed")
        } 
    }
})

class menuButton{
    constructor(id,notifications,page2show){
        this.id = id;
        this.page2show = page2show;
        this.notifications = notifications;
    }
}


var sidebar = new Vue({
    el: ".form__sidebar",
    data:{
        checked: false,

        Dashboard :new menuButton(id = "#Dashboard", notifications = 2, page2show = ""),
        Answered : new menuButton(id = "#Answered", notifications = 0, page2show = ""),
        Unanswered : new menuButton(id = "#Unanswered", notifications = 0, page2show = ""),
        Users : new menuButton(id = "#Users", notifications = 0, page2show = ""),
        Departments : new menuButton(id = "#Departments", notifications = 0, page2show = ""),
        Devices : new menuButton(id = "#Devices", notifications = 0, page2show = ""),
        CallerSett : new menuButton(id = "#CallerSett", notifications = 0, page2show = ""),
        BlockedVis : new menuButton(id = "#BlockedVis", notifications = 0, page2show = ""),
        MyWidgets : new menuButton(id = "#MyWidgets", notifications = 0, page2show = ""),
        Generate : new menuButton(id = "#Generate", notifications = 0, page2show = ""),
        Billing : new menuButton(id = "#Billing", notifications = 0, page2show = ".form__main__content__billing")
    },
    methods:{
        sidebar_show_hide:function () {
            this.checked = ~this.checked;
        },
        openPage: function(pushed){
            document.querySelectorAll(".form__main__content__box").forEach(element => {
                element.classList.add("displayNone");
            });
            if(pushed.page2show) document.querySelector(pushed.page2show).classList.remove("displayNone")

            let li = document.querySelectorAll(".form__sidebar__menu__content-sub-button");
            li.forEach(element => {
                element.classList.remove("form__sidebar__menu__content-sub-button-pressed");
            });
            
            document.querySelector(pushed.id).classList.add("form__sidebar__menu__content-sub-button-pressed")
        },
    }
});



 

