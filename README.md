# OPSWAT Assessment

## Description

- A program that implements a hash lookup prior to uploading a file for scanning

## Behavior

- The program:

  - Calculates the hash of the input file.
  - Performs a hash lookup for cached scan results of the file.
  - If a cached result is found, display the result
  - If there are no such results, uploads the file and retrieves a data_id of the file
  - Repeatedly pull scan results of the uploaded file using the data_id until scan is complete
  - Displays the results

## Installation

- First, clone the repository

```
git clone git@github.com:hugh18019/opswat_assessment.git
```

- Make sure to be in the root directory of the repository

- Install the necessary npm packages

```
npm i
```

- Create a .env file at the root directory, and create the following properties

```
APIKEY = your_opswat_apikey
URL = https://api.metadefender.com/v4
```

## Usage

- Run the program by entering:

```
npm start upload_file <path_to_your_file>
```

## Demo

```
node index.js upload_file samplefile.txt


filename:  samplefile.txt
overall_status:  clean


engine:  AegisLab
threat_found Clean
scan_result 0
def_time:  2022-04-18T07:36:29.000Z


engine:  AhnLab
threat_found Clean
scan_result 0
def_time:  2022-04-18T00:00:00.000Z


engine:  Antiy
threat_found Clean
scan_result 10
def_time:  2022-04-17T13:42:00.000Z

```

```
node index.js upload_file samplefile3.txt
No cached result was found for the file.
scan_progress 95
scan_progress 100


filename:  samplefile3.txt
overall_status:  clean


engine:  AegisLab
threat_found Clean
scan_result 0
def_time:  2022-04-18T07:36:29.000Z


engine:  AhnLab
threat_found Clean
scan_result 0
def_time:  2022-04-18T00:00:00.000Z


engine:  Antiy
threat_found Clean
scan_result 0
def_time:  2022-04-17T13:42:00.000Z

```

## Packages

- cross-fetch
- crypto
- dotenv

## Author

- Huiran Lin

- [Github](https://github.com/hugh18019)

## License

- Licensed under the [MIT License](LICENSE).
