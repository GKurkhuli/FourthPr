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

        packs: {
            "platform" : {
                id: "platform",
                name: "Platform price",
                "Annually": 10.0,
                "Monthly": 5.0,
                checked : true
            },
            "webchat" : {
                id: "webchat",
                name: "Web Chat",
                "Annually": 4.0,
                "Monthly": 2.0,
                checked : true
            },
            "webCall": {
                id: "webCall",
                name: "Web Call",
                "Annually":3.0,
                "Monthly": 1.0,
                checked : false
            },
            "multiCh": {
                id: "multiCh",
                name: "Multi Channel",
                "Annually": 5.0,
                "Monthly":2.0,
                checked : false
            },
            "coBrow" : {
                id: "coBrow",
                name: "Co-browsing",
                "Annually": 0.0,
                "Monthly": 0.0,
                checked : true
            },
            per : {
                "Annually": "yr",
                "Monthly": "mo",
                checked : false
            }
        },
        priceTotal: 0,   
    },
    methods:{
        incAgentNum: function(){
            this.agentNumber += 1
        },
        decAgentNum: function(){
            if(this.agentNumber > 1) this.agentNumber -= 1
        },
        changeagentNumber: function(){
            this.agentNumber = parseInt(this.agentNumber);
            if(this.agentNumber < 1) this.agentNumber = 1
        },
        closePage: function(){
            this.close = true;
            sidebar.sidebarMenu.Billing.checked = false;
        },
    },
    computed:{
        selected(){
            let selectedPacks = [];
            this.priceTotal = 0;
            for(var variable in this.packs)
                if(this.packs[variable].checked)
                    selectedPacks.push(this.packs[variable]);

            selectedPacks.forEach(element => {
                this.priceTotal += element[this.pack_selected];
            });
            return selectedPacks
        },
        priceCheckbox(Name){
            return '<span class="price__int">$'+this.packs[Name][this.pack_selected]+'.</span><span class="price__dec">'+ +'</span><span class="price__per">/'+ this.packs.per[this.pack_selected]+'.</span>'
        },
        priceCalck(id){
            return '<span class="list-price-int">$'+this.packs[id][this.pack_selected]+'.</span><span class="list-price-dec">'+ +'</span><span class="list-price-per">/'+ this.packs.per[this.pack_selected]+'.</span><span class="list-price-question"><ion-icon name="help-circle-outline"></ion-icon></span>'
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
