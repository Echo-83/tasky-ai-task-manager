class Task {

    constructor(text="", priority=1, deadline= new Date(), state = false) {
        this.text = text;
        this.priority = priority;
        this.deadline = deadline;
        this.state = state;
    }

    setText(text){
        this.text = text;
    }
    getText(){
        return this.text ;
    }
    setPriority(priority){
        this.priority = priority;
    }
    getPriority(){
        return this.priority ;
    }
    setDeadline(deadline){
        this.deadline = deadline;
    }
    getDeadline(){
        return this.deadline ;
    }
    setState(state){
        this.state = state;
    }
    getState(){
        return this.state;
    }

    taskChecker(){
        const date = new Date();
        if (((this.deadine.getTime() - date.getTime())<0) && (!this.state)){
            return "the task is not done yet you missed the deadline";
        }
        return "On time or done";
    }}
    export default Task;