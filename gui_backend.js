window.onload = loadJobStatusData;
window.onload = loadServerStatusData;
window.onload = populateJobStatusTable;
window.onload = populateServerStatusTable;
const axios = require('axios');
function sendChaosFormData(){
    var error = false;
    var chaosRadioButtonKill = document.getElementById("chaos_radio_kill_component");
    var chaosRadioButtonDisconnect = document.getElementById("chaos_radio_disconnect_component");
    var chaosRadioButtonReconnect= document.getElementById("chaos_radio_reconnect_connection");
    var chaosId = document.getElementById("chaos_id");
    if(!(chaosRadioButtonKill.checked
      ||chaosRadioButtonDisconnect.checked)
      ||chaosRadioButtonReconnect.checked){
        alert("choose connection/component");
        error = true;
    }
    if(chaosId.value == ""){
        alert("enter id");
        error = true;
    }
    if(!error){
        var url;
        if (chaosRadioButtonKill.checked)
          url = "http://localhost:5021/kill";
        else if(chaosRadioButtonDisconnect.checked)
          url = "http://localhost:5021/kill";
        else if(chaosRadioButtonReconnect.checked)
          url = "http://localhost:5021/kill";
        var component_id = chaosId.value;
        axios.post(url, {
            "component_id": component_id
            })
            .then(resp => console.log(resp.data))
            .catch(console.log);
    }
    return error;
}
function sendStressTestingFormData(){
    var error = false;
    var jobId = document.getElementById("stress_job_id");
    var numberOfJobs = document.getElementById("stress_number_of_jobs");
    var jobDuration = document.getElementById("stress_duration_of_job");
    
    if(jobId.value == ""){
        alert("enter user name");
        error = true;
    }
    if(numberOfJobs.value == ""){
        alert("enter number of jobs");
        error = true;
    }
    if(jobDuration.value == ""){
        alert("enter duration of jobs");
        error = true;
    }
    if(!error){
        var job_name=jobId.value;
        var num_jobs=numberOfJobs.value;
        var job_duration=jobDuration.value;
        
        console.log({
            'job_name':job_name,
            'num_jobs':num_jobs,
            'job_duration': job_duration
                });

        axios.post('http://localhost:5011/jobs', {
            'job_name':job_name,
            'num_jobs':parseInt(num_jobs),
            'job_duration': parseInt(job_duration),
                })
            .then(resp => console.log(resp.data))
            .catch(console.log);
      } 
    return error;
}

function loadJobStatusData(){
  const jobsInterval = setInterval(function() {
    populateJobStatusTable();
  }, 5000);
}

function loadServerStatusData(){
  const ServerStatusInterval = setInterval(function() {
    populateServerStatusTable();
  }, 10000);
}

function populateJobStatusTable(){
  const table = document.getElementById("job_status_table");
  // var obj = JSON.parse('{ "Joy": {"completed": 8, "total": 22},"Solar": { "completed": 30, "total": 30},"Tiffany": {"completed": 20,"total": 20}}');
  // Object.keys(obj).forEach(function(job){
  //   let row = table.insertRow();
  //   let job_cell = row.insertCell(0);
  //   job_cell.innerHTML = job;
  //   let completed_cell = row.insertCell(1);
  //   completed_cell.innerHTML = obj[job]["completed"];
  //   let total_cell = row.insertCell(2);
  //   total_cell.innerHTML = obj[job]["total"];
  // })

  monitoringSystemUrl = "http://localhost:5031/job_status";
  axios.get(monitoringSystemUrl)
    .then(resp => {
      Object.keys(JSON.parse(resp.data)).forEach(function(job){
        let row = table.insertRow();
        let job_cell = row.insertCell(0);
        job_cell.innerHTML = job;
        let completed_cell = row.insertCell(1);
        completed_cell.innerHTML = resp.json[job]["completed"];
        let total_cell = row.insertCell(2);
        total_cell.innerHTML = resp.json[job]["total"];
      })
    })
    .catch(err => console.log(err));
}

function populateServerStatusTable(){
  const table = document.getElementById("server_utilization_status_table");
  // var obj = JSON.parse('[ { "name": "dcn_worker3_1", "stats": {"cpu_percentage": 0.074,"mem_percentage": 0.002}},{"name": "dcn_worker1_1","stats": {"cpu_percentage": 0.084,"mem_percentage": 0.002}}]');
  // obj.forEach(function(component) {
  //   let row = table.insertRow();
  //   let component_cell = row.insertCell(0);
  //   component_cell.innerHTML = component["name"];
  //   let cpu_utilization_cell = row.insertCell(1);
  //   cpu_utilization_cell.innerHTML = component["stats"]["cpu_percentage"];
  //   let ram_utilization_cell = row.insertCell(2);
  //   ram_utilization_cell.innerHTML = component["stats"]["mem_percentage"];
  // });
  
  monitoringSystemUrl = "http://localhost:5031/status";
  axios.get(monitoringSystemUrl)
    .then(resp => {
      Object.keys(JSON.parse(resp.data)).forEach(function(component) {
        let row = table.insertRow();
        let component_cell = row.insertCell(0);
        component_cell.innerHTML = component["name"];
        let cpu_utilization_cell = row.insertCell(1);
        cpu_utilization_cell.innerHTML = component["stats"]["cpu_percentage"];
        let ram_utilization_cell = row.insertCell(2);
        ram_utilization_cell.innerHTML = component["stats"]["mem_percentage"];
      })
    })
    .catch(err => console.log(err));
}

module.exports = sendStressTestingFormData;
