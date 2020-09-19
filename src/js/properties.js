var userMain  = new Vue({
    el: ".form__main__user",
    data: {
        fname : "Saul",
        lname : "Berenson",
        avatar : "https://picsum.photos/200?' + Math.floor(Math.random()*200)+'",
        statusOnline : true,
        
        search:"",
    },
    computed: {
        name(){
            return this.fname + " " + this.lname
        },
    }
});

var billing = new Vue({
    el: ".form__main__content__billing",
    data:{
        agentNumber: 1,
        close : false,
        pack_selected : "Annually",
        prices: {
            "Annually":{
                platform : 10,
                webChat : 4,
                webCall : 3,
                multyCh : 5,
                coBrow : 0,
                per : "yr"
            },
            "Monthly":{
                platform : 5,
                webChat : 2,
                webCall : 1,
                multyCh : 2,
                coBrow : 0,
                per : "mo"
            }
        }
    },
    methods:{
        incAgentNum: function(){
            this.agentNumber += 1
        },
        decAgentNum: function(){
            if(this.agentNumber > 1) this.agentNumber -= 1
        },
        changeagentNumber: function(){
            if(this.agentNumber < 1) this.agentNumber = 1
        },
        closePage: function(){
            this.close = true;
            sidebar.sidebarMenu.Billing.checked = false;
        }
    }
})

class menuButton{
    constructor(id,notifications,page2show, checked){
        this.id = id;
        this.page2show = page2show;
        this.notifications = notifications;
        this.checked = checked;
    }
}


var sidebar = new Vue({
    el: ".form__sidebar",
    data:{
        checked: false,
        sidebarMenu: {
            Dashboard :new menuButton(id = "#Dashboard", notifications = 2, page2show = "", checked = false),
            Answered : new menuButton(id = "#Answered", notifications = 0, page2show = "", checked = false),
            Unanswered : new menuButton(id = "#Unanswered", notifications = 0, page2show = "", checked = false),
            Users : new menuButton(id = "#Users", notifications = 0, page2show = "", checked = false),
            Departments : new menuButton(id = "#Departments", notifications = 0, page2show = "", checked = false),
            Devices : new menuButton(id = "#Devices", notifications = 0, page2show = "", checked = false),
            CallerSett : new menuButton(id = "#CallerSett", notifications = 0, page2show = "", checked = false),
            BlockedVis : new menuButton(id = "#BlockedVis", notifications = 0, page2show = "", checked = false),
            MyWidgets : new menuButton(id = "#MyWidgets", notifications = 0, page2show = "", checked = false),
            Generate : new menuButton(id = "#Generate", notifications = 0, page2show = "", checked = false),
            Billing : new menuButton(id = "#Billing", notifications = 0, page2show = billing, checked = true),
        },
        licenseStatus : "Free trial"
    },
    methods:{
        openPage: function(pushed){
            for(var variable in this.sidebarMenu)
            {
                if(this.sidebarMenu[variable].page2show) this.sidebarMenu[variable].page2show.close = true;
                this.sidebarMenu[variable].checked = false;
            }

            if(pushed.page2show) pushed.page2show.close = false;
            pushed.checked = true;
        },
    }
});
