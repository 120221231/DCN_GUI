function sendChaosFormData(){
    var error = false;
    if(!(document.getElementById("chaos_radio_connection").checked||document.getElementById("chaos_radio_component").checked)){
        alert("choose connection/component");
        error = true;
    }
    if(document.getElementById("chaos_id").value == ""){
        alert("enter id");
        error = true;
    }
    if(!error){
        var dcnNode;
        if (document.getElementById("chaos_radio_connection").checked)
        dcnNode = "Connection";
        else
        dcnNode = "Component";
        var id = document.getElementById("chaos_id").value;
        axios.post('dummy-url', {
            dcnNode,
            id
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
}
function sendStressTestingFormData(){
    var error = false;
    if(document.getElementById("stress_user_name").value == ""){
        alert("enter user name");
        error = true;
    }
    if(document.getElementById("stress_number_of_jobs").value == ""){
        alert("enter number of jobs");
        error = true;
    }
    if(document.getElementById("stress_duration_of_job").value == ""){
        alert("enter duration of jobs");
        error = true;
    }
    if(!error){
        var userName=document.getElementById("stress_user_name").value;
        var numJobs=document.getElementById("stress_number_of_jobs").value;
        var jobDuration=document.getElementById("stress_duration_of_job").value;
        axios.post('dummy-url', {
            userName,
            numJobs,
            jobDuration
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
}
