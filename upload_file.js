var request = require("request");
var fs = require("fs");

let fileStream = fs.createReadStream(__dirname + "/samplefile.txt");
let fileName = "samplefile.txt";

var options = {
  method: "POST",
  url: "https://api.metadefender.com/v4/file",
  headers: {
    apikey: process.env.APIKEY,
    "Content-Type": "application/octet-stream",
    filename: fileName,
    samplesharing: 1,
    privateprocessing: 0,
    rescan_count: "5",
  },
  body: {
    file: fileStream,
    data_id: "ZTE2MTIyNkhKeGs5WElSNHhIMVFGLVlUYk85LQ",
    scan_results: {
      scan_details: {
        Lavasoft: {
          scan_time: 12234,
          def_time: "2017-09-14T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        STOPzilla: {
          scan_time: 4109,
          def_time: "2017-09-07T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        "Zillya!": {
          scan_time: 1828,
          def_time: "2017-09-13T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        VirusBlokAda: {
          scan_time: 2078,
          def_time: "2017-09-13T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        TrendMicro: {
          scan_time: 1938,
          def_time: "2017-09-13T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        SUPERAntiSpyware: {
          scan_time: 1781,
          def_time: "2017-09-13T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        nProtect: {
          scan_time: 1953,
          def_time: "2017-09-13T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        NANOAV: {
          scan_time: 1938,
          def_time: "2017-09-13T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        "F-secure": {
          scan_time: 2078,
          def_time: "2017-09-13T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        ESET: {
          scan_time: 1703,
          def_time: "2017-09-13T00:00:00.000Z",
          scan_result_i: 1,
          threat_found: "a variant of Win32/HackTool.Crack.EN application",
        },
        BitDefender: {
          scan_time: 1859,
          def_time: "2017-09-14T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        Baidu: {
          scan_time: 2703,
          def_time: "2017-09-14T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        Ahnlab: {
          scan_time: 1875,
          def_time: "2017-09-14T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        AegisLab: {
          scan_time: 1844,
          def_time: "2017-09-13T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        Zoner: {
          scan_time: 1484,
          def_time: "2017-09-12T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        ThreatTrack: {
          scan_time: 1609,
          def_time: "2017-09-14T00:00:00.000Z",
          scan_result_i: 1,
          threat_found: "Trojan.Win32.Generic!BT",
        },
        Sophos: {
          scan_time: 1453,
          def_time: "2017-09-13T00:00:00.000Z",
          scan_result_i: 1,
          threat_found: "App/Steam-AM",
        },
        Preventon: {
          scan_time: 906,
          def_time: "2017-09-14T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        McAfee: {
          scan_time: 922,
          def_time: "2017-09-13T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        K7: {
          scan_time: 984,
          def_time: "2017-09-14T00:00:00.000Z",
          scan_result_i: 1,
          threat_found: "Unwanted-Program ( 004f3e6f1 )",
        },
        Jiangmin: {
          scan_time: 1641,
          def_time: "2017-09-14T00:00:00.000Z",
          scan_result_i: 1,
          threat_found: "RiskTool.Gamehack.xm",
        },
        Hauri: {
          scan_time: 1609,
          def_time: "2017-09-14T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        "F-prot": {
          scan_time: 891,
          def_time: "2017-09-14T00:00:00.000Z",
          scan_result_i: 1,
          threat_found: "W32/S-5cce9173!Eldorado",
        },
        Fortinet: {
          scan_time: 1391,
          def_time: "2017-09-14T00:00:00.000Z",
          scan_result_i: 1,
          threat_found: "Riskware/Reloaded",
        },
        Filseclab: {
          scan_time: 1656,
          def_time: "2017-09-13T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        Emsisoft: {
          scan_time: 922,
          def_time: "2017-09-14T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        ClamAV: {
          scan_time: 1594,
          def_time: "2017-09-14T00:00:00.000Z",
          scan_result_i: 1,
          threat_found: "Win.Trojan.Agent-5400546-0",
        },
        ByteHero: {
          scan_time: 891,
          def_time: "2017-09-14T00:00:00.000Z",
          scan_result_i: 1,
          threat_found: "Trojan.Malware.Obscu.Gen.009",
        },
        Avira: {
          scan_time: 984,
          def_time: "2017-09-13T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        AVG: {
          scan_time: 984,
          def_time: "2017-09-13T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        Agnitum: {
          scan_time: 1234,
          def_time: "2017-08-22T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        Ikarus: {
          scan_time: 328,
          def_time: "2017-09-13T00:00:00.000Z",
          scan_result_i: 1,
          threat_found: "PUA.HackTool.Crack",
        },
        Cyren: {
          scan_time: 875,
          def_time: "2017-09-14T00:00:00.000Z",
          scan_result_i: 1,
          threat_found: "W32/S-5cce9173!Eldorado",
        },
        "Microsoft Security Essentials": {
          scan_time: 1906,
          def_time: "2017-09-13T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        "Quick Heal": {
          scan_time: 1813,
          def_time: "2017-09-13T00:00:00.000Z",
          scan_result_i: 1,
          threat_found: "Trojan.Generic",
        },
        "Total Defense": {
          scan_time: 1484,
          def_time: "2017-09-13T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        "TrendMicro House Call": {
          scan_time: 1563,
          def_time: "2017-09-12T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        "Xvirus Personal Guard": {
          scan_time: 3969,
          def_time: "2017-09-14T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        "Dr.Web Gateway": {
          scan_time: 1656,
          def_time: "2017-09-14T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
        "Vir.IT eXplorer": {
          scan_time: 1859,
          def_time: "2017-09-13T00:00:00.000Z",
          scan_result_i: 0,
          threat_found: "",
        },
      },
      scan_all_result_i: 1,
      start_time: "2017-09-14T14:18:54.204Z",
      total_time: 12234,
      total_avs: 40,
      total_detected_avs: 12,
      progress_percentage: 100,
      scan_all_result_a: "Infected",
    },
    file_info: {
      file_size: 1329156,
      upload_timestamp: "2016-12-26T08:23:23.000Z",
      md5: "3642441003AFAE1A776E4EC618DEA974",
      sha1: "DB6EE570F574C311D67F263A92DB6D45EAE18954",
      sha256:
        "CA4200D6C6A7275B3EC083FEFE6330A34233D38200843C3853E28D12801FF465",
      file_type_category: "E",
      file_type_description: "Win32 Dynamic Link Library (generic)",
      file_type_extension: "exe/dll/ocx",
      display_name: "steam_apirajas.dll",
    },
    share_file: 1,
    rest_version: "3",
    additional_info: [],
    votes: {
      up: 0,
      down: 0,
    },
  },
  json: true,
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
