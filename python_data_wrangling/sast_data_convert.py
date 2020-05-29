import json

with open('../raw_data/appsecco_dvna.json') as json_file:
	data = json.load(json_file)

modified_object = {}
modified_object["name"] = "DVNA sast scan"
modified_object["children"] = []

for result in data["runs"][0]["results"]:
	new_result = {}
	new_result["name"] = result["ruleId"]
	new_result["children"] = []
	modified_object["children"].append(new_result)


for result in data["runs"][0]["results"]:
	for mod_obj in modified_object["children"]:
		if result["ruleId"] == mod_obj["name"]:
			new_child = {}
			new_child["name"] = result["locations"][0]["physicalLocation"]["artifactLocation"]["uri"]
			new_child["startLine"] = result["locations"][0]["physicalLocation"]["region"]["startLine"]
			mod_obj["children"].append(new_child)

unique_child = []

for index, child in enumerate(modified_object["children"]):
	if child["name"] in unique_child:
		del modified_object["children"][index:index+1]
		print(index)
	else:
		unique_child.append(child["name"])
print(unique_child)

with open('../public/dvna_sast.json', 'w') as outfile:
	json.dump(modified_object, outfile)