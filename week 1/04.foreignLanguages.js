function language(input){
    switch(input){
        case "England":
            case "USA": console.log('English'); return;
            case "Spain":
                case "Argentina":
                    case "Mexico": console.log("Spanish"); return;
        default: console.log("unknown");break; 
    }
}

language("England")