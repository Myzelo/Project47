class Game {
    constructor(){
        
    }

    updateGameState(state){
        firebase.database().ref("/").update({
            gameState:state
        })
    }

    getState(state){
        firebase.database().ref("gameState").on("value", (data)=>{
            gameState = data.val()
        })
    }
    
    play(){
        imageMode(CENTER);
        image(classroomImg,windowWidth/2, windowHeight/2, windowWidth, windowHeight);
    }
}