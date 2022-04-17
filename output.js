function output(filename, result) {
  let formatted_output = gatherInfo(filename, result);

  console.log("filename: ", formatted_output.filename);
  console.log("overall_status: ", formatted_output.overall_status);

  let scan_details = formatted_output.scan_results.scan_details;

  for (let [engine, engine_res] of Object.entries(scan_details)) {
    console.log("engine: ", engine);
    console.log("threat_found", engine_res.threat_found);
    console.log("scan_result", engine_res.scan_result_i);
    console.log("def_time: ", engine_res.def_time);
  }
}

function gatherInfo(filename, result) {
  //   var scan_details = result.scan_results.scan_details;

  let output = Object.assign({}, result);
  output.filename = filename;

  var scan_details_array = Object.entries(output.scan_results.scan_details);

  for (let [lab, lab_res] of scan_details_array) {
    console.log("lab_res.threat_found", lab_res.threat_found);

    if (lab_res.threat_found === "") {
      output.scan_results.scan_details[lab].threat_found = "Clean";
    } else {
      output.overall_status = "Infected";
    }
  }

  return output;
}

module.exports = {
  output: output,
};
