var reader = new FileReader();
reader.readAsText('./traces.json');
reader.onload = function(){
    let traces = JSON.parse(this.result);
};

alert(traces)